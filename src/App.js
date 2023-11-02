import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import palms from './pink-background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import Timer from './Timer';
import flower from './flower.png'

function App() {  
  return (
    <div className="App">
      <div className='container-fluid' style={{backgroundImage: `url(${palms})`,  backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}}>
        <div className="App-header">
          <div className='aloha'>Aloha!</div>
          <div className='bodytitle'>hula on down to celebrate the bride-to-be at</div>
          <header className='title'>Lisa's Last Luao</header>
          <div className='details'>
            <div className='time'>2:00PM Saturday the 2nd of December</div>
              <div className='address' style={{fontStyle: 'normal'}}><a target="_blank" href='https://maps.app.goo.gl/1dxh8P9i56nQAYHb9' rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLocationDot} /> 9 Centaur Street, Kallaroo WA 6025</a>
              </div>
            
            <div>in line with the honeymoon destination, come dressed in the theme:
               <div className='theme'>Tropical Hawaiian <span><img src={`${flower}`} style={{display: 'inline-block',position: 'relative', top: '-6px',}} width='30px' /></span></div>
              
               </div> 
            <div> BYO alcohol, as limited drinks will be provided</div>
            

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
