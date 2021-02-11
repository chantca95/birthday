import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";

import ogu from './ogu.gif';
import seashells from './seashells.png'
export default function Five() {
    const correctAnswer = 'she shellsh sheashellsh by the sheashore';
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    
    const checkAnswer = () => {
        if (answer.toLowerCase() === correctAnswer) {
            setStatus('"Ogu! Ogu ogu!!!" the pair happily bounce away, satisfied with your answer')
            setCleared(true);
        } else {
            setCleared(false);
            setStatus('"O...gu...?"')
        }
    }

    return (
        <div>
            <h1>The Tailed Ones</h1>
            <img className="Gif" src={ogu}/>
            <h3 className="blurb">Awww, these two seem to be having a lot of fun! You approach them and ask them if you may proceed.</h3>
            <h1>"Ogu!', squeals the little one. "I'm sorry... what?" "OGU!" The big one hands you a picture.<br/> Seems like you're going to have to guess some sort of passcode from this clue...</h1>
            <div className="marginBot">
                <img className="Gif" src={seashells}/>
            </div>
            <input
                style={{width: "400px"}}
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />        
            <button onClick={checkAnswer}>Submit</button>
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/six">
                Continue
            </Link>}
        </div>
    );
}