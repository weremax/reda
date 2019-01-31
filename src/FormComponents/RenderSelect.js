import _ from 'lodash';
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RenderInputLabel from '../FormComponents/RenderInputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { toTitleCase } from '../Helpers';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';


class RenderSelect extends Component {

    renderMenuItems() {
        const { values } = this.props;
        
        return _.map(values, value => {
            return (
                <MenuItem value={value.value.toUpperCase()} key={`${value.label}${value.value}`}>{value.label}</MenuItem>
            )
        })
            
    }

    renderShowNone() {
        if (this.props.showNone === false) {
            return null;
        }

        return (
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
        );
    }


    render() {
        const { classes, meta: { touched, error }, inputProps } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';

        
        return (
            <div>
                <div>
                    <FormControl className={classes.margin}>
                        <RenderInputLabel {...this.props}/>
                    </FormControl>
                </div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        id={this.props.input.name}
                        name={this.props.input.name}
                        value={this.props.input.value}
                        inputProps={inputProps}
                        classes={classes}
                        disabled={this.props.disabled}
                        input={
                            <OutlinedInput
                                name={this.props.input.name}
                                id={this.props.input.name}
                                labelWidth={0}
                                className={classes.bootstrapMultiInput}
                            />
                        }
                        {...this.props.input}
                    >
                    {this.renderShowNone()}
                        
                        {this.renderMenuItems()}

                    </Select>
                    <div className={classes.errorMessage}>
                        { touched ? error : '' }
                    </div>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(styles)(RenderSelect);