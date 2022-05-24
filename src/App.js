/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import DevTools from 'mobx-react-devtools';

import Counter from './pages/Counter';

function App() {
  return (
    <div className='App'>
      <DevTools />
      <Counter />
    </div>
  );
}

export default App;
