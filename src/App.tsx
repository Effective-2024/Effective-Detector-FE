import React from 'react';
import useMainRouter from '@router/useMainRouter';
import ReduxProvider from '@lib/utils/reduxProvider';

function App() {
  const router = useMainRouter();
  return (
    <ReduxProvider>
      <div className="font-pretendard">{router}</div>
    </ReduxProvider>
  );
}

export default App;
