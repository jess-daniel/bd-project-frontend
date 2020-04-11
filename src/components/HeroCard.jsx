import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    width: '75%',
    paddingTop: '20px',
    height: '150px',
  },
  text: {
    textAlign: 'center',
  },
}));

const HeroCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Typography className={classes.text} variant="h6" component="h1">
        Message Board
      </Typography>
    </Box>
  );
};

export default HeroCard;
