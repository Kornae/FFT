import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * Design credit: https://flutter.dev/
 */

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
                bgcolor: 'transparent',
                backgroundImage:`url(https://images.unsplash.com/photo-1598278852265-870a9cb9ce2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2790&q=80)`,
                backgroundSize: 'cover',
                backgroundPosition:'center',
                p: { xs: '36px', md: '70px' },
                pt: { xs: '24px', md: '60px' },
                justifyContent: 'center',
                alignItems:'center',
                overflow: 'hidden',
            
            
            }}
        >
            <Box sx={{ zIndex: 1, position: 'relative', padding:'20px' }}>
                <Typography level="h2">Want to learn more about Italy?</Typography>
                <Typography sx={{ mt: 1, mb: 3 }}>
                    Delve Deeper into Italy's Hidden Treasures.
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
                
                    <Button
                        variant="plain"
                        endDecorator={<ArrowForwardIcon fontSize="md" />}
                        sx={{
                            '&:hover': { '--Button-gap': '0.625rem' },
                            '& span': { transition: '0.15s' }
                            
                        }}
                    >
                        Learn More
                    </Button>
                </Box>
            </Box>

        </Sheet>
    );
}