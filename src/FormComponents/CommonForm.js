//import moment from 'moment';
//import { isBlank } from '../Helpers';

/*export function splitDate(value) {
  let parts = [];

  switch(typeof value) {
    case 'string':
      parts = value.split('/');
    case 'object':
      parts = moment(value).format('MM/DD/YYYY').split('/');
  }

  return new Date(parts[2] , parts[0] -1, parts[1]);
}*/

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

export const specialCharactersSpaces = str => (/^([a-zA-Z0-9]+)$/g.test(str) ?  undefined : 'Special characters & spaces are not allowed');

//export const onlyNumeric = str => (isBlank(str) || (/^([0-9.;]+)$/g.test(str))) ? undefined : 'Only numeric values allowed';

//export const dateCompare = (compareDate, err) => value => (splitDate(value) < compareDate ? err : undefined);

//export const beforeNow = err => dateCompare(new Date(), err);

//export const nineMonth = (data, err) => value => (splitDate(value) > splitDate(data) ? err : undefined);

//export const beforeOther = (data, err) => value => (splitDate(value) < splitDate(data) ? err : undefined);

//export const fieldIsYesOrNo = (data, err) => value => (data && (data === 'Y' || data === 'N') && isBlank(value) ? err : undefined);


export const validate = values => {
  const errors = {};
  /*if (values.secondaryFeeScheduleID && isBlank(values.customNegotiatedSecondaryFeeSchedule)) {
    errors.customNegotiatedSecondaryFeeSchedule = 'Required';
  }

  if (values.secondaryFeeScheduleID && isBlank(values.secondaryFeeScheduleReimb)) {
    errors.secondaryFeeScheduleReimb = 'Required';
  }

  if (values.medicareYear && isBlank(values.percentOfMedicare)) {
    errors.percentOfMedicare = 'Field is required when Medicare Year is populated'
  }

  if (values.benchmarkIncludesCapitation && values.benchmarkIncludesCapitation === 'Y' && isBlank(values.capitationVendorTaxID)) {
    errors.capitationVendorTaxID = 'Required';
  }*/

  return errors;
}