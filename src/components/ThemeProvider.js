import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C4A484',
      light: '#E6D0B3',
      dark: '#8B4513',
    },
    secondary: {
      main: '#F3E8D6',
    },
    background: {
      default: '#1a1429',
      paper: 'rgba(255, 255, 255, 0.12)',
    },
    text: {
      primary: '#F3E8D6',
      secondary: 'rgba(243, 232, 214, 0.7)',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: 12,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: '#2d1f47',
          '&:hover': {
            background: 'rgba(196, 164, 132, 0.15)',
          },
          '&.Mui-selected': {
            background: 'rgba(196, 164, 132, 0.25)',
            '&:hover': {
              background: 'rgba(196, 164, 132, 0.35)',
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#C4A484',
          '& .MuiSlider-thumb': {
            backgroundColor: '#F3E8D6',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#C4A484',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
          '& .MuiSlider-mark': {
            backgroundColor: '#C4A484',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
          background: 'linear-gradient(45deg, #C4A484 30%, #E6D0B3 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          marginBottom: '1rem',
        },
        h2: {
          color: '#F3E8D6',
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          textTransform: 'none',
          fontSize: '1.1rem',
          background: 'linear-gradient(45deg, #C4A484 30%, #E6D0B3 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #B39374 30%, #D6C0A3 90%)',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#C4A484',
          '&.Mui-checked': {
            color: '#E6D0B3',
          },
        },
      },
    },
  },
});

export function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
} 