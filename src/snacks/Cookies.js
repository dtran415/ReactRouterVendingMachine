import React from "react";
import cookieImg from "./cookie.webp";
import { Link } from "react-router-dom";

function Cookies() {
    return (<div>
            <h1>Cookies</h1>
            <img src={cookieImg} alt="cookies" width={200} height={200} />
            <br/>
            <Link to="/">Go back</Link>
        </div>)
}

export default Cookies;