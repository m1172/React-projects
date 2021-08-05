import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './Body/body';
import Sidebar from './Sidebar/sidebar';
import Navbar from './Navbar/navbar';
import Card from './Card/card';



ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Sidebar className='sidebar'/>
      <Body className='body'>
        <Navbar/>
        <Sidebar/>
      </Body>
      
     
      
    </div>

    
  </React.StrictMode>,
  document.getElementById('root')
);


