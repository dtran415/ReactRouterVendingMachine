import React from "react";
import chipsImg from "./chips.jpg";
import { Link } from "react-router-dom";

function Chips() {
    return (<div>
            <h1>Chips</h1>
            <img src={chipsImg} alt="chips" width={200} height={200}/>
            <br/>
            <Link to="/">Go back</Link>
        </div>)
}

export default Chips;