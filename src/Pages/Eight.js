import React, { useState } from 'react';

import {
    Link
  } from "react-router-dom";

import wabbitrun from './wabbitrun.gif';
import fatbit from './fatbit.jpeg'
import icebear from './icebear.gif'
import duckduck from './duckduck2.jpeg';
import ogu from './ogu.gif';
import bacbac from './bacbac.gif';
import shcooby from './shcooby.jpeg';
import mushy from './mushy.jpeg';
import skog from './skog.jpeg';

export default function Eight() {
    const [status, setStatus] = useState('');
    const [cleared, setCleared] = useState(false);
    const [ready, setReady] = useState(false);
    const [set, setSet] = useState(false);
    const [go, setGo] = useState(false);
    const [started, setStarted] = useState(false)
    const INTERVAL = 650

    const creatures = ['fatbit', 'duckduck', 'icebear', 'ogu', 'bacbac', 'shcooby', 'mushy', 'skog']

    const winTheStage = () => {
        clearInterval(window.movement)
        lineCreaturesUp()
        setStatus('"CONGRATULATIONS! YOU CAUGHT HIM!" The creatures cheer you on as you make your way to the treausre room.')
        setCleared(true);
    }

    const lineCreaturesUp = () => {
        for (let i = 0 ; i < creatures.length; i++) {
            let creature = creatures[i]
            let styleString = "left : " + (i * 5 + 30) + "%; top : 85%;"
            document.getElementById(creature).setAttribute("style", styleString);
        }
    }

    const startSequence = () => {
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
                                setStarted(true)
                                scramble()
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

    const scramble = (sequence) => {
        window.movement = setInterval(
            () => {
                scramblePositions()
            }, 
            INTERVAL
        );
    }

    const getRandomIntFrom0To19 = () => {
        let min = Math.ceil(0);
        let max = Math.floor(19);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const scramblePositions = () => {
        let creaturePositions = []
        let positionsSet = new Set()
        for (let i = 0 ; i < creatures.length; i++) {
            let x
            // generate an x position (groups of 5% to avoid conflict)
            let y
            // generate a y position (groups of 5% to avoid conflict)
            while (true) {
                x = getRandomIntFrom0To19() * 5
                y = getRandomIntFrom0To19() * 5
                let coords = [x, y]
                // we want to give each icon a unique position so as to prevent overlaps
                if (!positionsSet.has(coords)) {
                    positionsSet.add(coords)
                    creaturePositions.push(coords)
                    break
                }
            }
        }
        // console.log('creature positions ', creaturePositions)
        repositionCreatures(creaturePositions)
    }

    const repositionCreatures = (positions) => {
        for (let i = 0 ; i < creatures.length; i++) {
            let creature = creatures[i]
            let newPosition = positions[i]
            // console.log(creature, newPosition)
            let styleString = "left : " + newPosition[0] + "%; top : " + newPosition[1] +"%;"
            // console.log(styleString)
            document.getElementById(creature).setAttribute("style", styleString);
        }
    }

    return (
        <div>
            <h1>The Fa(s)t Ones</h1>
            <img className="Gif" src={wabbitrun}/><img className="Gif" src={fatbit}/>
            <h3 className="blurb">You find a bunch of creatures playing tag. The long-earred one greets you. "The rules are simple Adventurer! If you can catch my big brother, you pass! I've called the other guardians to join in too teehee!"</h3>
            <h1>Catch Fatbit.</h1>        
            {!started && <button style={{marginBottom: "8px"}}onClick={startSequence}>Start</button>}
            {ready == true && <div>READY...</div>}
            {set == true && <div>SET...</div>}
            {go == true && <div>GO!</div>}
            {started && <img onClick={winTheStage} id="fatbit" className="tinyImg" src={fatbit}/>}
            {started && <img id="duckduck" className="tinyImg" src={duckduck}/>}
            {started && <img id="icebear" className="tinyImg" src={icebear}/>}
            {started && <img id="ogu" className="tinyImg" src={ogu}/>}
            {started && <img id="bacbac" className="tinyImg" src={bacbac}/>}                                
            {started && <img id="shcooby" className="tinyImg" src={shcooby}/>}
            {started && <img id="mushy" className="tinyImg" src={mushy}/>}
            {started && <img id="skog" className="tinyImg" src={skog}/>}
            <h3 className={cleared ? "Success" : "Failure"}>{status}</h3>
            {cleared && <Link className="link" to="/end">
                Continue
            </Link>}
        </div>
    );
}