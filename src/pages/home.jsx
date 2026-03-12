import '../index.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CardWordle} from '../components/objects'

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
          <Button size='large' href="/2025dec">December 2025</Button>
          <Button disabled size='large' href="/2026jan">January 2026</Button>
          <Button size='large' href="/2026feb">February 2026</Button>
        </ThemeProvider>
      </Stack>
    </div>
  );
}

export default Home;