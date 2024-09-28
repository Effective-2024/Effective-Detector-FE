import ReduxProvider from '@lib/utils/reduxProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMainRouter from '@router/useMainRouter';
import { ToastContainer } from 'react-toastify';
import ReactQueryProvider from './lib/utils/queryProvider';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = useMainRouter();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#06B73B',
      },
    },
    typography: {
      fontFamily: ['Pretendard'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ReactQueryProvider>
        <ReduxProvider>
          <div className="font-pretendard">{router}</div>
          <ToastContainer autoClose={1500} position="bottom-right" />
        </ReduxProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default App;
