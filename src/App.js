import  React, { useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import palms from './pink-background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const parsedDeadline = React.useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = React.useState(parsedDeadline - Date.now());
  const Timer = ({ deadline = new Date().toString() }) => {
    
  
    useEffect(() => {
      const interval = setInterval(
        () => setTime(parsedDeadline - Date.now()),
        1000
      );
  
      return () => clearInterval(interval);
    }, [parsedDeadline]);
  }


  //https://codepen.io/loucyx/pen/oNqGRzr
  
  return (
    <div className="App">
      <div className='container-fluid' style={{backgroundImage: `url(${palms})`,  backgroundRepeat: 'no-repeat',  backgroundSize: 'cover'}}>
        <div className="App-header">
          <div className='aloha'>Aloha!</div>
          <div className='bodytitle'>you're inivited to attend</div>
          <header className='title'>Lisa's Last Luao</header>
          <div className='body details'>
            <div>2:00PM Saturday the 2nd of December</div>
              <div className='address' style={{fontStyle: 'normal'}}><a target="_blank" href='https://maps.app.goo.gl/1dxh8P9i56nQAYHb9' rel="noreferrer noopener">
                <FontAwesomeIcon icon={faLocationDot} /> 9 Centaur Street, Kallaroo WA 6025</a>
              </div>
            
            <div>in line with the honeymoon destination, come dressed in the theme:
               <div className='theme'>'Tropical Hawaiian'</div></div>
            <div> BYO <FontAwesomeIcon icon={faMartiniGlass} /> as limited drinks will be provided</div>
            <div></div>

            <> <Timer deadline="December, 2, 2023" />
           
    <div className="timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="box">
            <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
            <span className="text">{label}</span>
          </div>
        </div>
      ))}
    </div>

            </>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
