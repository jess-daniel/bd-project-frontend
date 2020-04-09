import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Message Thing
          </Typography>
          <Link to="/add-message" className={classes.link}>
            <Button className={classes.button} color="inherit">
              Add A Message!
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
