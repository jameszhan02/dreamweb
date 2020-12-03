import React, { useEffect, useState } from "react";
import Axios from "axios";
import { listPost } from "../apiServices/dbTesterApi";
import "./Post.css";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const Post = () => {
  //get data
  const history = useHistory();
  const [postlist, setPostlist] = useState([]);
  useEffect(() => {
    Axios.all([listPost()]).then(([postlist]) => {
      setPostlist(postlist);
    });
  }, []);

  console.log(postlist);

  const newPost = () => {
    history.push("/newpost");
    return history;
  };
  return (
    <div className="post-container">
      <Card style={{ width: "70%" }}>
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
      <br />
      {postlist.map((item, index) => {
        console.log(item.postImg);
        return (
          <div key={index}>
            <Typography
              variant="caption"
              display="block"
              align="left"
              gutterBottom
            >
              {item.postUser} {item.postDate}
            </Typography>
            <Typography variant="h6" align="left" color="primary">
              {item.postTitle}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: item.postText }} />
            <img
              src={item.postImg}
              alt={item.postImgalt}
              style={{ width: "100%" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
