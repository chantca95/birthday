import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";

import mushy from './mushy.jpeg';
export default function Two() {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    const [hinted, setHinted] = useState(false);
    
    const checkAnswer = () => {
        let number = parseInt(answer)
        if (95000 <= number && number <= 100000) {
            setStatus('The Guardian seems satisfied at your answer. He/It learns back and smiles to itself, allowing you to pass.')
            setCleared(true);
        } else {
            setCleared(false);
            setStatus('"No, no, that seems wrong"')
        }
    }

    const toggleHint = () => {
        setHinted(!hinted);
    }

    return (
        <div>
            <h1>The Yellow-ish One</h1>
            <img className="Gif" src={mushy}/>
            
            <h3 className="blurb">In the next room is a bed. In the bed is a banana. The banana turns and smiles at you. Strange... but you've seen stranger things in your life, though.</h3>
            <h1>"Young adventurer, answer me this and you shall pass. Just how long (in human years) have I lived?</h1>

            <h3 className="hint" onClick={toggleHint}>{hinted ? "***Hint: Bananas have a shelf life of 5 days, what about Humans? A range of answers is accepted***" : "HINT"}</h3>
            
            <input
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />
            <button onClick={checkAnswer}>Submit</button>
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/three">
                Continue
            </Link>}
        </div>
    );
}