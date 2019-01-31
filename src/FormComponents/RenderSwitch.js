import React, { Component, Fragment } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';

class RenderSwitch extends Component {

    renderSw() {
        const { input } = this.props;
        let { value } = input;

        if (value.length > 1) {
            value = value.replace(/\s/g,'');
        }
        //console.log(input.name, input.value);

        if (value === 'Y' || value === true) {
            return (
                <Switch
                    checked={true}
                    color="secondary"
                    {...this.props.input}
                    disabled={this.props.disabled}
                />
            )
        }

        return (
            <Switch
                checked={false}
                color="secondary"
                {...this.props.input}
                disabled={this.props.disabled}
            />
        )

    }
    
    render() {
        const { classes } = this.props;
        console.log('-- renderswitch');
        return (
                <Fragment>
                    <FormControlLabel
                        shrink
                        className={classes.bootstrapFormLabel}
                        control={
                            this.renderSw()
                        }
                        label={this.props.label}
                        labelPlacement="start"
                    />
                </Fragment>
        )
    }
}

export default withStyles(styles)(RenderSwitch);
