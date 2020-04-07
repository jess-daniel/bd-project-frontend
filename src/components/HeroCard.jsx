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
    backgroundColor: 'white',
    width: '75%',
    paddingTop: '20px',
    height: '150px',
  },
}));

const HeroCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Typography variant="h6" component="h1">
        Hey! I developed this website in under 2 days to give the community a
        way to say Happy Birthday to RoomieOfficial ;)
      </Typography>
    </Box>
  );
};

export default HeroCard;
