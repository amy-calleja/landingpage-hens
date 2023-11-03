import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import palms from './palm-leaves.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import Timer from './Timer';
import flower from './flower.png'

function App() {  
  return (
    <div className="App" style={{backgroundImage:  `url(${palms}) `,
    height: 'auto',
    maxWidth: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    width: '100%',
    display: 'flex',
    minHeight: '110vh'}}>
      <div className='container-fluid' style={{backgroundColor: 'rgba(440, 255, 253, 0.1.5)',
  filter: 'blur(0.1px)'}}>
        <div className="App-header container-sm">
          <div className='aloha'>Aloha!</div>
          <div className='bodytitle'>hula on down to celebrate the bride-to-be at</div>
          <header className='title'>Lisa's Last Luao</header>
          <div className='details'>
            <div className='time'>2:00PM Saturday the 2nd of December</div>
              <div className='address' style={{fontStyle: 'normal'}}><a target="_blank" href='https://maps.app.goo.gl/1dxh8P9i56nQAYHb9' rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLocationDot} /> 9 Centaur Street, Kallaroo WA 6025</a>
              </div>
            
            <div style={{marginTop: '12px'}}>in line with the honeymoon destination, come dressed in the theme:
               <div className='theme'>Tropical Hawaiian <span><img src={`${flower}`} style={{display: 'inline-block',position: 'relative', top: '-6px',}} width='30px' /></span></div>
              
               </div> 
            <div style={{fontSize: '11px', marginBottom: '12px'}}> BYO alcohol, limited drinks provided</div>
            

            <>
              <Timer deadline="December, 02, 2023"/>
            </>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
