import React from "react";
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { logout, loginUser } from '../cookieHelper';
import jwtAxios from "../axios";

const UserDetail = () => {
  let currentUser = loginUser().data;


  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
    root: {
      padding: theme.spacing(3, 2)
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    }
  }));

  const handleSubmit = async () => {
    await jwtAxios.post(`/user/signup`, currentUser);
    window.location.href = '/home';
    return 'user info update success!!'
  }
  const userlogout = () =>{
    logout();
  }
  const handleInput = evt => {
    currentUser[evt.target.name] = evt.target.value;
    console.log(currentUser);
  };

  const classes = useStyles();


  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          User Detail Setting
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="E-Mail"
            id="margin-normal"
            name="email"
            defaultValue={currentUser.email}
            className={classes.textField}
            helperText="Enter your full name"
            onChange={handleInput}
          />
          <TextField
            label="PWD"
            id="margin-normal"
            name="password"
            defaultValue={currentUser.password}
            className={classes.textField}
            helperText="Dont modify you are not wish to change your pwd"
            onChange={handleInput}
          />
          <TextField
            label="Picture link"
            id="margin-normal"
            name="piclink"
            defaultValue={currentUser.piclink}
            className={classes.textField}
            helperText="your profile icon picture"
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Confirm Change <Icon className={classes.rightIcon}></Icon>
          </Button>
          <Button
            onClick={userlogout}
            color="primary"
            className={classes.button}
          >
            Log out
          </Button>
        </form>
      </Paper>
    </div>
  );
}
export default UserDetail;