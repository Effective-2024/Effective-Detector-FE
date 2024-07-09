import React from 'react';
import useMainRouter from '@router/useMainRouter';
import ReduxProvider from '@lib/utils/reduxProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const router = useMainRouter();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#BDB27B',
      },
      secondary: {
        main: '#005247',
      },
    },
    typography: {
      fontFamily: ['Pretendard'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
        <div className="font-pretendard">{router}</div>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
