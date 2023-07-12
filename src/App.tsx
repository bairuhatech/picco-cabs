import React from 'react';
import logo from './logo.svg';
import './config/styleVariables.scss';
import Footer from './components/footer/footer';
import FirstStep from './components/bookings/bookingForms/bookingFirstStep/firstStep';

function App() {
  return (
    <div className="App">
     <FirstStep/>
     <Footer/>
    </div>
  );
}

export default App;
