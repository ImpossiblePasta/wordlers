import './pagebody.css';
import { Logo } from './objects';
import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#f8f8f8',
          fontFamily: 'Franklin Gothic Medium',
          fontWeight: 900,
          '&:hover': {
            color: '#538d4e',
          },
          "&.Mui-disabled": {
            color: "#3a3a3c"
          }
        }
      }
    }
  }
});

export function Header({title="TITLE YEAR", hash, lastMonth, lastActive=true, nextMonth, nextActive=true}) {

    const [menuOpen, setMenuOpen] = useState(false);
    const buttonStyle = { fontSize: "34px", color: '#f8f8f8', };

    function GetIcon(){
        return ((menuOpen) ? <CloseIcon style={buttonStyle}/>: 
            <MenuIcon style={buttonStyle}/>);
    }

    return (
        // html header accounting for screensize
        <div className={menuOpen ? "headerBox open" : "headerBox"} >
            {/* THE TOP OF THE HEADER THAT IS SPLIT ON SMALL SCREENS */}
            <div className='headerTop'>
                <div className='headerBand'>
                    {/* HOLD THE LOGO */}
                    <a className='homeButton' href="/">
                        <Logo size='50px'/>
                        <h1>WORDLERS</h1>
                    </a>
                    <div className='title'>
                        <p>
                            <span>/</span> {title}
                        </p>
                    </div>
                    
                    {/* HOLD MENU BUTTON ONLY USED ON SMALL SCREENS */}
                    <div className='menuButton'>
                        <IconButton 
                            onClick={() => setMenuOpen(!menuOpen)} >
                                {GetIcon()}
                        </IconButton>
                    </div>
                    
                </div>
                
                {/* Hold the buttons for next and last page */}

                <hr color='#3a3a3c' width='100%'/>

                <div className='buttonBox'>
                    <ThemeProvider theme={theme}>
                        <Button disabled={!lastActive} size='large' href={"/"+lastMonth}
                            startIcon={<ChevronLeftIcon />}>{lastMonth}</Button>
                        <Button disabled={!nextActive} size='large' href={"/"+nextMonth}
                        endIcon={<ChevronRightIcon />}>{nextMonth}</Button>
                    </ThemeProvider>
                </div>

            </div>
                

            {/* BELOW THE BUTTON BOX INCLUDE THE MENU */}

            <hr color='#3a3a3c' width='100%'/>

            <div className='hashButtonBlock'>
                <a className={(hash!='award' && hash!='data') ? "hashButton active" : "hashButton"}
                    href='#graph'>
                    GRAPHS
                </a>
                <a className={hash=='award' ? "hashButton active" : "hashButton"}
                    href='#award'>
                    AWARDS
                </a>
                <a className={hash=='data' ? "hashButton active" : "hashButton"}
                    href='#data'>
                    DATA
                </a>
                
            </div>

        </div>
    );
}