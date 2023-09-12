import * as React from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ColorInversionMarketing() {
    const [color] = React.useState('primary');
    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                flexGrow: 1,
                display: 'flex',
                backgroundImage: `url('https://images.unsplash.com/photo-1581066316382-b48298a35840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                color: '#ffffff',
                bgcolor: color === 'primary' ? '#042449' : '#ffffff',
                p: { xs: '36px', md: '70px' },
     
             
                overflow: 'hidden',
                '& button': { borderRadius: 'xl' },
  

            }}
        >
            <Box sx={{ zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', flex: '2' }} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Typography sx={{ color: '#ffffff' }} level="h2">Interested in discovering more?</Typography>
                <Typography sx={{ mt: 1, mb: 3, color:'#ffffff' }}>
                    Feel free to talk, share your dream interior imagination and let us make it into reality.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        flexWrap: 'wrap',
                        maxWidth: 'max-content',
                        '& > *': { flexGrow: 1, fontWeight: 'lg' },
                    }}
                >
                    {/* <Button sx={{ minWidth: 120 }}>Install</Button> */}
                    <Button
                        variant="plain"
                        endDecorator={<ArrowForwardIcon fontSize="md" />}
                        sx={{
                            '&:hover': { '--Button-gap': '0.625rem' },
                            '& span': { transition: '0.15s' },
                            color: '#ffffff'
                        }}
                    >
                        Explore
                    </Button>
                </Box>
            </Box>
        </Sheet>
    );
}