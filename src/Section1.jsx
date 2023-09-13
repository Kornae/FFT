import React from "react";
import { Button } from "@mui/material";
import ShortTextIcon from '@mui/icons-material/ShortText';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export default function Section1(props) {

    return (
        <div id="s1-container" className="">
            <div id="nav" className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><LocalPizzaIcon /> Italy</a>
                        <Button color="inherit" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <ShortTextIcon fontSize="large" />
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-auto">
                                <button className="nav-link">Home</button>
                                <a className="nav-link" href="/" onClick={props.about}>Overview</a>
                                <a className="nav-link" href="/" onClick={props.features}>Cibo & Vino</a>
                                <a className="nav-link" href="/" onClick={props.contact}>Explore</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="title" className="container">
                <h1 id="title-h1">Far from typical</h1>
            </div>

            <div id="tabs" className="container">
                <div id="t1">Rome</div>
                <div id="t2">Venice</div>
                <div id="t3">Florence</div>
                <div id="t4">Milan</div>
            </div>

            <div id="images">
                <div id="img1"></div>
                <div id="img2"></div>
            </div>
        </div>
    )
}