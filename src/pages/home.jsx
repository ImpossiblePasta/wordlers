import './home.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CardWordle, Logo} from '../components/objects'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#818384',
          fontFamily: 'Franklin Gothic Medium',
          fontWeight: 900,
          '&:hover': {
            color: '#538d4e',
          },
          "&.Mui-disabled": {
            color: "#3a3a3c"
          }
        }
      }
    }
  }
});


function Home() {

  return(
    <div className="homeBox">
      <div className='homeLogo'><Logo size='120px'/></div>
      <Stack className='wordleRow' direction="row">
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
      <Stack spacing={2} direction="column" minWidth='300px' width='50%' margin='0 auto 0 auto' >
        <ThemeProvider theme={theme}>
          <Button size='large' href="/2025dec">December 2025</Button>
          <Button size='large' href="/2026jan">January 2026</Button>
          <Button size='large' href="/2026feb">February 2026</Button>
          <Button size='large' href="/2026mar">March 2026</Button>
          <Button size='large' href="/2026apr">April 2026</Button>
          <Button size='large' href="/2026may">May 2026</Button>
          <Button disabled size='large' href="/2026jun">June 2026</Button>
        </ThemeProvider>
      </Stack>
    <hr color='#3a3a3c' height='1px' width='50%'/>
    <a href="/info">INFO</a>
    </div>
  );
}

export default Home;