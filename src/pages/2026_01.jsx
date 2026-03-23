import './hub.css'
import { useEffect, useState } from 'react';


import { Header } from '../components/pagebody';
import { LineGraph, BarGraph, PieGraph } from '../components/graphs';
import { ExpandingTable } from '../components/tables';
import { AwardBox } from '../components/awards.jsx';

import { Icons } from '../assets/2026/jan/icons';

import { colors, keys } from '../assets/2026/info.js';
import { scoreData, barData, pieData } from '../assets/2026/jan/score.js';
import { playerData } from '../assets/2026/jan/table.js';

import { lowestScore, lowestVarience, bestDay, leastMissed, highestImprovement, duoClosestScores, duoHighVar } from '../assets/2026/jan/award.js';

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


function January2026() {


  const getHash = () => typeof window !== 'undefined' ? window.location.hash.replace("#", "") : "";
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => setHash(getHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return(
    <div className='pageBox'> 
      <Header title='JANUARY 2026' hash={hash}
        lastMonth={"2025dec"} nextMonth={"2026feb"} 
        lastActive={true} nextActive={true} />

      <div className='mainPage'>

        {(hash!='award' && hash!='data') && 
        <div className='graphBox'>
            <LineGraph scoreData={scoreData} colors={colors} keys={keys} 
              dateString="JANUARY 2026" monthCode='JAN'
              minDate={new Date(2026, 1, 1)}
              maxDate={new Date(2026, 1, 31)}
              />

            <BarGraph scoreData={barData} colors={colors} keys={keys} 
              dateString="2026 YEAR TOTAL" monthCode='JAN' months={1}/>
              
            <PieGraph pieData={pieData} dateString="JANUARY 2025"/>
        </div> }

        { hash == 'award' &&
          <div className='awardBox'>
            <AwardBox icons={Icons} data={lowestScore} name="TOP WORDLER" 
              quote='"the best wordler in town"' />

            <AwardBox icons={Icons} data={lowestVarience} name="STRAIGHT ARROW" 
              quote='"the wordler you could bet on"' />

            <AwardBox icons={Icons} data={highestImprovement} name="MOST IMPROVED" 
              quote='"who came back this month stronger"' />

            <AwardBox icons={Icons} data={bestDay} name="BEST DAY" 
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
              <ExpandingTable dataSet={playerData} date='JANUARY 2026 DATA'/>
              {/* BELOW THE DATA TABLE HAVE A DOWNLOAD BUTTON */}
              <ThemeProvider theme={theme}>
                <Button variant="contained" 
                  href={'https://raw.githubusercontent.com/ImpossiblePasta/wordlers/main/src/assets/2026/jan/january2026.xlsx'} 
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

export default January2026;