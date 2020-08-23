import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import SelectInput from './SelectInput';

const styles= {
    iconButton: {
        color: 'white'
    },
    div: {
        color: 'white',
        fontSize: '1.2rem',
        marginRight: '1rem'
    }
}

const Button = ({classes, children, ...props}) => <IconButton className={classes.iconButton} {...props}>{children}</IconButton>
const WhiteIconButton = injectSheet(styles)(Button)

const Div = ({classes, children}) => <div className={classes.div}>{children}</div>
const StyledDiv = injectSheet(styles)(Div)

class TablePagination extends Component {
    handleFirstPageButtonClick = event => {
      this.props.onChangePage(event, 0);
    };
  
    handleBackButtonClick = event => {
      this.props.onChangePage(event, this.props.page - 1);
    };
  
    handleNextButtonClick = event => {
      this.props.onChangePage(event, this.props.page + 1);
    };
  
    handleLastPageButtonClick = event => {
      this.props.onChangePage(
        event,
        Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
    };
  
    render() {
      const { count, page, rowsPerPage } = this.props;
      return (
        <Grid container style={{alignItems: 'center', justifyContent:'flex-end'}}>
            <Grid item><StyledDiv>Rows per page: </StyledDiv></Grid>
            <Grid item><SelectInput onChangeRowsPerPage={this.props.onChangeRowsPerPage} rowsPerPage={this.props.rowsPerPage}/></Grid>
            <Grid item><WhiteIconButton
                onClick={this.handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="First Page">
                <FirstPageIcon />
            </WhiteIconButton></Grid>
            <Grid item><WhiteIconButton
                onClick={this.handleBackButtonClick}
                disabled={page === 0}
                aria-label="Previous Page">
                <KeyboardArrowLeft />
            </WhiteIconButton></Grid>
            <Grid item><WhiteIconButton
                onClick={this.handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page">
                <KeyboardArrowRight />
            </WhiteIconButton></Grid>
            <Grid item><WhiteIconButton
                onClick={this.handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Last Page">
                <LastPageIcon />
            </WhiteIconButton></Grid>
        </Grid>
      );
    }
  }

  export default TablePagination