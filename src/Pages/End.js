import React, { useState } from 'react';

import lunchbox from './lunchbox.jpeg';
import treasure from './treasure.jpeg';
import mechkey from './mechkey.jpeg';
import biap from './biap.jpeg';

export default function End() {
    
    const openUp = (e) => {
        let id = e.target.id
        let target = document.getElementById(id)
        target.classList.toggle("fadeInOut")
        setTimeout(
            () => {
                if (id === "reward") {
                    target.src = mechkey
                } else {
                    target.src = biap
                }
            },
            2500
        );
    }

    return (
        <div>
            <h1>The End</h1>
            <div>
                <img id="reward" onClick={openUp}  className="Gif" src={treasure}/>
            </div>
            <div>
                <img id="shnackums" onClick={openUp} className="Gif" src={lunchbox}/>
            </div>
            <h1>Behold the hallowed hall of Bebsh! You may collect your reward and your shnackums adventurer, you've earned it!</h1>
        </div>
    );
}