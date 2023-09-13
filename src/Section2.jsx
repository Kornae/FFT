import React from "react";
import { Button } from "@mui/material";


export default function Section2() {
let handleClick = () => {
    window.location = 'https://www.britannica.com/place/Italy'
}

    return (
        <div id="s2-container" className="">
            <div id="s2-text" className="container">
                <div id="p-text">
                <p id="p-quote">
                    “A man has not fully lived until he experiences that gentle balmy climate of ancient empires, the land of lemon trees and the genius of Michelangelo.”   <br />
                    </p> <p id="p-author">  — E.A. BUCCHIANERI - AMERICAN WRITER </p></div>
                <div id="content-image">
                    <img alt="building" id="buildimg-img" src="https://images.unsplash.com/photo-1534650075489-3baecec1e8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"/>
                </div>
                <div id="content-text">
                    <h6 id="content-h6">Italy</h6>
                    <h4 id="content-h4">A Living Canvas</h4>
                    <p id="content-p">
                        Located in Southern Europe, Italy boasts a rich cultural heritage, captivating landscapes, and historical significance. Iconic cities like Rome, Florence, and Venice merge history, art, and cuisine. With roots in ancient civilizations, notably the Romans, Italy's history shaped its remarkable architecture and governance. The Renaissance era ushered in artistic brilliance, led by luminaries like Leonardo da Vinci and Michelangelo. In the 19th century, Italy unified as a nation-state. Today, it shines as a global destination celebrated for its art, history, cuisine, and stunning landmarks like the Colosseum and the Vatican.</p>
                    <Button variant="outlined" onClick={handleClick} color="inherit" style={{ width: '40%', borderRadius: '0px', padding: '10px', fontSize: '.8rem' }}>Learn More</Button>
                </div >
            </div>
        </div>
    )
}
