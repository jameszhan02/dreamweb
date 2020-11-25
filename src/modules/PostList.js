import React, { useEffect, useState ,Component } from "react";
import Axios from 'axios';
import {listPost} from '../apiServices/dbTesterApi';
import "./Post.css";

const Post = () => {
  //get data
  const [postlist, setPostlist] = useState([]);
    useEffect(() => {
       Axios.all([
        listPost(),
      ]).then(([postlist]) => {
        setPostlist(postlist);
      });
    }, []);

    console.log(postlist);
  // const posts = [
  //   {
  //     title: "how to do the thing",
  //     text: "fkjdskjfdsvcmcl kjfdskjfsflsk; safa ",
  //     user: "Stephan Singh",
  //     date: "2020/10/10",
  //     img:
  //       "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  //     imgalt: "red dot",
  //   },
  //   {
  //     title: "Top 5 restaurants",
  //     text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumx",
  //     user: "Not Stephan",
  //     date: "2020/10/10",
  //     img: "",
  //     imgalt: "",
  //   },
  // ];
      return (
        <div className="post-container">
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
