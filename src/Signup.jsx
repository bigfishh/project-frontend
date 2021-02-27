import React, {useState, useEffect} from 'react'
import qs from 'query-string'

function Signup({setLoggedIn}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://test.anniezheng.dev/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: qs.stringify({
                username: username,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem("token", data.accessToken)
                setLoggedIn(true)
            } else {
                console.log(data.message)
            }
        });
    };

    return(
        <div>
            Sign up Form
            <form onSubmit={handleSubmit}>
                <input placeholder="username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" value="Submit">Sign up</button>
            </form>
        </div>
    )
};

export default Signup;