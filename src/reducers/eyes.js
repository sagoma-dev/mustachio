
const initialState = {
  id: 'eyes',
  position: {x:-108,y:155},
  scale: 1,
  subsections: ['Eyelid','White','Iris','Pupil','Eyelashes'],
  subsectionSelected:'Eyelid',
  nTypesPupil: 2,
  nTypesEyelid: 12,
  nTypesWhite: 16,
  nTypesIris: 3,
  nTypesEyelashes: 12,
  pupilColor: '',
  eyelidColor: '',
  whiteColor: '',
  irisColor: '',
  eyelashesColor: '',
  pupilType: '',
  eyelidType: '',
  whiteType: '',
  irisType: '',
  eyelashesType: '',
  eyelashesWidth: 3,
  rotate: 0,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EYES':
      return {...state, ...action.payload};
    case 'SET_SHAPE_EYES':
      return {...state, shape: action.payload};
    case 'SET_POSITION_EYES':
      return {...state, position: action.payload};
    case 'SET_ROTATE_EYES':
      return {...state, rotate: action.payload};
    case 'SET_SCALE_EYES':
      return {...state, scale: action.payload};
    case 'SET_COLOR_PUPIL':
      return {...state, pupilColor: action.payload}; 
    case 'SET_TYPE_PUPIL':
      return {...state, pupilType: action.payload};
    case 'SET_COLOR_EYELASHES':
      return {...state, eyelashesColor: action.payload}; 
    case 'SET_TYPE_EYELASHES':
      return {...state, eyelashesType: action.payload};
    case 'SET_COLOR_EYELID':
      return {...state, eyelidColor: action.payload}; 
    case 'SET_TYPE_EYELID':
      return {...state, eyelidType: action.payload};
    case 'SET_COLOR_WHITE':
      return {...state, whiteColor: action.payload}
    case 'SET_TYPE_WHITE':
      return {...state, whiteType: action.payload};
      case 'SET_COLOR_IRIS':
        return {...state, irisColor: action.payload}
      case 'SET_TYPE_IRIS':
        return {...state, irisType: action.payload};
    case 'SET_SUBSECTION_SELECTED_EYES':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}