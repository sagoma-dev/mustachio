
const initialState = {
  id: 'mustachio',
  color:'',
  nTypes: 12,
  type:'',
  position: {x:-118, y:214},
  scale: 1,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MUSTACHIO':
      return {...state, ...action.payload};
    case 'SET_COLOR_MUSTACHIO':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_MUSTACHIO':
      return {...state, type: action.payload};
    case 'SET_POSITION_MUSTACHIO':
      return {...state, position: action.payload};
    case 'SET_SCALE_MUSTACHIO':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}