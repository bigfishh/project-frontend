import React, { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import Form from './Form'

function App() {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(function() {
        fetch("https://test.anniezheng.dev/")
        .then(resp => resp.json())
        .then(console.log)
    }, [])

    function handleLogout() {
        localStorage.clear()
        setLoggedIn(false)
    }

    function renderForms() {
        if (loggedIn) {
            return( 
                <div>
                    <button onClick={handleLogout}>Log out</button>
                    <Form />
                </div>
            )
        } else {
            return (
                <div>
                    <Login setLoggedIn={setLoggedIn}/>
                    <Signup setLoggedIn={setLoggedIn}/>
                </div>
            )
        }
    }

    return(
        <div>
            {renderForms()}
        </div>
    )
}

export default App 