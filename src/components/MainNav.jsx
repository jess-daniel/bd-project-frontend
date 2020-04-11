import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import NavButton from './NavButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%',
  },
  menuButton: {
    margin: '0px 10px',
  },
}));

const MainNav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <NavButton className={classes.menuButton} url="/" text="Home" />
      <NavButton
        className={classes.menuButton}
        url="/add-message"
        text="Add A Message!"
      />
    </nav>
  );
};

export default MainNav;
