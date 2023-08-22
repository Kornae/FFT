import React from "react";
import HdrStrongIcon from '@mui/icons-material/HdrStrong';

export default function Section1() {
    return (
        <div id="s1-container" className="">
            <div id="nav" className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><HdrStrongIcon /> FFT</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-auto">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                <a className="nav-link" href="/">About Us</a>
                                <a className="nav-link" href="/">Work</a>
                                <a className="nav-link" href="/">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="title" className="container">
                <h1 id="title-h1">Far from typical</h1>
            </div>

            <div id="tabs" className="container">
                <div id="t1"><p>PLACES</p></div>
                <div id="t2"><p>SPACE</p></div>
                <div id="t3"><p>ARCHITECTURE</p></div>
                <div id="t4"><p>INTERIORS</p></div>
            </div>

            <div id="images">
                <div id="img1"></div>
                <div id="img2"></div>
            </div>
        </div>
    )
}