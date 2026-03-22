import { useState, useRef } from 'react';
import './awards.css';

import { Box } from '@mui/material';
import {Typography} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';


function AvatarPlus({name, fact, size}) {
    return ( 
        <Tooltip arrow title={<><div>{name}</div><div>{fact}</div></>}
            placement="top-end"
        >
            <Avatar alt={name} 
            src={'/src/assets/2025/dec/ico/'+name.toLowerCase()+'.webp'} 
            sx={{ width: size, height: size,
                bgcolor: '#121213',
             }} />
        </Tooltip>
    );
}

function AvatarGroupPlus({winners, size}) {
    return(
        <AvatarGroup spacing='small' max={8}
            sx={{ margin: '4px' }}
        >
            {winners.map((gamer) => (
                <AvatarPlus name={gamer.name} fact={gamer.value} size={size}/>
            ))}
        </AvatarGroup>
    );
    
}

export function AwardBox({data, name="GAME", quote="quote"}) {
    // FOR A GIVEN AWARD RETURN A SERIES OF BOXES FOR EACH WINNER 


    return(
        <Box sx={{ width: 300, background:'#121213', borderRadius:2, padding:'10px 5px', margin:"4% 3%" }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>
                {name}
                <Typography variant="caption" display="block" align="center">{quote}</Typography>
            </Box>

            <div className='winnersBox'>
                {data.first != null && 
                    <div className='podium first'>
                        <p>1st</p>
                        <AvatarGroupPlus winners={data.first} size={40} />
                    </div>
                }
                {data.forth != null && 
                    <div className='podium second'>
                        <p>2nd</p>
                        <AvatarGroupPlus winners={data.second} size={35} />
                    </div>
                }
                {data.forth != null && 
                    <div className='podium third'>
                        <p>3rd</p>
                        <AvatarGroupPlus winners={data.third} size={30} />
                    </div>
                }
                {data.forth != null && 
                    <div className='podium fourth'>
                        <p>4th</p>
                        <AvatarGroupPlus winners={data.forth} size={28} />
                    </div>
                }
                {data.fifth != null && 
                    <div className='podium fifth'>
                        <p>5th</p>
                        <AvatarGroupPlus winners={data.fifth} size={28} />
                    </div>
                }
            </div>

        </Box>
    );
}