
const initialState = {
  id: 'jawline',
  color:'',
  nTypes: 36,
  type:'',
  position: 0,
  scale: 0,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JAWLINE':
      return {...state, ...action.payload};
    case 'SET_COLOR_JAWLINE':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_JAWLINE':
      return {...state, type: action.payload};
    case 'SET_POSITION_JAWLINE':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_JAWLINE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}