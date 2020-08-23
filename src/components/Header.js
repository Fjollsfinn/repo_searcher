import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    header: {
        fontSize: '6rem',
        paddingTop: '3rem',
        paddingBottom: '6rem',
        color: 'white',
        textAlign: 'center',
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform .3s ease-out',
        display: 'inline-block',
        '&:hover': {
            transform: 'skewY(3deg) skewX(15deg) scale(1.1)',
        },
    },
    '@media (max-width: 640px)': {
        header: {
            fontSize: '4rem',
        },
    },

};

const AnchorComponent = ({ classes, children }) => <a className={classes.link} href="https://github.com" target="_blank">{children}</a>;
const StyledAnchorComponent = injectSheet(styles)(AnchorComponent);

const HeaderComponent = ({ classes, children }) => (<div className={classes.header}><StyledAnchorComponent>{children}</StyledAnchorComponent></div>);
const StyledHeaderComponent = injectSheet(styles)(HeaderComponent);

function Header() {
    return (
      <StyledHeaderComponent>Github Repozitory Searcher</StyledHeaderComponent>
    );
}

export default Header;
