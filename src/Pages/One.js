import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";

import skog from './skog.jpeg';
export default function One() {
    const correctAnswer = 'gokslegnujd';
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    
    const checkAnswer = () => {
        if (answer.toLowerCase() === correctAnswer) {
            setStatus('The bear grunts in approval, then returns to his nap. You hurry to the next door before he wakes up again.')
            setCleared(true);
        } else {
            setCleared(false);
            setStatus('"REWSNA GRORW!!!"')
        }
    }

    return (
        <div>
            <h1>The Brown One</h1>
            <img className="Gif" src={skog}/>
            <h3 className="blurb">As you walk into the room, you notice a giant bear deep in slumber. Not wanting to startle the titan, you edge around the room. 
            Suddenly your handphone alarm rings, reminding you to take your pills at 12.30. The bear wakes up and releases a mighty roar.</h3>
            <h1>?Eman ym si thaw !Namuh ynup !GHAAARG </h1>
            <input
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />        
            <button onClick={checkAnswer}>Submit</button>
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/two">
                Continue
            </Link>}
        </div>
    );
}