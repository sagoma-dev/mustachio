const initialState = {
  id: 'wrinkles',
  scale: 0,
  subsections: ['Wrinkles Forehead', 'Wrinkles Cheekbones', 'Wrinkles Mouth', 'Wrinkles Chin', 'Wrinkles Eyes'],
  subsectionSelected:'Wrinkles Forehead',
  
  nTypesWrinklesForehead: 3,
  wrinklesforeheadType:'',
  wrinklesforeheadColor:'',
  wrinklesforeheadWidth: 3,

  nTypesWrinklesCheekbones: 9,
  wrinklescheekbonesType:'',
  wrinklescheekbonesColor:'',
  wrinklescheekbonesWidth: 3,

  nTypesWrinklesMouth:12,
  wrinklesmouthType:'',
  wrinklesmouthColor:'',
  wrinklesmouthWidth: 3,

  nTypesWrinklesChin:8,
  wrinkleschinType:'',
  wrinkleschinColor:'',
  wrinkleschinWidth:3,

  nTypesWrinklesEyes:10,
  wrinkleseyesType:'',
  wrinkleseyesColor:'',
  wrinkleseyesWidth:3,

  wrinkleseyesPosition: {x:101, y:155},
  wrinklesforeheadPosition: {x:134, y:130},
  wrinklescheekbonesPosition: {x:92, y:180},
  wrinklesmouthPosition: {x:130, y:204},
  wrinkleschinPosition: {x:148, y:266},
  fill: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WRINKLES':
      return {...state, ...action.payload};
    case 'SET_POSITION_WRINKLES':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_WRINKLES':
      return {...state, scale: action.payload};
    case 'SET_COLOR_WRINKLES_FOREHEAD':
      return {...state, wrinklesforeheadColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_FOREHEAD':
      return {...state, wrinklesforeheadType: action.payload};
    case 'SET_COLOR_WRINKLES_CHEEKBONES':
      return {...state, wrinklescheekbonesColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_CHEEKBONES':
      return {...state, wrinklescheekbonesType: action.payload};
    case 'SET_COLOR_WRINKLES_MOUTH':
      return {...state, wrinklesmouthColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_MOUTH':
      return {...state, wrinklesmouthType: action.payload};
      case 'SET_COLOR_WRINKLES_CHIN':
      return {...state, wrinkleschinColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_CHIN':
      return {...state, wrinkleschinType: action.payload};
      case 'SET_COLOR_WRINKLES_EYES':
      return {...state, wrinkleseyesColor: action.payload}; 
    case 'SET_TYPE_WRINKLES_EYES':
      return {...state, wrinkleseyesType: action.payload};
    case 'SET_SUBSECTION_SELECTED_WRINKLES':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}
