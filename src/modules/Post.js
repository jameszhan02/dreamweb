import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getPost, findUser, deletePost } from "../apiServices/dbTesterApi";
import "./Post.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Button, CardActions } from "@material-ui/core";
import { loginUser } from "../cookieHelper/index";

const Post = () => {
  //get data
  const history = useHistory();
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.all([getPost(history.location.state)]).then(([post]) => {
      setPost(post);
    });
    Axios.all([findUser(post.postUser)]).then(([userlist]) => {
      setUser(userlist);
    });
  }, [history.location.state, post.postUser]);

  const goBack = () => {
    history.goBack();
  };
  const deletePostandGoBack = (id) => {
    deletePost(id);
    goBack();
  };
  const formatDate = (date) => {
    return new Date(date).toString();
  };
  return (
    <div className="viewpost">
      <Card className="post" style={{ width: "70%" }}>
        <Typography variant="caption" display="block" align="left" gutterBottom>
          {user.email} {formatDate(post.postDate)}
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
          {user.id === loginUser().data.id && (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => deletePostandGoBack(post.id)}
            >
              Delete
            </Button>
          )}
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
