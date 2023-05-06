import React from 'react';
import { getIntentChipText, getIntentPalette } from '../../utilz';

// Legacy Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

interface IntentChipProps {
    variant: string;
    value: number;
}

export const IntentChip: React.FC <IntentChipProps> = ({variant, value})=> {
    const chip_text = getIntentChipText(value);
    const bg_color = getIntentPalette(value, 'background');
    const font_color = getIntentPalette(value, 'color');
    const hover_color = getIntentPalette(value, 'hover');
    return(
        <React.Fragment>
            {
                variant === 'full'?
                    <Box 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            py: variant === 'full'? '16px': '0px',
                            px: variant === 'full'? '16px': '0px',
                            boxSizing: 'content-box',
                            borderRadius: variant === 'full'? '28px': '72px',
                            backgroundColor: bg_color,
                            '&:hover': {backgroundColor: hover_color, cursor: 'pointer'}
                        }}
                    >
                        <Typography sx={{color: font_color,fontSize: '14px',}}>
                            {variant==='full'? chip_text: chip_text[0]}
                        </Typography>
                    </Box>
                    :
                    <Avatar
                        sx={{ 
                            bgcolor: bg_color,
                            '&:hover': {backgroundColor: hover_color, cursor: 'pointer'} 
                        }}
                    >
                        <Typography sx={{color: font_color,fontSize: '14px',}}>
                            {chip_text[0]}
                        </Typography>
                    </Avatar>
            }
            
        </React.Fragment>
    )
}