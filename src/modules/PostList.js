import React, { useEffect, useState  } from "react";
import Axios from 'axios';
import {listPost} from '../apiServices/dbTesterApi';
import "./Post.css";
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const Post = () => {
  //get data
  const history = useHistory();
  const [postlist, setPostlist] = useState([]);
    useEffect(() => {
       Axios.all([
        listPost(),
      ]).then(([postlist]) => {
        setPostlist(postlist);
      });
    }, []);

    console.log(postlist);

  const newPost = () => {
    history.push('/newpost');
    return history;
  }
      return (
        <div className="post-container">
          <Button variant="contained" color="primary" onClick={newPost}>Add My Post</Button>
          <br/>
          <br/>
          {postlist.map((item, index) => {
            console.log(item.postImg);
            return (
              <div className="post-row" key={index}>
                <div className="post-user">{item.postUser}</div>
                <div className="post-date">{item.postDate}</div>
                <div className="post-title">{item.postTitle}</div>
                <div className="post-content">{item.postText}</div>
                <img  src={item.postImg} alt={item.postImgalt}/>
              </div>
            );
          })}
        </div>
      );
  
}

export default Post;
