import React from "react";

// Legacy Imports
import Paper from '@mui/material/Paper';

// Types
interface CustomCardProps {
    children: React.ReactNode,
    width: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({children, width})=> {
    return(
        <React.Fragment>
            <Paper 
                elevation={4}
                sx={{
                    borderRadius: '8px',
                    width: width,
                    height: '100%',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    border: '0.5px solid #ededef'
                }}
            >
                {children}
            </Paper>
        </React.Fragment>
    )
}