import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Typography from '@material-ui/core/Typography';

const styles = {
  header: {
    paddingTop: '3rem',
    paddingBottom: '6rem',
    textAlign: 'center',
  },
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform .3s ease-out',
    display: 'inline-block',
    '&:hover': {
      transform: 'skewY(3deg) skewX(15deg) scale(1.1)',
    },
  },
  title: {
    color: '#ffff',
  },
  '@media (max-width: 640px)': {
    header: {
      fontSize: '4rem',
    },
  },

};

function Header({ classes, title }) {
  return (
    <div className={classes.header}>
      <a className={classes.link} href="https://github.com" rel="noopener noreferrer" target="_blank">
        <Typography className={classes.title} variant="h1">{title}</Typography>
      </a>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

Header.defaultProps = {
  title: null,
};

export default injectSheet(styles)(Header);
