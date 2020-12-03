import React, { useReducer, useEffect } from "react";
import { Paper } from "@material-ui/core";
// import Image from "react-bootstrap/Image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { purple } from "@material-ui/core/colors";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      backgroundColor: purple
    }
  }));

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.container}>
            <Paper className={classes.paper} />
            <div className={classes.centertext}>This Forum is bettern when you're a member</div>
            <Button variant='primary' href="login" className={classes.centerbtn}>Sign In</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            <Paper className={classes.paperA} />
            <Link to={`/path/${""}`}>
              <div className={classes.centertextL}>Apartemnt For Rent</div>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            <Paper className={classes.paperC} />
            <Link to={`/path/${""}`}>
              <div className={classes.centertextMR}>Cars And Truks</div>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.container}>
            <Paper className={classes.paperF} />
            <Link to={`/path/${""}`}>
              <div className={classes.centertextMR}>Furnature</div>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryComponent;
