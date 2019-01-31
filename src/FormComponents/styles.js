import green from '@material-ui/core/colors/green';

const styles = theme => ({
  benchmarkForm: {
    minWidth: 400,
    width: 525,
    padding: 10,
    margin: 0,
    backgroundColor: '#fff'
  },
  root: {
    "&$checked": {
      color: green[500]
    }
  },
  formControl: {
    //margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row"
  },
  margin: {
    margin: theme.spacing.unit * .5,
    minWidth: 200,
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 2,
    },
  },
  bootstrapDate: {
    borderRadius: 8,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapMultiInput: {
    width: 350,
    borderRadius: 8,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapInput: {
    borderRadius: 8,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapSelect: {
    width: '16vw',
    backgroundColor: theme.palette.common.white,
  },
  bootstrapSelect2: {
    width: '10vw',
    backgroundColor: theme.palette.common.white,
    marginTop:'10px',
    marginLeft:'50px'
  },
  bootstrapFormLabel: {
    fontSize: 16,
    fontWeight: 'normal',
    whiteSpace: 'nowrap'
  },
  selectBuffer: {
    marginBottom: 6,
  },
  formCard: {
    backgroundColor: '#ffffff',
    //margin: 10,
    //padding: 20,
    borderRadius: 6,
    border: '1px solid #333333'
  },
  /*formControl: {
    width: '16vw',
    margin: 10,
  },*/
  errorMessage: {
      fontSize: 13,
      marginTop: 2,
      marginBottom: 8,
      marginLeft: 4,
      color: '#C0392B',
  },
  saveButton: {
    backgroundColor: 'rgb(64, 158, 221)',
    padding: '10px 20px',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    borderRadius: 8,
    border: '1px solid rgb(64, 158, 221)',
    '&:disabled': {
      backgroundColor: '#666666',
      border: '1px solid #666666',
    }
  },
  cancelButton: {
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    borderRadius: 8,
    border: '1px solid #333333'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: 8,
  },
  paperSlot: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderRadius: 8,
    height: '70vh',
  },
  paperPackage: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    overflowY: 'auto',
    height: '65vh',
  },
  buttons: {
    textAlign: 'right',
    marginTop: 16,
  },
  type_heading: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    color: 'blue'
  },
  snackbar: {
    padding: theme.spacing.unit / 2,
  },
  table: {
    width: '100%',
  },
  tablecell: {
    width: '25%',
  }
});

export default styles;