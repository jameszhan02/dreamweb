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
import {useHistory} from 'react-router-dom';
import {onLogin, loginUser } from '../cookieHelper';
import Alert from '@material-ui/lab/Alert';

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
    logInSuccess: true
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  const onNameChange = (e) => {
    setState({ email: e.target.value, status: "" });
  }
  const onPSChange = (e) => {
    setState({ password: e.target.value, status: "" });
  }
  const signup = () => {
    history.push('/signup');
    return history;
  }


  const handleSignIn = async () => {
      let user = { email: state.email, password: state.password }
      let returnUser = await jwtAxios.post(`/user/signin`, user);
      if(returnUser.data != '' ){
        console.log("login Success!");
        setState({ logInSuccess: false, status: "" });
      }
      //put login user info in to the 
      if(state.logInSuccess){
        console.log(returnUser);
        onLogin(returnUser);
      }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <br/>
      <div>
        {state.logInSuccess
        ? <br/>
        : <Alert severity="success">Login Success!!</Alert>
        }
      </div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSignIn()}
          >
            Sign in
          </Button>
          <div className={classes.signup} onClick={signup}>
              Sign Up Now
          </div>
        </form>
      </div>
    </Container>
  );
}