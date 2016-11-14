import React from 'react';
import autobind  from 'class-autobind';
import uikit from 'react-uikit-base';
import Grid from 'react-uikit-grid';
import Icons from 'react-uikit-icons';
import Button from 'react-uikit-button';

class AppHeader extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }


  render () {
    return <header>
      <Grid widths='1-1' className='App-header'>
        <div>
          <Button
            className='App-open'
            context='link'
            onClick={this.props.onOpenSideBar}
          >
            <Icons icon='list-ul' />
          </Button>
        </div>
      </Grid>
    </header>;
  }
};

export default uikit.base(AppHeader);
