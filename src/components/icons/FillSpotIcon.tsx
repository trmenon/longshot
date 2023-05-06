import React from 'react';
import { getFillColor } from '../../utilz';

interface FillSpotIconProps{
    fillValue: number;
}

export const FillSpotIcon: React.FC<FillSpotIconProps> = ({fillValue})=> {
    const value = getFillColor(fillValue);
    return(
        <React.Fragment>
            <svg 
                width="16px" 
                height="16px" 
                viewBox="0 0 16 16" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none"
            >
                <path fill={value} d="M8 3a5 5 0 100 10A5 5 0 008 3z"/>
            </svg>
        </React.Fragment>
    )
}