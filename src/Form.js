import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm, getFormValues, change } from 'redux-form';
import RenderMultiButtons from './FormComponents/RenderMultiButtons';
import RenderSwitchButtons from './FormComponents/RenderSwitchButtons';

export default class Form extends Component {

    fixMultiChips(value) {
        //console.log('*^*', value);
        if (value && typeof value === 'string') {
            if (value.includes(';')) {
                let vals = [];
                let spec = value.split(';');
                _.map(spec, sp => {
                    vals.push({ label: sp, value: sp });
                });
                return vals;
            } else {
                //console.log('%%%', value);
                return [{ label: value, value: value }];
            }
        } else {
            return (value) ? value : '';
        }
    }

    render() {
        const { values } = this.props;
        console.log('&^&', values);

        if (values && values.locality) {
            let valus = this.fixMultiChips(values.locality);
            if (values.locality !== valus) {
                values.locality = valus;
            }
            
        }

        return (
            <div>
                <Field
                    name="locality"
                    label="Locality"
                    component={RenderMultiButtons}
                    inputProps={{}}
                    buttons={[
                        {
                            label: '03',
                            value: '3'
                        },
                        {
                            label: '04',
                            value: '4'
                        },
                        {
                            label: '99',
                            value: '99'
                        }
                    ]}
                />

                <Field
                    name="switcher"
                    label="Switcher"
                    component={RenderSwitchButtons}
                    inputProps={{}}
                    buttons={[
                        {
                            label: 'Yes',
                            value: 'Y'
                        },
                        {
                            label: 'No',
                            value: 'N'
                        }
                    ]}
                />
            </div>
        )
    }
}
