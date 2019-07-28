import React from 'react';

import '../App.css';
import { Header } from './common/header/Header';
import { NumbersList } from './section-one/NumbersList';

function App() {
  return (
    <>
      <Header />
      <main>
        <NumbersList />
      </main>
    </>
  );
}

export default App;
