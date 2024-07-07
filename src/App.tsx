import React from 'react';
import useMainRouter from '@router/useMainRouter';

function App() {
  const router = useMainRouter();
  return <div className="font-pretendard">{router}</div>;
}

export default App;
