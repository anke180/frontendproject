import React from 'react';
import "../css/Header.scss";
import "../index.scss";

//all de buttons op de pagina
const Button = ({Label, onclick}) => {
    return (
        <button onClick={onclick} className="btn">
            {Label}
        </button>
    );
};

export default Button;