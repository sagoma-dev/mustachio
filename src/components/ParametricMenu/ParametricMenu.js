import React, {useState} from 'react';
import './ParametricMenu.css';
import Dropdown from '../Dropdown/Dropdown';
import ColorSelector from '../ColorSelector/ColorSelector';
import SVGsList from '../SVGsList/SVGsList';
import {useSelector, useDispatch} from 'react-redux'


const ParametricMenu = ({setSectionSelected}) => {
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  const [option, setOption] = useState({section:'background', subSection:''});
  const optiosMenu = Object.entries(state).map(x=>x[0])

  const changeColor = (newColor) => dispatch({
    type: `SET_COLOR_${(!state[option.section].subsectionSelected?option.section : state[option.section].subsectionSelected.split(' ').join('_')).toUpperCase()}`,
    payload: newColor
  })

  const changeTypeSelected = (newType) =>{
    dispatch({
      type: `SET_TYPE_${(!state[option.section].subsectionSelected?option.section : state[option.section].subsectionSelected.split(' ').join('_')).toUpperCase()}`,
      payload: newType
    })
  }

  const changeSubsectionsSelected = (newSubsection) =>{
    setOption({...option, subSection: newSubsection})
    dispatch({type: `SET_SUBSECTION_SELECTED_${option.section.toUpperCase()}`, payload: newSubsection})
  }

  return (
    <div className="parametric-container">
      <div className="parametric-menu">
        <Dropdown
          optiosMenu={optiosMenu}
          option={option}
          setOption={setOption}
          setSectionSelected={setSectionSelected}
        />
        <ColorSelector 
          colorSelected={!option.subSection?state[option.section].color:state[option.section][`${option.subSection}Color`]}
          changeColor={changeColor}
          colors = {state.background.paletteSelected}/>
        {option.section!=='background' && <SVGsList feature={state[option.section]} changeTypeSelected={changeTypeSelected} changeSubsectionsSelected={changeSubsectionsSelected} />}
      </div>
      <p className="legal">This is a project coded by @samuel_mad, @reversotenebros, <a href="https://github.com/superalex" target="_blank">superalex</a> and designed by <a href="https://www.instagram.com/estdubois/?hl=es">Ester Latorre</a> made during the piweek</p>
    </div>
  )
}

export default ParametricMenu;
