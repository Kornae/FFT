import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from "@mui/material";
import ShortTextIcon from '@mui/icons-material/ShortText';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import InstagramIcon from '@mui/icons-material/Instagram';

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
                        “Open my heart and you will see Graved inside of it, “Italy”.”

                        <br />
                    </p> <p id="f-author">  — ROBERT BROWNING (1812-1889) - ENGLISH POET AND PLAYWRIGHT </p></div>

                <div id='socials'>
                    <span id='media'>
                        <LinkedInIcon />
                    </span>

                    <span id='media'>
                        <InstagramIcon />
                    </span>

                    <span id='media'>
                        <GitHubIcon />
                    </span>

                </div>

                <a style={{ textDecoration: 'none', color: 'inherit', fontSize: '.7rem', padding: '10px' }} href="https://www.flaticon.com/free-icons/italy" title="italy icons">Italy icons created by Creatype - Flaticon</a>
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