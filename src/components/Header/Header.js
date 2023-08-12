import React, { useState } from 'react';
import './Header.css';
import {useSelector} from 'react-redux'
import exportSVG from '../../helpers/exportSVG'


const Header = () => {
  const state = useSelector(state=>state)
  const [visible, setVisible] = useState(false);
  const selectDownload = (opcion)=> {
    setVisible(!visible);
    exportSVG(state, opcion);
  }

  return <header className="App-header">
    <a href="/"><h1>Mustachio</h1></a>
    <div onClick={()=>setVisible(!visible)} className={`download-button ${visible?'visible':''}`}>    
    <svg className="download-arrow" width="28" height="51" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3154 0H12.8154V46.2411L1.75 35L0 36.7778L14 51L28 36.7778L26.25 35L15.3154 46.1082V0Z" fill="black"/></svg>  
      <span className="download-text">Download</span>
      <ul className="download-list">
        <li onClick={()=>selectDownload('JPG')}>JPG</li>
        <li onClick={()=>selectDownload('PNG')}>PNG</li>
        <li onClick={()=>selectDownload('SVG')}>SVG</li>
      </ul>
    </div>
  </header>
}

export default Header;
