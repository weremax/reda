import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm, getFormValues, change } from 'redux-form';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import RenderInputLabel from '../FormComponents/RenderInputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import { isBlank } from '../Helpers';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import styles from '../FormComponents/styles';
import './customstyles.css';

class RenderMultiButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: []
        }
        this.handleChangeButton = this.handleChangeButton.bind(this);
    }

    componentDidMount() {
        /*if (this.props.defaultValue && this.props.defaultValue !== this.state.value) {
            this.setState({ value : this.props.defaultValue });
        }*/
        /*_.map(this.props.buttons, button => {
            this.setState({ [button.label]: false });
        });*/
    }

    renderInputLabels() {
        if (this.props.label) {
            return <RenderInputLabel {...this.props} />;
        }
        
        return null;
    }

    handleChange = name => event => {
        console.log('***',event.target.value);
        console.log(':)', name);
        console.log(':P', event.target.checked);
        this.setState({ [name]: event.target.checked });
    }

    renderChecks() {
        const { buttons } = this.props;

        return _.map(buttons, button => {
            return (
                <React.Fragment>
                    <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state[button.label]}
                            onChange={this.handleChange(button.value)}
                            value={button.value}
                            
                        />
                    }
                    label={button.label}
                    { ...this.props.input }
                    onBlur={() => this.props.input.onBlur([...this.props.input.value])}
            />
                </React.Fragment>
            )
        })
    }

    handleChangeButton = val => {
        //this.setState({ value });
        const { value } = this.state;

        console.log(typeof value);
        value.push({value: val});

        this.setState({ value });
        
    }

    renderButtons() {
        const { buttons, classes } = this.props;

        /*if (this.props.input.value !== this.state.value) {
            this.props.input.value = this.state.value;
        }*/
        
        return _.map(buttons, button => {
            return (
                    <Button className={classes.group}
                        onClick={() => this.handleChangeButton(button.value)}
                        onBlur={() => this.props.input.onBlur([...this.props.input.value])}
                    >{button.label}</Button>
            )
            
        })
    }


    render() {
        const { classes, meta: { touched, error }, inputProps, buttons } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';
        console.log('-- rendermultibutton');
        if (this.props.input.value !== this.state.value) {
            this.props.input.value = this.state.value;
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
                            
                            {this.renderButtons()}
                            {/*<input type="text" value={this.state.value} {...this.props.input} name={this.props.input.name} />*/}
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

export default withStyles(styles)(RenderMultiButtons);
