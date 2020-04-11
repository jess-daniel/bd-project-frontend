import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// local imports
import HeroCard from './HeroCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.dark,
    height: '300px',
  },
  rootContainer: {
    width: '100%',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.rootContainer} maxWidth={false}>
        <Typography className={classes.container} component="div">
          <HeroCard />
        </Typography>
      </Container>
    </>
  );
};

export default Hero;
