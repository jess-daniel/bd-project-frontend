import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// local imports
import MainNav from './MainNav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    width: '20%',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Message Thing
            </Link>
          </Typography>
          <MainNav />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
