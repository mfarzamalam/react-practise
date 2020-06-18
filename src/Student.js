import React from 'react';

function Student(props) {
    const click = (e) => {
        e.preventDefault();
        console.log("Button clicked");
    }

    return <div>
        <h1>student name is {props.name}</h1>
        <a href="https://www.google.com/" onClick={click}> google doodle </a>
    </div>
}



export default Student;