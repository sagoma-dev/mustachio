import React, {useEffect, useState} from 'react';
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';
import AllSVGs from './components/AllSVGs/AllSVGs.js';
import Download from './components/Download/Download.js'
import {useSelector, useDispatch} from 'react-redux'
import {palettes, randomPalette} from './reducers/background.js'

function App() {
  const [sectionSelected, setSectionSelected] = useState('background')
  const [randomTimer, setRandomTimer] = useState(null);
  const state = useSelector(state=>state)
  const dispatch = useDispatch()
  const randomize = (param, round = 'normal') =>{
    if(round === 'nomal') {
      return Math.round(Math.random()*param);
    } else if(round==='ceil') {
      return Math.ceil(Math.random()*param);
    } else {
      return Math.floor(Math.random()*param);
    }
  }
  const randomColors = () => {
    const palette = randomPalette(palettes)
    dispatch({
      type: 'SET_PALETTE',
      payload: palette
    });
    dispatch({
      type: 'SET_COLOR_BACKGROUND',
      payload: palette[0]
    });

    dispatch({
      type: 'SET_HAIRSTYLE', 
      payload: {
        color: palette[5],
        type: randomize(state.hairstyle.nTypes, 'ceil')
      }
    });
    dispatch({
      type: 'SET_EARS', 
      payload: {
        color: palette[2],
        type: randomize(state.ears.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_FRINGE', 
      payload: {
        color: palette[1],
        type: randomize(state.fringe.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_JAWLINE', 
      payload: {
        color: palette[1],
        type: randomize(state.jawline.nTypes, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_MOUTH', 
      payload: {
        upperlipColor:palette[4],
        upperlipType: randomize(state.mouth.nTypesUpperLip, 'ceil'),
        smileColor: palette[4], 
        smileType: randomize(state.mouth.nTypesSmile, 'ceil'),
        lowerlipColor: palette[3],
        lowerlipType: randomize(state.mouth.nTypesLowerLip, 'ceil')
      }
    });

    dispatch({
      type: 'SET_WRINKLES', 
      payload: {
        wrinklesforeheadType: !!Math.round(Math.random()-0.4) ? randomize(state.wrinkles.nTypesWrinklesForehead, 'ceil') : '',
        wrinklesforeheadColor: palette[2],
        wrinklescheekbonesType: !!Math.round(Math.random()-0.3) ? randomize(state.wrinkles.nTypesWrinklesCheekbones, 'ceil') : '',
        wrinklescheekbonesColor: palette[2],
        wrinklesmouthType: !!Math.round(Math.random()-0.4) ? randomize(state.wrinkles.nTypesWrinklesMouth, 'ceil') : '',
        wrinklesmouthColor: palette[2],
        wrinkleschinType: !!Math.round(Math.random()-0.4) ? randomize(state.wrinkles.nTypesWrinklesChin, 'ceil') : '',
        wrinkleschinColor: palette[2],
        wrinkleseyesType: !!Math.round(Math.random()-0.3) ? randomize(state.wrinkles.nTypesWrinklesEyes, 'ceil') : '',
        wrinkleseyesColor: palette[2]
      }
    });

    dispatch({
      type: 'SET_FACIALHAIR', 
      payload: {
        mustachioColor: palette[5],
        mustachioType:  !!Math.round(Math.random()-0.4) ? randomize(state.facialhair.nTypesMustachio, 'ceil') : '',
        beardColor: palette[5],
        beardType:  !!Math.round(Math.random()-0.5) ? randomize(state.facialhair.nTypesBeard, 'ceil') : '',
      }
    });

    dispatch({
      type: 'SET_NOSE', 
      payload: {
        nostrilsColor: palette[3],
        nostrilsType: randomize(state.nose.nTypesNostrils, 'ceil'),
        septumColor: palette[3],
        septumType: randomize(state.nose.nTypesSeptum, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_EYES', 
      payload: {
        pupilColor: '#000000',
        eyelidColor: palette[3],
        irisColor: palette[0],
        eyelashesColor: palette[4],
        pupilType: randomize(state.eyes.nTypesPupil, 'ceil'),
        eyelidType: randomize(state.eyes.nTypesEyelid, 'ceil'),
        whiteType: randomize(state.eyes.nTypesWhite, 'ceil'),
        irisType: randomize(state.eyes.nTypesIris, 'ceil'),
        eyelashesType: randomize(state.eyes.nTypesEyelashes, 'ceil'),
      }
    });

    dispatch({
      type: 'SET_EYEBROWS', 
      payload: {
        color: palette[4],
        type: randomize(state.eyebrows.nTypes, 'ceil')
      }
    });

    dispatch({
      type: 'SET_GLASSES', 
      payload: {
        color: palette[5],
        type:  !!Math.round(Math.random()-0.2) ? randomize(state.glasses.nTypes, 'ceil') : ''
      }
    });
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      randomColors()
    },150);
    setRandomTimer(timer);
    clearInterval();
  },[])

  return (
    <div className="App" onClick={()=>clearInterval(randomTimer)}>
      <AllSVGs />
      {
        (false == true) &&
          <Download />
      }
      <div className="App-body">
        <Canvas sectionSelected={sectionSelected} setSectionSelected={setSectionSelected}/>
        <ParametricMenu setSectionSelected={setSectionSelected}/>
      </div>
    </div>
  );
}

export default App;
