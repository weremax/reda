import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';

import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';

class RenderInputLabel extends Component {
  render() {
    const { classes, meta: { touched, error }, inputProps } = this.props;
        
        if (touched && error) {
            return (
                <InputLabel shrink className={classes.bootstrapFormLabel} error>
                    {this.props.label}
                </InputLabel>
            )
        }

        return (
            <InputLabel shrink className={classes.bootstrapFormLabel} >
                {this.props.label}
            </InputLabel>
        )
  }
}

export default withStyles(styles)(RenderInputLabel);
