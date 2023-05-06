import React from "react";
import { Link } from "react-router-dom";
import vendingImg from "./vending_machine.webp";
import "./VendingMachine.css";

function VendingMachine() {
    return (<div className="VendingMachine">
        <img src={vendingImg} alt="Vending machine" style={{width: '50%'}} />
        <div className="VendingMachine-centered">
            <h2><Link to="/chips">Chips</Link></h2>
            <h2><Link to="/cookies">Cookies</Link></h2>
            <h2><Link to="/gummybears">Gummy Bears</Link></h2>
        </div>
    </div>)
}

export default VendingMachine;