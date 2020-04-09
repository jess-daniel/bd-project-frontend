import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    padding: '15px 50px',
    border: '1px solid black',
    backgroundColor: theme.palette.secondary.light,
  },
}));

const MessageCard = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>{message.name}</h4>
      <p>{message.message}</p>
      <p>{message.created_at}</p>
    </div>
  );
};

export default MessageCard;
