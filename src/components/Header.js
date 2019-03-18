import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    header: {
        fontSize: '6rem',
        paddingTop: '3rem',
        paddingBottom: '6rem',
        transition: '.5s ease-out',
        color: 'white',
        textAlign: 'center',
        '&:hover': {
            transform: 'scale(1.05)' 
        }
    }
}

const HeaderComponent = ({classes, children}) => (<div className={classes.header}>{children}</div>)
const StyledHeaderComponent = injectSheet(styles)(HeaderComponent)

function Header() {
    return (
        <StyledHeaderComponent>Github Repozitory Searcher</StyledHeaderComponent>
    )
}

export default Header