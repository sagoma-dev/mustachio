import React, { useState } from 'react';
import './Dropdown.css';
import { useSelector } from 'react-redux';

const Dropdown = ({optiosMenu, option, setOption, setSectionSelected}) => {

  const [visible, setVisible] = useState(false);
  const state = useSelector(state => state);
  const selectOption = (opcion)=> {
    if(state[opcion].subsections){
      setOption({...option, section:opcion, subSection: state.subsectionSelected});
      setSectionSelected(opcion)
    } else {
      setOption({...option, section:opcion});
      setSectionSelected(opcion)
    }

    setVisible(!visible);
  }

  return <div className={`dropdown-container ${visible?'visible':''}`}>
    <h2 onClick={()=>setVisible(!visible)}>{option.section}
      <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 31 16"><defs/><path fill="#000" d="M14.6421 12.6066L27.0165 0.232239L28.7843 1.99999L14.6421 16.1421L0.5 2.00001L2.26777 0.232239L14.6421 12.6066Z"/></svg>
    </h2>
    <ul className='options-list'>
      {
        optiosMenu.map((x, index)=><li key={index} className={`option ${x===option.section?'selected': ''}`} onClick={()=>selectOption(x)}>{x}</li>)
      }
    </ul>
  </div>
}

export default Dropdown;
