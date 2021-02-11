import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";
import duckduck from './duckduck.jpeg';
import duckduck2 from './duckduck2.jpeg';
export default function Seven() {
    const correctAnswer = '567';
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    
    const checkAnswer = () => {
        if (answer === correctAnswer) {
            setStatus('"QUACK, FOUND IT! Thanks human!"')
            setCleared(true);
        } else {
            setCleared(false);
            setStatus('The duck waddles out to the hotel and back. "QUACK! WRONG"')
        }
    }

    return (
        <div>
            <h1>The Quacky One</h1>
            <img className="Gif" src={cleared ? duckduck2 : duckduck}/>
            <h3 className="blurb">You pant and heave your ass to the next room. A rather ugly creature waddles up to you.</h3>
            <h1>"QUACK! I left my tiger hat in the hotel room when I went on staycation. Do you remember what my room number was?"</h1>
            <input
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />        
            <button onClick={checkAnswer}>Submit</button>
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/eight">
                Continue
            </Link>}
        </div>
    );
}