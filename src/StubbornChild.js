import React from 'react';

const StubbornChild = (props) => {
    return <div>
        this is a stubborn child. don't tell him what to do and when he married 
        his son will be {props.children}
    </div>
}

export default StubbornChild;