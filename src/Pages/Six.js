import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";

import icebear from './icebear.gif';

export default function Six() {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    const [ready, setReady] = useState(false);
    const [set, setSet] = useState(false);
    const [go, setGo] = useState(false);
    const [danced, setDanced] = useState(false)

    const [sequence, setSequence] = useState([])
    const UP = "U"
    const DOWN = "D"
    const LEFT = "L"
    const RIGHT = "R"
    const DIFFICULTY = 16
    const motions = [UP, DOWN, LEFT, RIGHT]
    const dirToSquare = {
        U : 'sq2',
        L : 'sq4',
        R : 'sq6',
        D : 'sq8'
    }
    const [activeSquare, setActiveSquare] = useState('sq5')

    const checkAnswer = () => {
        let seqString = ''
        for (let i = 0; i < DIFFICULTY; i++) {
            seqString += sequence[i]
        }
        // console.log('your answer', answer.toUpperCase())
        // console.log('actual answer', seqString)
        if (answer.toUpperCase() === seqString) {
            setStatus('"Ice bear is impressed. You may proceed."')
            setCleared(true);
        } else {
            setCleared(false);
            setStatus('"Ice bear did not do that."')
        }
    }

    const startSequence = () => {
        setDanced(false)
        if (window.movement) {
            // console.log('interrupt existing one')
            setActiveSquare('sq5')
            clearInterval(window.movement)
        }
        let sequence = []
        for (let i = 0; i < DIFFICULTY; i++) {
            let motion = motions[Math.floor(Math.random() * motions.length)];
            sequence[i] = motion
        }
        setSequence(sequence)
        // console.log('sequence is 1', sequence)
        setReady(true)
        setTimeout(
            () => {
                setReady(false)
                setSet(true)
                setTimeout(
                    () => {
                        setSet(false)
                        setGo(true)
                        setTimeout(
                            () => {
                                setGo(false)
                                iceDance(sequence)
                            },
                            1000
                        );
                    },
                    1000
                );
            },
            1000
        );
    }

    const iceDance = (sequence) => {
        // console.log('sequence is 2', sequence)
        // console.log('directory is ', dirToSquare)
        let index = 0
        window.movement = setInterval(
            () => {
                // console.log('move there' , dirToSquare[sequence[index]])
                setActiveSquare(dirToSquare[sequence[index]])
                // console.log('*****')
                setTimeout(
                    () => {
                        // console.log('move back')
                        setActiveSquare('sq5')
                        // console.log('=====')
                    },
                    660
                );
                // console.log('index is ', index)
                index++
                if (index === DIFFICULTY) {
                    setDanced(true)
                    clearInterval(window.movement)
                }
            }, 
            1000
        );
    }

    return (
        <div>
            <h1>The Cool One</h1>
            <img className="Gif" src={icebear}/>
            <h3 className="blurb">You hear music coming from the next room. The moment you open the door... "Icebear challenges you to a dance battle."</h3>
            <h1>Ice Bear will only make up, down, left and right moves from the center of the dance floor. Memorize his moves to proceed (16 in total).</h1>        
            <button style={{marginBottom: "8px"}}onClick={startSequence}>Start</button>
            {ready == true && <div>READY...</div>}
            {set == true && <div>SET...</div>}
            {go == true && <div>GO!</div>}
            <table className="iceTable">
                <tr>
                    <td id="sq1"className="iceGrid"></td>
                    <td id="sq2"className="iceGrid">
                        {activeSquare == "sq2" && <img className="smallImg" src={icebear}/>}
                    </td>
                    <td id="sq3"className="iceGrid"></td>
                </tr>
                <tr>
                    <td id="sq4"className="iceGrid">
                        {activeSquare == "sq4" && <img className="smallImg" src={icebear}/>}
                    </td>
                    <td id="sq5"className="iceGrid">
                        {activeSquare == "sq5" && <img className="smallImg" src={icebear}/>}
                    </td>
                    <td id="sq6"className="iceGrid">
                        {activeSquare == "sq6" && <img className="smallImg" src={icebear}/>}
                    </td>
                </tr>
                <tr>
                    <td id="sq7"className="iceGrid"></td>
                    <td id="sq8"className="iceGrid">
                        {activeSquare == "sq8" && <img className="smallImg" src={icebear}/>}
                    </td>
                    <td id="sq9"className="iceGrid"></td>
                </tr>
            </table>
            <input
                disabled={!danced}
                placeholder="answer in one long string, eg. 'ULU' = UPLEFTUP"
                style={{marginTop: "8px", width: "300px"}}
                type="text"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />        
            <button onClick={checkAnswer}>Submit</button>
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/seven">
                Continue
            </Link>}
        </div>
    );
}