import React, { useReducer, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  TextField,
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Image from "react-bootstrap/Image";
//import theme from "./theme";
import "../App.css";

const Search = (props) => {
  const initialState = {
    adsArr: [
      {
        title: "keyboard",
        podate: "2020-11-12",
        content: "con",
        contact: "sds",
      },
      {
        title: "mouse",
        podate: "2020-11-12",
        content: "tgsfcderd4j7mds432dqefin",
        contact: "pp",
      },
      {
        title: "monitor",
        podate: "2020-11-12",
        content: "qewqxc",
        contact: "ddd",
      },
    ],
    title: "",
    podate: "",
    content: "",
    contact: "",
    image: "",
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeAutocomplete = (e, selected) => {
    if (selected)
      setState({
        title: selected.title,
        podate: selected.podate,
        content: selected.content,
        contact: selected.contact,
        image: selected.image,
      });
    else
      setState({ title: "", podate: "", content: "", contact: "", image: "" });
  };

  return (
    <MuiThemeProvider>
      <Autocomplete
        id="All Posts"
        options={state.adsArr}
        getOptionLabel={(option) => option.title}
        style={{ width: 400 }}
        onChange={onChangeAutocomplete}
        renderInput={(params) => (
          <TextField {...params} label="All Posts" variant="outlined" />
        )}
      />
      {state.title && (
        <TableContainer component={Paper} style={{ width: 400 }}>
          <Table>
            <TableBody>
              <TableRow key={Math.random().toString()}>
                <TableCell component="th" scope="row">
                  Title: {state.title}
                </TableCell>
              </TableRow>
              <TableRow key={Math.random().toString()}>
                <TableCell component="th" scope="row">
                  Content: {state.content}
                </TableCell>
              </TableRow>
              <TableRow key={Math.random().toString()}>
                <TableCell component="th" scope="row" colSpan="2">
                  <Image src={state.image} />
                </TableCell>
              </TableRow>
              <TableRow key={Math.random().toString()}>
                <TableCell
                  component="th"
                  scope="row"
                  colSpan="2"
                  style={{ textAlign: "center" }}
                >
                  <div>{state.podate}</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </MuiThemeProvider>
  );
};

export default Search;
