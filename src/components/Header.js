import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    header: {
        fontSize: '6rem',
        paddingTop: '3rem',
        paddingBottom: '6rem',
        transition: '.3s ease-out',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            transform: 'skewY(3deg) skewX(15deg) scale(1.1)',
        }
    },
    '@media (max-width: 640px)': {
        header: {
            fontSize: '4rem'
        }
    }
}
const HeaderComponent = ({classes, children}) => (<div className={classes.header}><a style={{textDecoration: 'none', color: 'inherit'}}href='https://github.com' target='_blank'>{children}</a></div>)
const StyledHeaderComponent = injectSheet(styles)(HeaderComponent)

function Header() {
    return (
        <StyledHeaderComponent>Github Repozitory Searcher</StyledHeaderComponent>
    )
}

export default Header