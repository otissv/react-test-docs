'use strict';
import tape from 'tape';
import addAssertions from 'extend-tape';
import React from 'react';
import {
  renderDom,
  renderJsx
} from './renderElement';



export default  function assertions () {
  let rows = {};
  let parent;

  let stats = {
    asserts : 0,
    passed : 0,
    failed : 0
  };

  tape.createStream({ objectMode: true }).on('data', function (row, x) {

    if (row.parent == null && row.type == 'test') {
      rows[row.id] = {
        ...row,
        passed : 0,
        failed : 0,
        tests: {}
      };

    } else if (row.parent != null && row.type == 'test') {
      parent = row.parent;
      rows[row.parent].tests[row.id] = {
        ...row,
        passed : 0,
        failed : 0,
        asserts: []
      }

    } else if (row.type === 'assert') {

      if (row.ok) {
        rows[parent].tests[row.test].passed++;
        rows[parent].passed++;
      } else {
        rows[parent].tests[row.test].failed++;
        rows[parent].failed++;
      }

      rows[parent].tests[row.test].asserts.push({
        id: row.id,
        ok: row.ok,
        name:row. name,
        operator: row.operator,
        objectPrintDepth: row.objectPrintDepth,
        actual: row.actual,
        expected: row.expected,
        extend: row.extend,
        skip: row.skip,
        test: row.test,
        type: row.type,
        error: !row.error ? {} : {
          columnNumber: row.column,
          fileName: row.fileName,
          functionName: row.functionName,
          message: row.error.message,
          name: row.error.name,
          lineNumber: row.line,
          stack: row.error.stack,
          at: row.at,
        }
      });

      stats.asserts++;
      row.ok ? stats.passed++ : stats.failed++;
    }

  }).on('end', function(data) {
    const transformRows = Object.keys(rows).map(r => {
      const parent = rows[r];
      return {
        ...parent,
        tests: Object.keys(parent.tests).map(t => {
          const test =  parent.tests[t];
          return {
            ...test,
            asserts: Object.keys(test.asserts).map(a => test.asserts[a])
          }
        })
      };
    });


    process.stdout.write(JSON.stringify({
      stats,
      results: transformRows
    }, null, '  '));
  });


  return addAssertions(tape, {
    hasClass (element, selector, className, name, extras) {
      const Component = element.component;
      const props = element.props;
      let propTypes = {};

      const actual = renderDom(<Component />).dom(selector);
      this.ok(actual.hasClass(className), name, {
        extend: {
          component: { fn: Component.toString(), props, propTypes },
          ...extras
        }
      });
    },

    equalsJSX (element, expectElement, name, extras) {
      const Component = element.component;
      const props = element.props;
      let propTypes = {};


      if (element.component && element.component.propTypes) {
        const firstPropType = Object.keys(element.component.propTypes)[0];
        const initial = { [firstPropType]: firstPropType }

        propTypes = Object.keys(element.component.propTypes).reduce((prev, curr) => {
          return {
            ...prev,
            [curr]: element.component.propTypes[curr]
          };
        }, initial);
      }


      const actual = renderJsx(<Component {...props} />);
      const expect = renderJsx(expectElement);

      this.equals(actual, expect, name, {
        extend: {
          component: { fn: Component.toString(), props, propTypes },
          ...extras
        }
      });
    }
  });
}
