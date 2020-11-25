import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar" ;
import MuiAlert from '@material-ui/lab/Alert';
import firebase from "firebase";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="right">
      {"ChineseGang©"}
      {new Date().getFullYear()}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(5),
      backgroundColor: theme.palette.secondary.main,
      width:"50%"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    
    },
    submit: {
      margin: theme.spacing(2, 0, 0),
    },
    container:{
      backgroundColor: "white"
    }
  
  }));

export default function UserData() {
    const classes = useStyles();
    const [loginEmail,setEmail] =useState('');
    const [age,setAge] =useState('');
    const [firstName,setFirstName] =useState('');
    const [lastName,setLastName] =useState('');
    const [company,setCompany] =useState('');
    const [phoneNo,setPhoneNo] =useState('');
    const [openAlert,setOpenAlert] =useState(false);
    const [error,SetError] =useState(false);
    const [errorText,SetErrorText] =useState('');
      
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      SetError(false);
      setOpenAlert(false);
    };
    


    const handleSubmit= event=> {
        event.preventDefault();
        writeUserData(loginEmail,firstName,lastName,age,company);
      }
   
    function writeUserData(loginEmail,firstName,lastName,age,company) {
        firebase.database().ref('users/' + firstName+lastName).set({
        loginEmail: loginEmail,
        firstName: firstName,
        lastName: lastName,
        age: age,
        company: company
        }, function(error) {
            if (error) {
              // The write failed...
            } else {
              // Data saved successfully!
            }
        });
    }
    return (
      <div className="container" >
      <Container component="main" maxWidth="xs" style={{ background: 'white'}}>
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar alt={firstName[0]+lastName[0]} src="/broken-image.jpg" style={{marginTop: '5%'}}/>
          <Typography component="h1" variant="h5" style={{marginTop: '5%'}} >
            User Information
          </Typography>
           {
          <Snackbar open={error} autoHideDuration={3000} onClose={handleClose} >
          <MuiAlert elevation={3} variant="filled" severity="error">
                   {errorText}
          </MuiAlert>  
          </Snackbar>} 
          <form className={classes.form}  onSubmit={handleSubmit} noValidate >
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
              onChange ={e => setEmail(e.target.value)}
              value ={loginEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="FirstName"
              name="firstName"
              autoComplete="age"
              onChange ={e => setFirstName(e.target.value)}
              value ={firstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="LastName"
              name="lastName"
              autoComplete="lastName"
              onChange ={e => setLastName(e.target.value)}
              value ={lastName}
            />
             <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="company"
              label="Company"
              name="company"
              autoComplete="company"
              onChange ={e => setCompany(e.target.value)}
              value ={company}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="phoneNo"
              label="Phone#"
              name="phoneNo"
              autoComplete="phoneNo"
              onChange ={e => setPhoneNo(e.target.value)}
              value ={phoneNo}
            />     
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="age"
              label="Age"
              name="age"
              type="number"
              InputLabelProps={{
              shrink: true,
            }}
              onChange ={e => setAge(e.target.value)}
              value ={age}
            />         
            <div className="btn">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>        
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={ window.history.back(-1) } //go back to last page may need to be changed when put togather
            >
              Back
            </Button> 
            </div>         
          </form>
        </div>
        <Box mt={8}>
        <Copyright />
        </Box>
      </Container>
      </div>
    );
  }
  