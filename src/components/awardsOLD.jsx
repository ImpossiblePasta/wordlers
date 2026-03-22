import { useState, useRef } from 'react';
import './awards.css';

import { Box } from '@mui/material';
import {Typography} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';


function AvatarPlus({name, fact}) {
    return ( 
        <Tooltip arrow title={<><div>{name}</div><div>{fact}</div></>}
            placement="top-end"
        >
            <Avatar alt={name} 
            src={'/src/assets/2025/dec/ico/'+name.toLowerCase()+'.webp'} 
            sx={{ width: 35, height: 35,
                bgcolor: '#121213',
             }} />
        </Tooltip>
    );
}

function AvatarGroupPlus({winners}) {
    return(
        <AvatarGroup spacing='small' max={8}
            sx={{ margin: '4px', justifySelf:'flex-start'  }}
        >
            {winners.map((gamer) => (
                <AvatarPlus name={gamer.name} fact={gamer.value}/>
            ))}
        </AvatarGroup>
    );
    
}

export function AwardBox({data, name="GAME", quote="quote"}) {
    // FOR A GIVEN AWARD RETURN A SERIES OF BOXES FOR EACH WINNER 


    return(
        <Box sx={{ width: 300, background:'#121213', borderRadius:2, padding:'10px 5px', margin:"3% 0" }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>
                {name}
                <Typography variant="caption" display="block" align="center">{quote}</Typography>
            </Box>
            <Box 
                sx={{ 
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: '#424344',
                    }}>
                {/* INSIDE THE SUB BOX RENDER A PLACMENT FOR EACH PLAYER 
                    HOLD TWO DIVS, FOR TOP 3 AND THE REST
                    THEN RENDER HORIZONTALLY OR VERTIACLLY BASED ON SCREEN SIZE
                */}

                <div className='top3box'>
                    <div className={(data.first != null) ? 'podium first': "podium first empty"}>
                        {(data.first != null) &&
                            <AvatarGroupPlus winners={data.first} />}
                    </div>
                    <div className={(data.second != null) ? 'podium second': "podium second empty"}>
                        {(data.second != null) &&
                            <AvatarGroupPlus winners={data.second} />}
                    </div>
                    <div className={(data.third != null) ? 'podium third': "podium third empty"}>
                        {(data.third != null) &&
                            <AvatarGroupPlus winners={data.third} />}
                    </div>
                </div>
                
                <div className='bot5box'>
                    {data.forth != null && 
                        <div className='row fourth'>
                            <AvatarGroupPlus winners={data.forth} />
                        </div>
                    }
                    {data.fifth != null && 
                        <div className='row fifth'>
                            <AvatarGroupPlus winners={data.fifth} />
                        </div>
                    }
                </div>

            </Box>
        </Box>
    );
}