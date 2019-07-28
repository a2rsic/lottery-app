import React from 'react';

import '../App.css';
import { Header } from './common/header/Header';
import { NumbersList } from './section-one/NumbersList';
// import { Ticket } from '../view/section-two/Ticket';
// import { TicketsList } from './section-four/TicketsList';

function App() {
  return (
    <>
      <Header />
      <main>
        <NumbersList />
        {/* <TicketsList /> */}
        {/* <Ticket /> */}
      </main>
    </>
  );
}

export default App;
