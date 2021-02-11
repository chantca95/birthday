import React from "react";

import {
    Link
  } from "react-router-dom";

import door from './door.jpeg';

export default function Home() {
    return (
        <div>
            <h1>8 ancient guardians stand between you and the hallowed treasure of Bebsh.</h1>
            <h1>Defeat them to claim the ultimate prize!</h1>
            <h3>Enter at your own risk...</h3>
            <Link to="/one">
                <img className="Gif" src={door}/>
            </Link>
        </div>
    );
}