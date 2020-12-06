import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getPost } from "../apiServices/dbTesterApi";
import "./Post.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Button, CardActions } from "@material-ui/core";

const Post = () => {
  //get data
  const history = useHistory();
  const [post, setPost] = useState([]);
  useEffect(() => {
    Axios.all([getPost(history.location.state)]).then(([post]) => {
      setPost(post);
    });
  }, []);

  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="viewpost">
      <Card className="post" style={{ width: "70%" }}>
        <Typography variant="caption" display="block" align="left" gutterBottom>
          {post.postUser} {Date(post.postDate)}
        </Typography>
        <Typography variant="h6" align="left" color="primary">
          {post.postTitle}
        </Typography>
        <Typography variant="body1" align="left">
          {post.postText}
        </Typography>
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
        <img
          src={post.postimg}
          alt={post.postImgalt}
          style={{ width: "70%" }}
        />
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{ marginLeft: "auto" }}
            onClick={goBack}
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
