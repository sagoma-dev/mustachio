
const initialState = {
  id: 'fringe',
  color:'',
  nTypes: 27,
  type:'',
  position: 0,
  scale: 0,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FRINGE':
      return {...state, ...action.payload};
    case 'SET_COLOR_FRINGE':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_FRINGE':
      return {...state, type: action.payload};
    case 'SET_POSITION_FRINGE':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_FRINGE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}