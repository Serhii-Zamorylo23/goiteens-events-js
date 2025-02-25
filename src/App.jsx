import React from 'react';
import PageBoard from './components/PageBoard/PageBoard';
import eventsjson from './components/upcoming-events.json'
export const App = () => {
  return (
    <PageBoard events={eventsjson}/>
  );
};
