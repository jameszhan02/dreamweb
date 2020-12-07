import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Image from 'react-bootstrap/Image';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Box from '@material-ui/core/Box';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Chinese Gang
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth:900,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

//   function generate(element) {
//     return [0, 1, 2].map((value) =>
//       React.cloneElement(element, {
//         key: value,
//       }),
//     );
//   }

export default function StickyFooter() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

  return (
    <div justifyContent="center" >
        
{/* <Grid container spacing={2}> */}
{/* <Grid item xs={12} md={6}> */}
          <Typography variant="h4" className={classes.title}>
            Posting Policies
          </Typography>
          {/* <div className={classes.demo}> */}
            <List dense={dense}>
            
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting an item for sale that is not located in Canada."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting an item for sale that is illegal to own, buy or sell in your area of residence."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting an item for sale that is in the prohibited items and services list."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting duplicate ads in multiple categories."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting ads using multiple different email addresses."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting an ad that serves no other purpose other than to send traffic to a web site."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotInterestedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Posting an ad that contains adult, mature or erotic content. Personals are not allowed."
                  />
                </ListItem>
            
            </List>
          {/* </div> */}
        {/* </Grid> */}
  {/* </Grid> */}
 
   </div>
  );
}