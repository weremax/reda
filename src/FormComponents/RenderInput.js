import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import RenderInputLabel from '../FormComponents/RenderInputLabel';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';


class RenderInput extends Component {

    renderInputLabels() {
        if (this.props.label) {
            return <RenderInputLabel {...this.props} />;
        }
        
        return null;
    }

    renderInputField() {
        const { classes, meta: { touched, error }, inputProps } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';
        
        if (this.props.multiline) {
            return (
                <InputBase
                    id={this.props.input.name}
                    name={this.props.input.name}
                    defaultValue={this.props.input.value}
                    inputProps={inputProps}
                    classes={{
                        root: classes.bootstrapRoot,
                        input: classes.bootstrapMultiInput,
                    }}
                    disabled={this.props.disabled}
                    multiline={this.props.multiline}
                    rows={this.props.rows}
                    {...this.props.input}
                />
            )
        }

        return (
            <InputBase
                        id={this.props.input.name}
                        name={this.props.input.name}
                        defaultValue={this.props.input.value}
                        inputProps={inputProps}
                        classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        }}
                        disabled={this.props.disabled}
                        {...this.props.input}
                    />
        )
    }

    render() {
        const { classes, meta: { touched, error }, inputProps } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';
        return (
            <div>
                <FormControl className={classes.margin}>
                    {this.renderInputLabels()}
                    {this.renderInputField()}
                    <div className={classes.errorMessage}>
                        { touched ? error : '' }
                    </div>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(styles)(RenderInput);
