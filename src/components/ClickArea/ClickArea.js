import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './ClickArea.css';

const ClickArea = ({sectionSelected})=>{

  const dispatch = useDispatch();
  const [mousePress, setMousePress] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})
  const [initialPosition, setInitialPosition] = useState({x:0,y:0,r:0, s:1})
  const stateValue = useSelector((state => state[sectionSelected]))


  const onMouseDownHandler = (e) => {
    setMousePress(true)
    console.log("Hago click", sectionSelected)
    setPosition({x:e.clientX, y:e.clientY})
    setInitialPosition({
      x:stateValue.position.x, 
      y:stateValue.position.y, 
      r:stateValue.rotate, 
      s:stateValue.scale})
  }
  const onMouseUpHandler = (e) => {
    setMousePress(false)
  }
  const onMouseMoveHandler = (e) => {
    if(e.altKey && !e.ctrlKey){
      dispatch({
        type:`SET_SCALE_${sectionSelected.toUpperCase()}`,
        payload: initialPosition.s +((e.clientX-position.x)/1000) 
      });
    } else if(!e.altKey && e.ctrlKey){
      dispatch({
        type:`SET_ROTATE_${sectionSelected.toUpperCase()}`,
        payload: initialPosition.s +((e.clientX-position.x)/5) 
      });
    }else {
      dispatch({
        type:`SET_POSITION_${sectionSelected.toUpperCase()}`,
        payload: {
          x: initialPosition.x + Math.floor((e.clientX-position.x)/3),
          y: initialPosition.y + Math.floor((e.clientY-position.y)/3)
        }  
      })
    }
  }

  return (
  <div
    className="clickArea"
    onMouseDown={onMouseDownHandler} 
    onMouseUp={onMouseUpHandler} 
    onMouseMove={(e)=>{mousePress && onMouseMoveHandler(e)}}
    onMouseLeave={()=>setMousePress(false)}    
  >
  </div>)

}
export default ClickArea;
