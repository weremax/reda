import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import { validate } from './FormComponents/CommonForm';
import TestForm from './Form';
import { withStyles } from '@material-ui/core/styles';
import styles from './FormComponents/styles';
class App extends Component {
    onSubmit(values) {
        console.log('&&&', JSON.stringify(values));
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <TestForm values={this.props.values}/>
                <button type="submit">
                    Save Benchmark
                </button>
                </form>
            </div>
        )
    }
}

export default reduxForm({form: 'CreateBenchmarkCard', validate})
(withStyles(styles)(connect(state => ({
    values: getFormValues('CreateBenchmarkCard')(state),
}))(App)));