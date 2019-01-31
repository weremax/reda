import _ from 'lodash';
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import RenderInputLabel from '../FormComponents/RenderInputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import styles from '../FormComponents/styles';
import './customstyles.css';

class RenderSwitchButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        
    }

    renderInputLabels() {
        if (this.props.label) {
            return <RenderInputLabel {...this.props} />;
        }
        
        return null;
    }

    renderButtons() {
        const { value } = this.state;
        const { buttons } = this.props;
        
        return (_.map(buttons, button => {
            let buttonId = `${this.props.input.name}${button.value}`;
            if (value && value === button.value) {
                return (
                    <React.Fragment>
                        <input
                            type="radio"
                            id={buttonId}
                            name={this.props.input.name}
                            value={button.value}
                            {...this.props.input}
                            checked
                        />
                        <label for={button.value}>{button.label}</label>
                    </React.Fragment>
                )
            }

            return (
                <React.Fragment>
                    <input
                        type="radio"
                        id={buttonId}
                        name={this.props.input.name}
                        {...this.props.input}
                        value={button.value}
                    />
                    <label for={buttonId}>{button.label}</label>
                </React.Fragment>
            )
        }))
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    render() {
        const { classes, meta: { touched, error }, inputProps, buttons } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';

        if (this.props.input.value && this.props.input.value !== this.state.value) {
            this.setState({ value : this.props.input.value });
        }
        
        return (
            <div>
                <div>
                    <FormControl className={classes.margin}>
                        {this.renderInputLabels()}
                    </FormControl>
                </div>
                <div>
                <FormControl className={classes.formControl}>
                        <div class="switch-field">
                            {/*this.renderButtons()*/}


                            <RadioGroup
                                className={classes.group}
                                value={this.state.value}
                                onClick={this.handleChange}
                                id={this.props.input.name}
                                name={this.props.input.name}
                                disabled={this.props.disabled}
                                {...this.props.input}
                            >
                                {this.renderButtons()}
                                
                            </RadioGroup>
                        </div>
                        <div className={classes.errorMessage}>
                            { touched ? error : '' }
                        </div>
                    </FormControl>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(RenderSwitchButtons);
