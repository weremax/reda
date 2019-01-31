import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import RenderInputLabel from '../FormComponents/RenderInputLabel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from '../FormComponents/styles';
import moment from 'moment';

class RenderDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    renderInputLabels() {
        if (this.props.label) {
            return <RenderInputLabel {...this.props} />;
        }
        
        return null;
    }

    handleChange(date) {
        //console.log('date', date);
        this.props.input.value = date;
        this.setState({
            value: date
        });
    }

    render() {
        const { classes, meta: { touched, error }, inputProps } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';
        //console.log('-- renderdate 1', this.props.input.value);
        //console.log('-- renderdate 2', this.state.value);
        if (this.props.input.value && this.props.input.value !== this.state.value && typeof this.props.input.value !== 'string') {
            this.setState({ value : this.props.input.value });
        }

        if (this.props.input.name === 'benchmarkEffectiveDate') {
            this.props.input.value = moment(this.props.input.value).format('MM/DD/YYYY');
        }
        
        return (
            <div>
                <div>
                    <FormControl className={classes.margin}>
                        {this.renderInputLabels()}
                    </FormControl>
                </div>
                <div>
                <FormControl className={classes.margin}>
                    <DatePicker
                        id={this.props.input.name}
                        name={this.props.input.name}
                        disabled={this.props.disabled}
                        
                        {...this.props.input}
                        selected={this.state.value}
                        onChange={this.handleChange}
                        dateFormat="MM/dd/yyyy"
                        className={classes.bootstrapInput}
                    />
                    <div className={classes.errorMessage}>
                        { touched ? error : '' }
                    </div>
                </FormControl>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(RenderDate);
