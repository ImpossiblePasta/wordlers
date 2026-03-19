import { useState } from 'react';

import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';



export function LineGraph({scoreData, keys, month="Month"}){
    return(
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
                    id: month,
                    dataKey: 'date',
                    scaleType: 'time',
                    valueFormatter: (date) => date.getDate().toString(),
                    
                }, ] }
                yAxis={[{ min:0, max:7, width:20 }]}
                series={Object.keys(keys).map((key) => ({
                    dataKey: key,
                    label: keys[key],
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
    );
}