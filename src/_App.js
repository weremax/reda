import _ from 'lodash'; 
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

let args = [
  {firstName: 'Christopher'},
  {firstName: 'Ted'},
  {firstName: 'Jerry'},
  {firstName: 'Steve'},
  {firstName: 'Ellis'}
];

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const SimpleForm = (props) => {
  return (
      <div style={{ padding: 30 }}>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
  )
}

class Simple extends React.Component {

  state = {
    right: false
  };

  toggleDrawer = (side, open, arg) => () => {
    this.props.initialize(arg);
    this.setState({
      [side]: open,
    });
  }

  renderButtons() {
    return _.map(args, arg => {
      return (
        <div key={arg.firstName}>
          <Button onClick={this.toggleDrawer('right', true, arg)}>Open Right {arg.firstName}</Button>
        </div>
      )
    })
  }

  render() {
    const { handleSubmit } = this.props;
    console.log('sta--->', this.state);
      //this.props.initialize(arg);
    return (
        <div>
          {this.renderButtons()}
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)} variant="persistent">
        <div
          tabIndex={0}
          role="button"
          onClick={this.toggleDrawer('right', false)}
          onKeyDown={this.toggleDrawer('right', false)}
        >
        <form onSubmit={handleSubmit}>
          <SimpleForm />
        </form>
        </div>
      </Drawer>
      </div>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(withStyles(styles)(Simple));
