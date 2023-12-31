import { useEffect, useRef,useState } from 'react'
import './akinator.css'
import Switch from '@mui/material/Switch';
import { ping_pong} from './AkinatorPong'

export default function Akinator()
{

  const [musicOn, setMusicOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const flag = useRef(false)
  const canvas = useRef(null)
  
  const [leftballs, setLeftBalls] = useState(['grey', 'grey', 'grey', 'grey', 'grey']);
  const [rightballs, setRightBalls] = useState(['grey', 'grey', 'grey', 'grey', 'grey']);

  
  useEffect(() => {
    if (canvas.current && flag.current === false)
    {
      ping_pong(canvas.current,(left:any) => {
        const updatedBallColors = leftballs.map((_, index) => (index < left ? 'purple' : 'gray'));
        setLeftBalls(updatedBallColors);
      },(right:any)=>{
          const updatedBallColors = rightballs.map((_, index) => (4 - index < right ? 'purple' : 'gray'));
          setRightBalls(updatedBallColors);
        })
      flag.current = true 
    }
  },  [leftballs,rightballs])


  return (
    
    <div >
  
    <div className= "vs">
        <img src="vs.png"/>
     
    </div>
  
    <div id="profile1"> 
          <img className='profile1Img' src="akinat.png"></img>
          <strong className='profile1id'>Akinator</strong>
          
          <div className="BallScore1">
          {leftballs.map((color, index) => (
            <div key={`ball1_${index}`} className={`pl1 ball_${index + 1}`} style={{ backgroundColor: color }}></div>
          ))}
        </div>
    </div>
    <div id="profile2">
          <img className='profile2Img' src='jenny.png'></img>
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

    <canvas ref={canvas} id = "canvas1"  height = "600" width = "1000" > </canvas>
      <div id="start">
        <button id="ButtonStart" className='ButtonStart'>
        <strong className='startplus'> Start </strong>
        <img className='Iconpaddles' src="IconPaddles.png"></img>
        </button>
        
      </div>
  
  </div>
   )
}