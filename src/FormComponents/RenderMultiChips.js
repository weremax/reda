import _ from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/core/internal/svg-icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import FormControl from '@material-ui/core/FormControl';
import RenderInputLabel from '../FormComponents/RenderInputLabel';
import teal from '@material-ui/core/colors/teal';
import { isBlank } from '../Helpers';

let suggestions = [];

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
        backgroundColor: 'rgb(178, 223, 219)',
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.teal[300] : theme.palette.teal[700],
            0.08,
        ),
    },
    chipDelete: {
        color: '#26a69a',
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

function NoOptionsMessage(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    console.log(props);
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function SingleValue(props) {
    return (
        <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
            {props.children}
        </Typography>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={
                classNames(props.selectProps.classes.chip, {
                    [props.selectProps.classes.chipFocused]: props.isFocused,
                })
            }
            onDelete={props.removeProps.onClick}
            deleteIcon={<CancelIcon {...props.removeProps} className={props.selectProps.classes.chipDelete} />}
        />
    );
}

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

class RenderMultiChips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            single: null,
            multi: null,
            value: null,
            valueStr: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = value => {
        this.setState({
            multi: value,
            value
        });
    }


    renderInputLabels() {
        if (this.props.label) {
            return <RenderInputLabel {...this.props} />;
        }
        
        return null;
    }

    render() {
        const { classes, theme, suggestions, input, meta: { touched, error }, inputProps } = this.props;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let err = (error) ? error : '';
        
        const selectStyles = {
            input: base => ({
                ...base,
                color: '#394E62',
                '& input': {
                    font: 'inherit',
                },
            }),
        };
        return (
            <div style={{ width: 350, marginTop: 16, marginBottom: 16 }}>
                <div>
                    <FormControl className={classes.margin}>
                        {this.renderInputLabels()}
                    </FormControl>
                </div>
                <div className={classes.root}>
                    <Select
                        inputProps={inputProps}
                        classes={classes}
                        styles={selectStyles}
                        textFieldProps={{
                            InputLabelProps: {
                                shrink: true,
                            },
                        }}
                        options={suggestions}
                        components={components}
                        onChange={this.handleChange}
                        placeholder={`Select ${this.props.label}`}
                        isMulti
                        {...this.props.input}
                        onBlur={() => this.props.input.onBlur([...this.props.input.value])}
                    />
                </div>
                <div className={classes.errorMessage}>
                    { touched ? error : '' }
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(RenderMultiChips);