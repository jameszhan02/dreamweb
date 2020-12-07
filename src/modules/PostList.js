import React, { useEffect, useState } from "react";
import Axios from "axios";
import { listPost, getUser } from "../apiServices/dbTesterApi";
import "./Post.css";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Button, CardActions } from "@material-ui/core";
import { loginUser } from "../cookieHelper/index";

const PostList = () => {
  //get data
  const history = useHistory();
  const [postlist, setPostlist] = useState([]);
  const [userlist, setUserlist] = useState([]);
  useEffect(() => {
    Axios.all([listPost()]).then(([postlist]) => {
      setPostlist(postlist);
    });
    Axios.all([getUser()]).then(([userlist]) => {
      setUserlist(userlist);
    });
  }, []);

  //console.log(postlist);

  const newPost = () => {
    var userData = loginUser();
    if (userData !== null) {
      history.push("/newpost");
      return history;
    } else {
      history.push("/login");
      return history;
    }
  };
  const viewPost = (id) => {
    history.push("/post" + id, id);
    return history;
  };
  const formatDate = (date) => {
    return new Date(date).toString();
  };
  return (
    <div className="post-container">
      <Card style={{ width: "60%" }}>
        <TextField
          id="outlined-basic"
          label="Create a new post"
          variant="outlined"
          color="primary"
          fullWidth="true"
          size="small"
          InputLabelProps={{ shrink: false }}
          onClick={newPost}
        />
      </Card>
      <br />
      {postlist.map((item, index) => {
        return (
          <Card className="post" style={{ width: "60%" }} key={index}>
            <Typography
              variant="caption"
              display="block"
              align="left"
              gutterBottom
            >
              {formatDate(item.postDate)}
            </Typography>
            <Typography variant="h6" align="left" color="primary">
              {item.postTitle}
            </Typography>
            <Typography variant="body1" align="left">
              {item.postText}
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{ marginLeft: "auto" }}
                onClick={() => viewPost(item.id)}
              >
                View
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default PostList;
