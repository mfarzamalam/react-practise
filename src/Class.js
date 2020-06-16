import React from 'react';
import Pt from 'prop-types';

function Class(p) {
    return <div>
        <p>Class is {p.status}</p>
        <p> {p.numofkids} kids Present in the class</p>
    </div>
}

Class.propTypes = {
    status: Pt.string,
    numofkids: Pt.number.isRequired
}

Class.defaultProps = {
    status: "OFF"
}

export default Class;