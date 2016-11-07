'use strict';

import ReactDOMServer from 'react-dom/server';
import { createRenderer } from 'react-addons-test-utils';
import dom from 'cheerio';

export function renderDom (element, tag) {
  const renderMarkup = ReactDOMServer.renderToStaticMarkup;
  const $ = dom.load(renderMarkup(element));

  return {
    dom : tag => tag ? $(tag) : $
  };
}

export function renderJsx (element) {
  return renderDom(element).dom().html();
}
