import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Dropdown from '@mui/joy/Dropdown';
import ShortTextIcon from '@mui/icons-material/ShortText';
import HomeIcon from '@mui/icons-material/Home';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function AppsMenu(props) {
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
                sx={{ borderRadius: 40 }}
            >
                <ShortTextIcon fontSize='large' sx={{color:'#fefefe'}} />
            </MenuButton>
            <Menu
                variant="solid"
                invertedColors
                aria-labelledby="apps-menu-demo"
                sx={{
                    '--List-padding': '0.5rem',
                    '--ListItemDecorator-size': '3rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 100px)',
                    gridAutoRows: '100px',
                    gap: 1,
                }}
            >
                <MenuItem orientation="vertical" onClick={props.home}>
                    <ListItemDecorator>
                        <Avatar><HomeIcon /></Avatar>
                    </ListItemDecorator>
                    Home
                </MenuItem>
                <MenuItem orientation="vertical" onClick={props.overview}>
                    <ListItemDecorator>
                        <Avatar>
                            <NewspaperIcon />
                        </Avatar>
                    </ListItemDecorator>
                    Overview
                </MenuItem>
                <MenuItem orientation="vertical" onClick={props.explore}>
                    <ListItemDecorator>
                        <Avatar><TravelExploreIcon /></Avatar>
                    </ListItemDecorator>
                    Explore
                </MenuItem>
                <MenuItem orientation="vertical" onClick={props.food}>
                    <ListItemDecorator>
                        <Avatar>
                            <BrunchDiningIcon />
                        </Avatar>
                    </ListItemDecorator>
                    Food
                </MenuItem>
            </Menu>
        </Dropdown>
    );
}