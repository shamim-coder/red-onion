import React from "react";

const Dinner = ({ dinner }) => {
    return (
        <div>
            <h1>Dinner</h1>
            <h4>{dinner.title}</h4>
        </div>
    );
};

export default Dinner;
