import './hub.css'
import { useEffect, useState } from 'react';


import { Header } from '../components/pagebody';
import { LineGraph, BarGraph, PieGraph } from '../components/graphs';
import { ExpandingTable } from '../components/tables';
import { AwardBox } from '../components/awards.jsx';

import { Icons } from '../assets/2025/dec/icons';

import { colors, keys } from '../assets/2025/info.js';
import { scoreData, barData, pieData } from '../assets/2025/dec/score.js';
import { playerData } from '../assets/2025/dec/table.js';

import { lowestScore, lowestVarience, bestDay, leastMissed, duoClosestScores, duoHighVar } from '../assets/2025/dec/award.js';

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
        lastActive={false} nextActive={true} />

      <div className='mainPage'>

        {(hash!='award' && hash!='data') && 
        <div className='graphBox'>
            <LineGraph scoreData={scoreData} colors={colors} keys={keys} 
              dateString="DECEMBER 2025" monthCode='DEC'
              minDate={new Date(2025, 12, 1)}
              maxDate={new Date(2025, 12, 31)}
              />

            <BarGraph scoreData={barData} colors={colors} keys={keys} 
              dateString="DECEMBER TOTAL" monthCode='DEC'/>

            <PieGraph pieData={pieData} dateString="DECEMBER 2025"/>
        </div> }

        { hash == 'award' &&
          <div className='awardBox'>
            <AwardBox icons={Icons} data={lowestScore} name="TOP WORDLER" 
              quote='"the best wordler in town"' />

            <AwardBox icons={Icons} data={lowestVarience} name="STRAIGHT ARROW" 
              quote='"the wordler you could bet on"' />

            <AwardBox icons={Icons} data={bestDay} name="BEST DAY EVER" 
              quote='"who shined one day this month"' />

            <AwardBox icons={Icons} data={leastMissed} name="DEVOTED GAMER" 
              quote='"the wordler who never gave up"' />

            <AwardBox icons={Icons} double={true} data={duoClosestScores} name="DOUBLE TROUBLE" 
              quote='"the duo who scored the closest together"' />

            <AwardBox icons={Icons} double={true} data={duoHighVar} name="ODD COUPLE" 
              quote='"the strogest pair in a wordle fight"' />
          </div>
        }
        
        { hash == 'data' &&
          <div className='dataBox'>
              <ExpandingTable dataSet={playerData} date='DECEMBER 2025 DATA'/>
              {/* BELOW THE DATA TABLE HAVE A DOWNLOAD BUTTON */}
              <ThemeProvider theme={theme}>
                <Button variant="contained" 
                  href={'https://raw.githubusercontent.com/ImpossiblePasta/wordlers/main/src/assets/2025/dec/december2025.xlsx'} 
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