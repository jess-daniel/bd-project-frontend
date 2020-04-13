import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { useStateValue } from 'react-conflux';

// local imports
import { messagesContext } from '../contexts';
import { START_POSTING, POST_SUCCESS, POST_FAILURE } from '../reducers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
// url, context, start, success, failure, (method = 'get'), (data = null);

const AddMessage = () => {
  const [state, dispatch] = useStateValue(messagesContext);
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, control, register, errors } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    dispatch({ type: START_POSTING });
    axios
      .post(process.env.REACT_APP_BASE_API, data)
      .then((res) => {
        dispatch({ type: POST_SUCCESS, payload: res.data });
        history.push('/');
      })
      .catch((err) => {
        dispatch({ type: POST_FAILURE, payload: err });
      });
  };

  return (
    <div className={classes.root}>
      <form
        className={classes.form}
        onSubmit={handleSubmit(formSubmit)}
        action={process.env.REACT_APP_BASE_API}
        method="POST"
      >
        <Controller
          as={TextField}
          name="name"
          control={control}
          defaultValue=""
          inputRef={register}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Controller
          as={TextField}
          control={control}
          required
          defaultValue=""
          type="textarea"
          inputRef={register}
          id="outlined-basic"
          label="Message"
          name="message"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {state.error ? <p>You can only post one message</p> : null}
    </div>
  );
};

export default AddMessage;
