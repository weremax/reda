import _ from 'lodash';
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import RenderInputLabel from '../FormComponents/RenderInputLabel';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';


class RenderRadio extends Component {

  renderRadios() {
    const { values } = this.props;

     return _.map(values, value => {
        return (
          <FormControlLabel value={value.value} control={<Radio disabled={this.props.disabled}/>} label={value.label} key={`${value.label}${value.value}`}/>
        )
      })
    
  }

  render() {
    const { classes, meta: { touched, error }, inputProps } = this.props;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    let err = (error) ? error : '';
    console.log('-- renderradio');
    return (
      <div>
        <FormControl className={classes.bootstrapSelect}>
          <RenderInputLabel {...this.props}/>
          <RadioGroup
            name={this.props.input.name}
            classes={classes}
            {...this.props.input}
          >
            {this.renderRadios()}
          </RadioGroup>
        </FormControl>
        </div>
    )
  }
}

export default withStyles(styles)(RenderRadio);