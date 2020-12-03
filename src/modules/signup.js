import React, { useReducer } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import jwtAxios from "../axios";
import Alert from '@material-ui/lab/Alert';
import {useHistory} from 'react-router-dom';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signup: {
    position: 'relative',
    float: 'right',
    cursor: 'pointer'
  }
}));

export default function TestMoudleMemberList() {
  const classes = useStyles();
  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
    rePassword: "",
    isMatch: false
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  const onNameChange = (e) => {
    setState({ email: e.target.value, status: "" });
  }
  const onPSChange = (e) => {
    setState({ password: e.target.value, status: "" });
  }
  const onREPSChange = (e) => {
    setState({ rePassword: e.target.value, status: "" });
  }

  const backToSignin = () => {
    history.push('/login');
    return history;
  }


  const handleSignUp = async () => {
    if (state.password !== state.rePassword) {
      // alert.show('Confirm password martch!');
      setState({ isMatch: true, status: "" });
      // console.log("LMAO");
    } else {
      setState({ isMatch: false, status: "" });
      let user = { email: state.email, password: state.password }
      return await jwtAxios.post(`/user/signup`, user)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <br/>
      <div>
        {state.isMatch
        ? <Alert severity="error">Please make sure re-enter password match!!</Alert>
        : <br/>
        }
      </div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onNameChange}
            value={state.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onPSChange}
            value={state.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onREPSChange}
            value={state.rePassword}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSignUp()}
          >
            Sign Up
          </Button>
          <div className={classes.signup} href="/login" onClick={backToSignin} >
              Already have an account? Back to Log in
          </div>
        </form>
      </div>
    </Container>
  );
}