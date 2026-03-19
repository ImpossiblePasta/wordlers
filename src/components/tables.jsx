import { useState, Fragment } from 'react';
import { playerData } from '../assets/2025/score';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Typography } from '@mui/material';


// Get a suffix for a numbie
const getSuffix = (n) => {
  const suff = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suff[(v - 20) % 10] || suff[v] || suff[0]);
};



// The row function which transforms a person from the dataset into a row element
function Row(props) {
    const {row} = props;
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow
                hover role="checkbox" tabIndex={-1} key={row.name} 
                sx={{ '& > *': { borderBottom: 'unset' } }}>
                {/* Sticky Body Cells */}
                <TableCell
                    component="th"
                    scope="row"
                    sx={{
                    paddingLeft:'5px',paddingRight:'5px',
                    position: 'sticky',
                    left: 1,
                    zIndex: 1, // Ensure body cells appear above standard cells
                    backgroundColor: 'background.paper', // Match paper background
                    }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={()=>setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {row.name}
                </TableCell>

                {/* RENDER EACH DAY VALUE */}
                {Object.keys(row).map((key) =>
                    { return( (key != 'name' && key != 'info') &&
                        <TableCell>{row[key]}</TableCell>
                    )}
                )}
            </TableRow>
            
            {/* THE EXPANDING ROW */}

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={31}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 0, marginTop: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Stats
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableBody>
                        {row.info.map((infoRow) => (
                            <TableRow key={infoRow.fact} sx={{ maxWidth: "5px", }}>
                            <TableCell component="th" scope="row"
                            sx={{ width:'20%', }}>
                                {infoRow.fact}
                            </TableCell>
                            <TableCell>{infoRow.value}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
            
        </Fragment>

    );
}


export function ExpandingTable({dataSet, monthCode='Jan', date="MONTH YEAR"}) {

    
    const days = Object.keys(playerData[0]).length -2;

    return (
        <Box sx={{ maxWidth: '90%', background:'#121213', borderRadius:2, padding:'10px 5px', }}>
            <Box sx={{ background: '#121213', }}>{date}</Box>
            <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                <Table stickyHeader size="small" aria-label="score table">
                    <TableHead>
                        <TableRow>
                            {/* Sticky Header Cells */}
                            <TableCell align='center'
                            sx={{
                                minWidth: '50px',
                                position: 'sticky',
                                left: 0,
                                zIndex: 6, // Higher zIndex than body cells
                                backgroundColor: 'background.paper', // Match paper background
                            }}
                            >
                            Name
                            </TableCell>
                            {/* Other Headers */}
                            { [...Array(days)].map((_, index) => 
                                <TableCell sx={{ minWidth: '25px', }}
                                >{getSuffix(index+1)}</TableCell>
                                
                            )}
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {playerData.map((row) => (
                        <Row row={row} key={row.name}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>    
        </Box>   
    );
}