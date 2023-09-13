import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from "@mui/material";
import ShortTextIcon from '@mui/icons-material/ShortText';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export default function ColorInversionFooter(props) {
    const [color] = React.useState('neutral');
    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                ...({
                    bgcolor: `#0a0a0a`,
                }),
                flexGrow: 1,
                p: 2,
                height: 'auto',
                padding: '40px',

            }}
        >

            <div id='first-section'>
                <div id='footer-quote'>
                    <p id="f-quote">
                        “A man has not fully lived until he experiences that gentle balmy climate of ancient empires, the land of lemon trees and the genius of Michelangelo.”   <br />
                    </p> <p id="f-author">  — E.A. BUCCHIANERI - AMERICAN WRITER </p></div>

                <div id='socials'>
                    <span id='media'>
                        <FacebookRoundedIcon />
                    </span>
                    <span id='media'>
                        <GitHubIcon />
                    </span>

                </div>
            </div>

            <Divider sx={{ my: 2 }} />
            <div id="nav-foot" className="container">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a style={{ color: '#fefefe' }} className="navbar-brand" href="/"><LocalPizzaIcon /> Italy</a>
                        <Button color="inherit" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup2" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <ShortTextIcon fontSize="large" />
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup2">
                            <div className="navbar-nav ms-auto">
                                <a style={{ color: '#fefefe' }} className="nav-link" href="/" onClick={props.home}>Home</a>
                                <a style={{ color: '#fefefe' }} className="nav-link" href="/" onClick={props.overview}>Overview</a>
                                <a style={{ color: '#fefefe' }} className="nav-link" href="/" onClick={props.food}>Cibo & Vino</a>
                                <a style={{ color: '#fefefe' }} className="nav-link" href="/" onClick={props.explore}>Explore</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Sheet>
    );
}