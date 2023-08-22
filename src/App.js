import React from 'react';
import MiddleRight from './MiddleRightSide';
import Left from './LeftSideBar';


function App() {
  return (
    <div className='row'>
      <div className="leftBar">
        <Left />
      </div>
      <div className='rightside'>
        <MiddleRight /></div>
    </div>
  );
}

export default App;