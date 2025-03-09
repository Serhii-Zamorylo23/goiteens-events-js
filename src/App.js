import React from 'react';
import './App.css';
import PageBoard from './Components/PageBoard/PageBoard';
import eventsjson from './Components/upcoming-events.json'
function App() {
  return (
    <PageBoard events={eventsjson}/>
  );
}

export default App;
