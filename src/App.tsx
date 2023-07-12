import React, { Fragment } from 'react';
import './config/styleVariables.scss';
import FirstStep from './components/bookings/bookingForms/bookingFirstStep/firstStep';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Fragment>
      <FirstStep></FirstStep>
      <Footer></Footer>
      </Fragment>
    </div>
  );
}

export default App;
