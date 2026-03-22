import { useState } from 'react';

import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';

// Get a suffix for a numbie
const getSuffix = (n) => {
  const suff = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suff[(v - 20) % 10] || suff[v] || suff[0]);
};

export function LineGraph({scoreData, keys, colors, dateString="MONTH YEAR", monthCode="MON", minDate, maxDate}){
    return(
        <Box sx={{ minWidth: '95%', background:'#121213', borderRadius:2, padding:'10px 5px', }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>{dateString} SCORES</Box>
            <Box sx={{ 
                width: '100%',
                borderRadius: 1,
                bgcolor: '#ffffff',
                    '&:hover': {
                    bgcolor: '#ffffff', },
                }}>
                <LineChart
                    dataset={scoreData}
                    xAxis={ [ {
                        id: dateString,
                        min: minDate,
                        max: maxDate,
                        dataKey: 'date',
                        scaleType: 'time',
                        valueFormatter: (date, context) => context.location === 'tick' ? date.getDate().toString() :
                            monthCode +" "+ getSuffix(date.getDate()),
                        
                    }, ] }
                    yAxis={[{ min:0, max:7, width:20 }]}
                    series={Object.keys(keys).map((key) => ({
                        dataKey: key,
                        label: keys[key],
                        color: colors[key],
                        showMark: false,
                    }))}
                    height={350}
                    slotProps={{
                        legend: {
                            toggleVisibilityOnClick: true,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

const listSeries = [
    { dataKey: 'Jan', label:'JAN', stack:'total' },
    { dataKey: 'Feb', label:'FEB', stack:'total' },
    { dataKey: 'Mar', label:'MAR', stack:'total' },
    { dataKey: 'Apr', label:'APR', stack:'total' },
    { dataKey: 'May', label:'MAY', stack:'total' },
    { dataKey: 'Jun', label:'JUN', stack:'total' },
    { dataKey: 'Jul', label:'JUL', stack:'total' },
    { dataKey: 'Aug', label:'AUG', stack:'total' },
    { dataKey: 'Sep', label:'SEP', stack:'total' },
    { dataKey: 'Oct', label:'OCT', stack:'total' },
    { dataKey: 'Nov', label:'NOV', stack:'total' },
    { dataKey: 'Dec', label:'DEC', stack:'total' },
];

export function BarGraph({scoreData, keys, colors, dateString="MONTH YEAR", months=-1}){

    // Get the list series for this many months
    const series =  (months == -1 ) ? listSeries.slice(11,12) : listSeries.slice(0,months);

    return(
        <Box sx={{ width: '95%', maxWidth: 900, background:'#121213', borderRadius:2, padding:'10px 5px', margin:"3% 0" }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>{dateString} SCORES</Box>
            <Box height={300}
                sx={{ 
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: '#ffffff',
                        '&:hover': {
                        bgcolor: '#ffffff', },
                    }}>
                <BarChart
                    dataset={scoreData}
                    xAxis={[{ scaleType: 'band', dataKey:'name'
                     }]}
                    series={ series }
                />
            </Box>
        </Box>
    );
};