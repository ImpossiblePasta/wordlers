import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CardWordle} from './components/objects'

const theme = createTheme({
  palette: {
    wordled: {
      main: '#538d4e',
      light: '#E9DB5D',
      dark: '#A29415',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "#b59f3b"
          }
        }
      }
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="homeBox">
      <Stack direction="row">
        <CardWordle letter='W'/>
        <CardWordle letter='O'/>
        <CardWordle letter='R'/>
        <CardWordle letter='D'/>
        <CardWordle letter='L'/>
        <CardWordle letter='E'/>
        <CardWordle letter='R'/>
        <CardWordle letter='S'/>
      </Stack>
      <h2>MONTHS</h2>
      <Stack spacing={2} direction="column" minWidth='500px' width='50%' margin='0 auto 0 auto' >
        <ThemeProvider theme={theme}>
          <Button size='large' color="wordled" href="/2025dec">December 2025</Button>
          <Button disabled size='large' color="wordled" href="/2026jan">January 2026</Button>
          <Button size='large' color="wordled" href="/2026feb">February 2026</Button>
        </ThemeProvider>
      </Stack>
    </div>
    
  </StrictMode>,
)

