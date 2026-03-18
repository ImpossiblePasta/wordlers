import './2025.css'
import { useEffect, useState } from 'react';

import { Header } from '../components/pagebody';

import Box from '@mui/material/Box';
import { scoreData } from '../assets/2025/score';
import { LineChart } from '@mui/x-charts/LineChart';


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
        <div className='div1'>
            <h2>DECEMEBER 2025</h2>
            <Box sx={{ 
              width: '100%',
              borderRadius: 1,
              bgcolor: '#ffffff',
                '&:hover': {
                  bgcolor: 'f0f0f0', },
              }}>
              <LineChart
                dataset={scoreData}
                xAxis={ [ {
                    id: 'Decemeber',
                    dataKey: 'date',
                    scaleType: 'time',
                    valueFormatter: (date) => date.getDate().toString(),
                }, ] }
                yAxis={[{ width: 10 }]}
                series={[
                  {
                    id: 'Eve',
                    label: 'Eve\'s Daily Score',
                    dataKey: 'Eve',
                  },
                  {
                    id: 'Joey',
                    label: 'Joey\'s Daily Score',
                    dataKey: 'Joey',
                  },
                ]}
                height={300}
              />
            </Box>
        </div> }

        { hash == 'award' &&
          <div className='div2'>
            <h2>DIV 2</h2>
          </div>
        }
        
        { hash == 'data' &&
          <div className='div2'>
              <h2>DIV 3</h2>
          </div>
        }

        
      </div>
        
      
    </div>
  );
}

export default December2025;