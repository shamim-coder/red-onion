import React from "react";

const Breakfast = ({ breakfast }) => {
    return (
        <div>
            <h1>Breakfast</h1>
            <h4>{breakfast.title}</h4>
        </div>
    );
};

export default Breakfast;
