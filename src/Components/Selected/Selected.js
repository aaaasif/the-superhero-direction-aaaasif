import React from 'react';
import './Selected.css'

const Selected = (props) => {
    const { name, photo } = props.developer;
    return (
        <div className="selected-dev d-flex align-items-center my-3">
            <img src={photo} alt="" />
            <h6 className="p-3">{name}</h6>
        </div>
    );
};

export default Selected;