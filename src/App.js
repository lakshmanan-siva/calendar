import React from 'react';
import CalendarComponent from './components/CalendarComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4', // Google Blue for primary actions
    },
    secondary: {
      main: '#DB4437', // A secondary color if needed (e.g., Google Red)
    },
    background: {
      default: '#f8f9fa', // Light background for the overall app
      paper: '#FFFFFF', // White for cards/modals
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    }
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
    MuiAppBar: { // Customizing AppBar for the top navigation
      styleOverrides: {
        root: {
          // If you want a full white app bar:
          // backgroundColor: '#FFFFFF',
          // borderBottom: '1px solid #eee',
        }
      }
    },
    MuiPaper: { // Customizing general Paper component (used for calendar container)
      styleOverrides: {
        root: {
          boxShadow: 'none', // Remove default shadow from Paper components if desired
        }
      }
    }
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