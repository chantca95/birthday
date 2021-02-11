import React, { useState, useEffect } from 'react';

import {
    Link
  } from "react-router-dom";

import shcooby from './shcooby.jpeg';
export default function Three() {
    const DELAY = 15;
    const [timeLeft, setTimeLeft] = useState(DELAY);
    const [waited, setWaited] = useState(false)
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    const [scratchCount, setScratchCount] = useState(0);

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
            setWaited(true);
        }
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);

    const scratch = () => {
        let newCount = scratchCount + 1;
        if (newCount == 5) {
            clearStage();
        } else {
            setScratchCount(newCount);
        }
    }
    
    const clearStage = () => {
        setStatus('The Creature leans back in satisfcation once the final scritch has been scratched. He raises two fingers to salute you, then motions for you to carry on.')
        setCleared(true);
    }

    return (
        <div>
            <h1>The Patient One</h1>
            <img className="Gif" usemap="#shcoobMap" src={shcooby}/>
            <map name="shcoobMap">
                <area className="bellyButton" shape="rect" coords="125,350,175,400" alt="bellybutton" onClick={scratch}/>
            </map>
            <h3 className="blurb">An extremely dapper young creature sits on a stool in the middle of the room. He slowly rises to great you. And I mean SLOWLY.</h3>
            <h1>{!waited ? "Greeeeetingggggssss. I.. I.. I....." : "waaaaant... a... scriiiitch scraaaatch"}</h1>

            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {!waited && <Link className="link" to="/one">Continue...?</Link>}
            {cleared && <Link className="link" to="/four">
                Continue
            </Link>}
        </div>
    );
}