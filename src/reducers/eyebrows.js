
const initialState = {
  id: 'eyebrows',
  color:'',
  nTypes: 30,
  type:'',
  position: {x:-92, y:140},
  scale: 1,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EYEBROWS':
      return {...state, ...action.payload};
    case 'SET_COLOR_EYEBROWS':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_EYEBROWS':
      return {...state, type: action.payload};
    case 'SET_POSITION_EYEBROWS':
      return {...state, position: action.payload};
    case 'SET_SCALE_EYEBROWS':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}