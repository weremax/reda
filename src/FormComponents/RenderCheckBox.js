import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import RenderInputLabel from '../FormComponents/RenderInputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';

class RenderCheckBox extends Component {

    renderBoxs() {
        const { values } = this.props;

        return _.map(values, value => {
            //console.log("render values",value.value,value.label)
            return (
                <FormControlLabel value={value.value} control={<Checkbox />} label={value.label} key={`${value.label}${value.value}`} />
            )
        })

    }

    render() {
        const { classes, meta: { touched, error }, inputProps } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';
        return (
            <div>
                <FormControl className={classes.margin}>
                    <FormLabel style={{ marginLeft: '50px' }}>{this.props.input.label}</FormLabel>
                    <FormGroup
                        id={this.props.input.name}
                        className={classes.bootstrapSelect2}
                        classes={classes}
                        {...this.props.input}>
                        {this.renderBoxs()}
                    </FormGroup>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(styles)(RenderCheckBox);
