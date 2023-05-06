import React from "react";
import gummybearImg from "./gummybears.jpg";
import {Link} from "react-router-dom";

function GummyBears() {
    return (<div>
            <h1>Gummy Bears</h1>
            <img src={gummybearImg} alt="gummy bears" width={200} height={200} />
            <br/>
            <Link to="/">Go back</Link>
        </div>)
}

export default GummyBears;