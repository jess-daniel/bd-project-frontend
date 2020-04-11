import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    color: 'white',
    margin: '0 5%',
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
}));

const NavButton = ({ url, text }) => {
  const classes = useStyles();

  return (
    <Link to={url} className={classes.root}>
      <Button className={classes.button} color="inherit">
        {text}
      </Button>
    </Link>
  );
};

export default NavButton;
