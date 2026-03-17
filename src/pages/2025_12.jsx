import './2025.css'

import { Header } from '../components/pagebody';

import Box from '@mui/material/Box';
import { scoreData } from '../assets/2025/score';
import { LineChart } from '@mui/x-charts/LineChart';


function December2025() {


  return(
    <div className='pageBox'>
      <Header title='December 2025'
        lastMonth={"2025nov"} nextMonth={"2026jan"} 
        lastActive={false} nextActive={false} />

      <div className='mainPage'>
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
      </div>
      
    </div>
  );
}

export default December2025;