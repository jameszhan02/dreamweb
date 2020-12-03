import React, { useReducer, useEffect } from "react";
import {
  TextField,
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Image from 'react-bootstrap/Image';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import { Translate } from "@material-ui/icons";


const Search = props => {
  const initialState = {
    regularArr: [
      { title: "One bedroom Apartment for Rent", podate: "2020-11-12", content: "One private room with bath plus den. All utilities inlusive + wifi.", contact: "Parth Kathleen", price: "$1300", image: '/static/house1.png' },
      { title: "Three bedroom house for Rent", podate: "2020-10-16", content: "The three bedroom house is on a safe and quiet street iwth a fenced in back yard.", contact: "pp", price: "$2500", image: '/static/house2.png' },
      { title: "Two Bedroom Lower Unit", podate: "2020-11-08", content: "Currently have a 2 Bedroom/ 1 Bathroom available for rent. Less than 5 min walk to Grocery Store.", contact: "Ariana Mann", price: "$950", image: '/static/house3.png' }],
    topViewedArr: [
      { title: "Three bedroom house for Rent", podate: "2020-10-16", content: "The three bedroom house is on a safe and quiet street iwth a fenced in back yard.", contact: "pp", price: "$2500", image: '/static/house3.png' },
      { title: "One bedroom Apartment for Rent", podate: "2020-11-12", content: "One private room with bath plus den. All utilities inlusive + wifi.", contact: "Parth Kathleen", price: "$1300", image: '/static/house2.png' },
      { title: "Two Bedroom Lower Unit", podate: "2020-11-08", content: "Currently have a 2 Bedroom/ 1 Bathroom available for rent. Less than 5 min walk to Grocery Store.", contact: "Ariana Mann", price: "$950", image: '/static/house1.png' }],
    topRatedArr: [
      { title: "Two Bedroom Lower Unit", podate: "2020-11-08", content: "Currently have a 2 Bedroom/ 1 Bathroom available for rent. Less than 5 min walk to Grocery Store.", contact: "Ariana Mann", price: "$950", image: '/static/house2.png' },
      { title: "One bedroom Apartment for Rent", podate: "2020-11-12", content: "One private room with bath plus den. All utilities inlusive + wifi.", contact: "Parth Kathleen", price: "$1300", image: '/static/house3.png' },
      { title: "Three bedroom house for Rent", podate: "2020-10-16", content: "The three bedroom house is on a safe and quiet street iwth a fenced in back yard.", contact: "pp", price: "$2500", image: '/static/house1.png' }],
    title: "",
    podate: "",
    content: "",
    contact: "",
    image: "",
    price: "",
    titleViewed: "",
    contentViewed: "",
    imageViewed: "",
    priceViewed: "",
    titleRated: "",
    contentRated: "",
    imageRated: "",
    priceRated: ""
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 300,
    },
    control: {
      padding: theme.spacing(2),
    },
    paper2: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();


  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    onNextViewed();
    onNextRated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeAutocomplete = (e, selected) => {
    if (selected)
      setState({ title: selected.title, podate: selected.podate, content: selected.content, contact: selected.contact, image: selected.image, price: selected.price });
    else
      setState({ title: "", podate: "", content: "", contact: "", image: "", price: "" });
  };

  const onNextViewed = () => {
    if (state.topViewedArr.length != 0) {
      setState({ titleViewed: state.topViewedArr[0].title, contentViewed: state.topViewedArr[0].content, priceViewed: state.topViewedArr[0].price, imageViewed: state.topViewedArr[0].image });
      state.topViewedArr.shift();
    }
  }

  const onNextRated = () => {
    if (state.topRatedArr.length != 0) {
      setState({ titleRated: state.topRatedArr[0].title, contentRated: state.topRatedArr[0].content, priceRated: state.topRatedArr[0].price, imageRated: state.topRatedArr[0].image });
      state.topRatedArr.shift();
    }
  }

  const handleimage = () => {
    console.log("hihihihih");
  }



  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Grid key={1} item>
            <div className={classes.root}>
              <Paper className={classes.paper2}>
                <Grid container spacing={1}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <Image className={classes.img} alt="complex" src={state.imageViewed} onClick={handleimage}/> 
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bold" }}>
                          Top Viewed
                </Typography>
                        <Typography variant="body2" gutterBottom >
                          {state.titleViewed}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ fontStyle: "italic" }}>
                          {state.contentViewed}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer', fontWeight: "bold" }} onClick={onNextViewed}>
                          Next
                </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">{state.priceViewed}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid key={2} item>
            <Autocomplete
              id="All Posts"
              options={state.regularArr}
              getOptionLabel={(option) => option.title}
              style={{ width: 400 }}
              onChange={onChangeAutocomplete}
              renderInput={(params) => <TextField {...params} label="All Posts" variant="outlined" />}
            />
            {state.title &&
              <TableContainer component={Paper} style={{ width: "100%" }}>
                <Table>
                  <TableBody>
                    <TableRow key={Math.random().toString()}>
                      <TableCell component="th" scope="row">
                        <span style={{ fontWeight: "bold" }}>Title:</span> {state.title}
                      </TableCell>
                    </TableRow>
                    <TableRow key={Math.random().toString()}>
                      <TableCell component="th" scope="row" style={{ width: 400 }}>
                        <span style={{ fontWeight: "bold" }}>Content:</span> <span style={{ fontStyle: "italic" }}>{state.content}</span>
                      </TableCell>
                    </TableRow>
                    <TableRow key={Math.random().toString()}>
                      <TableCell component="th" scope="row" colSpan="2" align="center">
                        <Image src={state.image} style={{ height: 120, width: 120 }} />
                      </TableCell>
                    </TableRow>
                    <TableRow key={Math.random().toString()}>
                      <TableCell component="th" scope="row" colSpan="2" style={{ textAlign: "center" }}>
                        <div>{state.podate}</div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            }
          </Grid>
          <Grid key={3} item>
            <div className={classes.root}>
              <Paper className={classes.paper2}>
                <Grid container spacing={1}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={state.imageRated} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" style={{ fontWeight: "bold" }}>
                          Top Rated
                </Typography>
                        <Typography variant="body2" gutterBottom >
                          {state.titleRated}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ fontStyle: "italic" }}>
                          {state.contentRated}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer', fontWeight: "bold" }} onClick={onNextRated}>
                          Next
                </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">{state.priceRated}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
        ))
      </Grid>
      </Grid>
    </Grid>

  );
};

export default Search;
