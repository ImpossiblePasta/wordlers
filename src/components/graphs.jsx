import { useState } from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';

import { colors } from '../assets/2026/info';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Get a suffix for a numbie
const getSuffix = (n) => {
  const suff = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suff[(v - 20) % 10] || suff[v] || suff[0]);
};

export function LineGraph({scoreData, keys, dateString="MONTH YEAR", monthCode="MON", minDate, maxDate}){
    return(
        <Box sx={{ minWidth: '95%', background:'#121213', borderRadius:2, padding:'10px 5px', }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>{dateString} SCORES</Box>
            <Box sx={{ 
                width: '100%',
                borderRadius: 1,
                bgcolor: '#242424',
                }}>
                <ThemeProvider theme={darkTheme}>
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
                </ThemeProvider>
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

export function BarGraph({scoreData, keys, dateString="MONTH YEAR", months=-1}){

    // Get the list series for this many months
    const series =  (months == -1 ) ? listSeries.slice(11,12) : listSeries.slice(0,months);
    const namesArray = Object.values(scoreData).map((item) => item.name);

    return(
        <Box sx={{ width: '95%', maxWidth: 700, background:'#121213', borderRadius:2, padding:'10px 5px', margin:"3% 2%" }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>{dateString} SCORES</Box>
            <Box height={400}
                sx={{ 
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: '#242424',
                    }}>
                <ThemeProvider theme={darkTheme}>
                <BarChart
                    dataset={scoreData}
                    mode='dark'
                    xAxis={[{ scaleType: 'band', dataKey:'name',

                     }]}
                    series={ series }
                /> </ThemeProvider>
            </Box>
        </Box>
    );
};


const whitePallet = {
    1: 'rgb(255, 255, 255)',
    2: 'rgb(235, 235, 235)',
    3: 'rgb(215, 215, 215)',
    4: 'rgb(195, 195, 195)',
    5: 'rgb(175, 175, 175)',
    6: 'rgb(155, 155, 155)',
    X: 'rgb(135, 135, 135)',
    na: 'rgb(115, 115, 115)',
}


export function PieGraph({pieData, dateString="MONTH YEAR"}) {


    // Create the results object from the data
    const resultsObject = (pieData.reduce((counter, currentItem) => {
        counter[currentItem.value] = (counter[currentItem.value] || 0) + currentItem.count;
        return counter; 
    }, {}));

    const results = Object.keys(resultsObject).map(key => {
        return {
            label: key,
            value: resultsObject[key],
            color: whitePallet[key],
        };
    });

    // Create an object of results and their player frequencies
    // and create a occurence value for each name
    const playerData =
        // For each value in the results 
        Object.keys(resultsObject).flatMap(val => (
            // Filter the items from the pieData
                pieData.filter(pv => pv.value === val).flatMap((pv) => ({
                label: pv.name + ": " + pv.value,
                value: pv.count,
                color: colors[pv.name]
                }))
        ));

    // Hold the inner and outer series for the pie chart
    const series = [
        // First the inner series
        {
            innerRadius: 0,
            outerRadius: 80,
            id: 'result-series',
            data: results,
            arcLabel: 'label',
            arcLabelMinAngle: 20,
            arcLabelRadius: '40%',
            valueFormatter: (params) => {return params.value + " times"},
        },
        // The outer series of players
        {
            innerRadius: 100,
            outerRadius: 120,
            id: 'player-series',
            data: playerData,
            valueFormatter: (params) => {return params.value + " times"},
        },
    ];

    return(
        <Box sx={{ width: '95%', maxWidth: 350, background:'#121213', borderRadius:2, padding:'10px 5px', margin:"3% 2%" }}>
            <Box sx={{ background: '#121213', padding: '10px 0px 10px 0px', textAlign:'center', fontSize:'18px', }}>{dateString} RESULTS FREQUENCY</Box>
            <Box height={300}
                sx={{ 
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: '#242424',
                    }}>
                <ThemeProvider theme={darkTheme}>
                <PieChart
                    series={series}
                    hideLegend
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                        fontWeight: 'bold', fill:'#232323',
                        },
                    }}
                />
                </ThemeProvider>
            </Box>
        </Box>
    );
}