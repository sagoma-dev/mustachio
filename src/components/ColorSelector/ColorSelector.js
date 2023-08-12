import React, {useState} from 'react';
import './ColorSelector.css';

const ColorSelector = ({colorSelected, changeColor, colors}) => {
  // const [colorSelected, setColorSelected] = useState('')
  const [colorPickerValue, setColorPickerValue] = useState('')
  const changeColorSelected = (newColor) => {
    changeColor(newColor);
  }
  const onChangeHandler = (e)=>{
    setColorPickerValue(e.target.value);
    changeColor(e.target.value);
  }
  return (
    <ul className='color-selector-container'>
      {
        colorSelected && !colors.some(x=> x === colorSelected)
        ? <label htmlFor="picker" className="color-item" style={{backgroundColor: colorSelected}}></label>
        : <label htmlFor="picker" className="color-item default"></label>
      }
      <input id="picker" type="color" value={colorPickerValue} onChange={(e)=>onChangeHandler(e)}></input>
      <span className="separator"></span>
      {
        colors.map((x, index) => <li key={index} className={`color-item ${colorSelected===x?'selected':''}`} style={{backgroundColor: x}} onClick={()=>changeColorSelected(x)}></li>)
      }
    </ul>
  )
}

export default ColorSelector;
