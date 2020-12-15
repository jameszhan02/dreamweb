import React, { useReducer, useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
// import Image from "react-bootstrap/Image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { purple } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { listPost, getUser } from "../apiServices/dbTesterApi";



import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ApartmentIcon from "@material-ui/icons/Apartment";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import DeckIcon from "@material-ui/icons/Deck";

const CategoryComponent = (props) => {
  const initialState = {};

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundImage: `url(${"/static/blue.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 300,
      opacity: 0.5,
    },
    paperA: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundImage: `url(${"/static/houseinner.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 300,
      opacity: 0.5,
    },
    paperF: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundImage: `url(${"/static/furniture.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 300,
      opacity: 0.5,
    },
    paperC: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundImage: `url(${"/static/carsForSell.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 300,
      opacity: 0.8,
    },
    container: {
      position: "relative",
    },
    centertext: {
      position: "absolute",
      top: "40%",
      left: "35%",
      fontWeight: "bold",
      fontSize: 23,
    },
    centertextL: {
      position: "absolute",
      top: "50%",
      left: "30%",
      fontWeight: "bold",
      fontSize: 23,
    },
    centertextMR: {
      position: "absolute",
      top: "50%",
      left: "40%",
      fontWeight: "bold",
      fontSize: 23,
    },
    centerbtn: {
      position: "absolute",
      top: "60%",
      left: "50%",
      backgroundColor: purple,
    },
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  const [postlist, setPostlist] = useState([]);
  const [userlist, setUserlist] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  useEffect(() => {
    Axios.all([listPost()]).then(([postlist]) => {
      setPostlist(postlist);
    });
    Axios.all([getUser()]).then(([userlist]) => {
      setUserlist(userlist);
    });
  }, []);

  const ApartChange = () => {
    open1 ? setOpen1(false) : setOpen1(true);
  };
  const CarChange = () => {
    open2 ? setOpen2(false) : setOpen2(true);
  };
  const FurnChange = () => {
    open3 ? setOpen3(false) : setOpen3(true);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.container}>
            <Paper className={classes.paper} />
            <div className={classes.centertext}>
              This Forum is bettern when you're a member
            </div>
            <Button
              variant="primary"
              href="login"
              className={classes.centerbtn}
            >
              Sign In
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            <Paper className={classes.paperA} />
            <Button className={classes.centertextL} onClick={ApartChange}>
              Apartemnt For Rent
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            <Paper className={classes.paperC} />
            <Button className={classes.centertextMR} onClick={CarChange}>
              Cars And Truks
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            <Paper className={classes.paperF} />
            <Button className={classes.centertextMR} onClick={FurnChange}>
              Furnature
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            {open1 &&
              postlist
                .filter((element) => element.postCategory == "apartment")
                .map((item, index) => {
                  return (
                    <List style={{ width: "60%" }} key={index}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <ApartmentIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.postTitle}
                          secondary={item.postContent
                            .substring(0, item.postContent.length - 5)
                            .substring(3)}
                        />
                      </ListItem>
                    </List>
                  );
                })}
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            {open2 &&
              postlist
                .filter((element) => element.postCategory == "car")
                .map((item, index) => {
                  return (
                    <List style={{ width: "60%" }} key={index}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <DirectionsCarIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.postTitle}
                          secondary={item.postContent
                            .substring(0, item.postContent.length - 5)
                            .substring(3)}
                        />
                      </ListItem>
                    </List>
                  );
                })}
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            {open3 &&
              postlist
                .filter((element) => element.postCategory == "furnature")
                .map((item, index) => {
                  return (
                    <List style={{ width: "60%" }} key={index}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <DeckIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.postTitle}
                          secondary={item.postContent
                            .substring(0, item.postContent.length - 5)
                            .substring(3)}
                        />
                      </ListItem>
                    </List>
                  );
                })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryComponent;
