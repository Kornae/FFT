import React from "react";
import { Button } from "@mui/material";

export default function Section2() {
    return (
        <div id="s2-container" className="">
            <div id="text" className="container">
                <div id="p-text">For more than three decades, we've partnered with clients worldwide, crafting designs that not only meet but exceed their unique requirements. In a world brimming with challenges, our unwavering dedication remains firmly fixed on fulfilling our clients' needs.</div>
            </div>

            <div id="content" className="container">
                <div id="content-image"></div>

                <div id="content-text">

                    <h6>About</h6>
                    <h3>Lorm Interior Architecture</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.</p>
                    <Button variant="outlined" color="inherit" style={{ width: '50%', borderRadius: '0px', padding: '10px' }}>Learn More</Button>

                </div>

            </div>
        </div>
    )
}