import React, {useState} from 'react';
import qs from 'query-string';

function Form() {

    const [post, setPost] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let token = localStorage.getItem("token")
        fetch("https://test.anniezheng.dev/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            },
            body: qs.stringify({
                new_file: post
            })
        })
        .then (resp => resp.json())
        .then(console.log)
    }

    return(
        <div>
            Login Form
            <form onSubmit={handleSubmit}>
                <input placeholder="post" id="post" name="post" value={post} onChange={(e) => setPost(e.target.value)}/>
                <button type="submit" value="Submit">Create Post</button>
            </form>
        </div>
    )
};

export default Form;
