import { useEffect, useRef,useState } from 'react'
import './akinator.css'
import Switch from '@mui/material/Switch';
import { ping_pong} from './AkinatorPong'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

export default function Akinator()
{

  const [musicOn, setMusicOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [pause, setPause] = useState(true);
  const flag = useRef(false)
  const canvas = useRef(null)
  const handleTogglePause = () => {
    setPause(!pause);
    // Add any other logic you want to perform on pause/play toggle
  };
  
  const [leftballs, setLeftBalls] = useState(['grey', 'grey', 'grey', 'grey', 'grey']);
  const [rightballs, setRightBalls] = useState(['grey', 'grey', 'grey', 'grey', 'grey']);

  
  useEffect(() => {
    if (canvas.current && flag.current === false)
    {
      ping_pong(canvas.current,(left:any) => {
        const updatedBallColors = leftballs.map((color, index) => (index < left ? 'purple' : 'gray'));
        setLeftBalls(updatedBallColors);
      },(right:any)=>{
          const updatedBallColors = rightballs.map((color, index) => (4 - index < right ? 'purple' : 'gray'));
          setRightBalls(updatedBallColors);
        })
      flag.current = true 
    }
  },  [leftballs,rightballs])


  return (
    
    <div >
  
    <div className= "vs">
        <img src="/src/assets/img/vs.png"/>
     
    </div>
  
    <div id="profile1"> 
          <img className='profile1Img' src='/src/assets/img/akinator.png'></img>
          <strong className='profile1id'>Akinator</strong>
          
          <div className="BallScore1">
          {leftballs.map((color, index) => (
            <div key={`ball1_${index}`} className={`pl1 ball_${index + 1}`} style={{ backgroundColor: color }}></div>
          ))}
        </div>
    </div>
    <div id="profile2">
          <img className='profile2Img' src='/src/assets/img/jenny.png'></img>
          <strong className='profile2id'>Gennie</strong>
          
          <div className="BallScore2">
          {rightballs.map((color, index) => (
            <div key={`ball2_${index}`} className={`pl2 ball_${index + 1}`} style={{ backgroundColor: color }}></div>
          ))}
          </div>
    </div>
    <div id = "setting" > 
          <strong >Settings </strong>
    </div>
    <div id = "box">
        <div className = 'music'>
          
          <strong> Music</strong>&nbsp;
          <Switch id= "music_switch"  defaultChecked  onChange={() => {setMusicOn(!musicOn)}} /> &nbsp;
            <span id='state' > {musicOn ? 'On' : 'Off'} </span>
        </div>
        <div className = 'sound'>
          <strong> Sound </strong> &nbsp;
          <Switch id= "sound_switch" defaultChecked  onChange={() => {setSoundOn(!soundOn)}} />&nbsp;
            <span id='state' > {soundOn ? 'On' : 'Off'} </span>
        </div>
      
    </div>
      <button className='buttonPause' onClick={handleTogglePause}>
        {pause ? <FaPlay /> : <FaPause />}
        <strong className ="Pause"> {!pause ? 'Pause' : 'Play'} </strong>
      </button>
      <button className='buttonReset'>
      <GrPowerReset/>
        <strong className ="reset"> Reset </strong>
      </button>

    <canvas ref={canvas} id = "canvas1"  height = "600" width = "1000" > </canvas>
      <div id="start">
        <button id="ButtonStart" className='ButtonStart'>
        <strong className='startplus'>Start</strong>
        <img className='Iconpaddles' src="/src/assets/img/IconPaddles.png"></img>
        </button>
      </div>
  
  </div>
   )
}