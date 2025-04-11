import React from 'react';
import "../css/Header.scss";
import "../index.scss";

const Button = ({Label, onclick}) => {
    return (
        <button onClick={onclick} className="btn">
            {Label}
        </button>
    );
};

export default Button;