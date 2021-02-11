import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";

import bacbac from './bacbac.gif';
import bac1 from './bac1.jpg';
import bac2 from './bac2.jpg';
import bac3 from './bac3.jpg';
import bac4 from './bac4.jpg';
import bac5 from './bac5.jpg';
import bac6 from './bac6.jpg';
import bac7 from './bac7.jpg';
import bac8 from './bac8.jpg';
import bac9 from './bac9.jpg';
import bac10 from './bac10.jpg';
import bac11 from './bac11.jpg';
import bac12 from './bac12.jpg';
import bac13 from './bac13.jpg';
import bac14 from './bac14.jpg';
import bac15 from './bac15.jpg';
import bac16 from './bac16.jpg';
import bac17 from './bac17.jpg';
import bac18 from './bac18.jpg';
import bac19 from './bac19.jpg';
import bac20 from './bac20.jpg';
import bac21 from './bac21.jpg';
import bac22 from './bac22.jpg';
import bac23 from './bac23.jpg';
import bac24 from './bac24.jpg';


export default function Four() {
    const correctAnswer = 'bac16';
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    
    const checkAnswer = (event) => {
        if (event.target.id === correctAnswer) {
            setStatus('"Caught you, little rascal! Thank you Adventurer, BacKind shall forever remember you."')
            setCleared(true);
        } else {
            setCleared(false);
            setStatus('"Are you just randomly guessing? Try again!"')
        }
    }

    return (
        <div>
            <h1>The White One(s)</h1>
            <img className="Gif" src={bacbac}/>
            <h3 className="blurb">Before you even enter the next room, you hear a flurry of activity. 
            Your suspicions are confirmed as you open the door to a mad scrambling of beings... that all look the same.
            One such being stands in the middle, confused and tired.</h3>
            <h1>Help me find the imposter and I will let you proceed! He's in here somewhere... (Try not to refer to telegram)</h1>
            <table>
                <tbody>
                    <tr>
                        <img id='bac1'onClick={checkAnswer}className="gridElement" src={bac1}/>
                        <img id='bac2'onClick={checkAnswer}className="gridElement" src={bac2}/>
                        <img id='bac3'onClick={checkAnswer}className="gridElement" src={bac3}/>
                        <img id='bac4'onClick={checkAnswer}className="gridElement" src={bac4}/>
                        <img id='bac5'onClick={checkAnswer}className="gridElement" src={bac5}/>
                        <img id='bac6'onClick={checkAnswer}className="gridElement" src={bac6}/>
                        <img id='bac7'onClick={checkAnswer}className="gridElement" src={bac7}/>
                        <img id='bac8'onClick={checkAnswer}className="gridElement" src={bac8}/>
                    </tr>
                    <tr>
                        <img id='bac9'onClick={checkAnswer}className="gridElement" src={bac9}/>
                        <img id='bac10'onClick={checkAnswer}className="gridElement" src={bac10}/>
                        <img id='bac11'onClick={checkAnswer}className="gridElement" src={bac11}/>
                        <img id='bac12'onClick={checkAnswer}className="gridElement" src={bac12}/>
                        <img id='bac13'onClick={checkAnswer}className="gridElement" src={bac13}/>
                        <img id='bac14'onClick={checkAnswer}className="gridElement" src={bac14}/>
                        <img id='bac15'onClick={checkAnswer}className="gridElement" src={bac15}/>
                        <img id='bac16'onClick={checkAnswer}className="gridElement" src={bac16}/>
                    </tr>
                    <tr>
                        <img id='bac17'onClick={checkAnswer}className="gridElement" src={bac17}/>
                        <img id='bac18'onClick={checkAnswer}className="gridElement" src={bac18}/>
                        <img id='bac19'onClick={checkAnswer}className="gridElement" src={bac19}/>
                        <img id='bac20'onClick={checkAnswer}className="gridElement" src={bac20}/>
                        <img id='bac21'onClick={checkAnswer}className="gridElement" src={bac21}/>
                        <img id='bac22'onClick={checkAnswer}className="gridElement" src={bac22}/>
                        <img id='bac23'onClick={checkAnswer}className="gridElement" src={bac23}/>
                        <img id='bac24'onClick={checkAnswer}className="gridElement" src={bac24}/>
                    </tr>
                </tbody>
            </table>        
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/five">
                Continue
            </Link>}
        </div>
    );
}