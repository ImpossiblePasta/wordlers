import './2025.css'
import { useEffect, useState } from 'react';


import { Header } from '../components/pagebody';
import { LineGraph, BarGraph } from '../components/graphs';
import { ExpandingTable } from '../components/tables';

import { colors, keys } from '../assets/2025/info.js';
import { scoreData, barData } from '../assets/2025/dec/score.js';
import { playerData } from '../assets/2025/dec/table.js';

import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: '.5s',
          width: '50%',
          margin: 30,
          background: '#818384',
          color: '#ffffff',
          fontFamily: 'Franklin Gothic Medium',
          fontWeight: 900,
          '&:hover': {
            color: '#ffffff',
            background: '#121213',
          },
          "&.Mui-disabled": {
            color: "#3a3a3c"
          }
        }
      }
    }
  }
});


function December2025() {


  const getHash = () => typeof window !== 'undefined' ? window.location.hash.replace("#", "") : "";
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => setHash(getHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return(
    <div className='pageBox'> 
      <Header title='December 2025' hash={hash}
        lastMonth={"2025nov"} nextMonth={"2026jan"} 
        lastActive={false} nextActive={false} />

      <div className='mainPage'>

        {(hash!='award' && hash!='data') && 
        <div className='graphBox'>
            <LineGraph scoreData={scoreData} colors={colors} keys={keys} 
              dateString="DECEMBER 2025" monthCode='DEC'
              minDate={new Date(2025, 12, 1)}
              maxDate={new Date(2025, 12, 31)}
              />

            <BarGraph scoreData={barData} colors={colors} keys={keys} 
              dateString="DECEMBER 2025" monthCode='DEC'/>
        </div> }

        { hash == 'award' &&
          <div className='awardBox'>
            <h2>DIV 2</h2>
          </div>
        }
        
        { hash == 'data' &&
          <div className='dataBox'>
              <ExpandingTable dataSet={playerData} date='DECEMBER 2025 DATA'/>
              {/* BELOW THE DATA TABLE HAVE A DOWNLOAD BUTTON */}
              <ThemeProvider theme={theme}>
                <Button variant="contained" 
                  href='../assets/2025/dec/december2025.xlsx' download="december2025.xlsx" 
                  endIcon={<DownloadIcon />}>
                  DOWNLOAD EXCEL
                </Button>
              </ThemeProvider>
              
          </div>
        }

        
      </div>
        
      
    </div>
  );
}

export default December2025;