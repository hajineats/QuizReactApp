import React from 'react';

export default function LandingPage(props){


    function nextPage(){
        props.a(false);
    }

    return (
        <div>
            <h1>Welcome to NZPMC quiz app</h1>
            <h2>Here you can find randomised questions</h2>
            <h3>This is still in the development stage. If there is any bug or if you want to suggest a feature,
            please do so by contacting contact.nzpmc@gmail.com
            </h3>
            <button onClick={() => nextPage()}>
            Click me to start!
            </button>
        </div>
    )

}