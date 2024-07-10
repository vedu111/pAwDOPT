import React from 'react';
import "./About.css";
function Members({ name, position }) {
    return (
        <div className="w-full lg:w-1/3 mb-4">
            <img className="mx-auto rounded-full mb-2" src="" alt="" width="150" height="150" />
            <h5 className="mb-0">{name}</h5>
            <p className="nuni"><strong>{position}</strong></p>
        </div>
    );
}

export default Members;
