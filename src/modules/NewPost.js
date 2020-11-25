// import * as React from 'react'
import React, {  useState } from 'react';
// import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import jwtAxios from "../axios";
import {useHistory} from 'react-router-dom';

//MUST START WITH capital letter  (link below)
//https://dev.to/ranewallin/js-bites-react-hook-is-called-in-a-function-which-is-neither-a-react-function-or-sic-a-custom-react-hook-1g2c
const NewPost = () => {
    const history = useHistory();
    const [content, setContent] = useState([]);
    const [title, setTitle] = useState([]);
    const [desc, setDesc] = useState([]);
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    function handleEditorChange({ html, text }) {
        // console.log('handleEditorChange', html, text)
        setContent(html);
    }
    const handleTitleChange = (e) => {
        // console.log(e.target.value);
        setTitle(e.target.value);
    }    
    const handleDescChange = (e) => {
        // console.log(e.target.value);
        setDesc(e.target.value);
    }
    const submitText = async() => {
        let post = {postTitle: title, postText: desc, postUser: 1,postDate: Date.now(), postContent: content, postImgalt: `${title}img`, postImg:"" }
        // // const res = await Axios.post('http://localhost:8080/user/signup', user);
        let res = await jwtAxios.post(`/post/savepost`,post);
        history.push('/postlist');
        return res;
    }

    return (
        <div className="newpostContainer">
            <TextField id="standard-basic" label="Title go here" onChange={handleTitleChange} />
            <br/>
            <br/>
            <TextField id="standard-basic" label="Describe your Topic" onChange={handleDescChange} />
            <br/>
            <br/>
            <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={submitText}>Publish !</Button>
        </div>
    );
};

export default NewPost;