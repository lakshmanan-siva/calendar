import CalendarComponent from './components/CalendarComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6A1B9A', // A vibrant purple
    },
    secondary: {
      main: '#D81B60', // A vibrant pink
    },
    background: {
      default: '#f4f6f8',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CalendarComponent />
    </ThemeProvider>
  );
}

export default App;