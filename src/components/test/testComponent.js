import React from 'react';

function handleButtonClick() {
    console.log('Button was clicked');
}

const आज = '1'

const Test = (props) => {
    return <div>
        <p>{props.user.name}</p>
        <p>{props.user.age}</p>
        <p>{props.user.occupation}</p>
        <button onClick={handleButtonClick}>Click Me</button>
    </div>
};


export default Test