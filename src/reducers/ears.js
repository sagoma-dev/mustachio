
const initialState = {
  id: 'ears',
  color:'',
  nTypes: 4,
  type:'',
  position: {x:-70, y:155},
  scale: 1,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EARS':
      return {...state, ...action.payload};
    case 'SET_COLOR_EARS':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_EARS':
      return {...state, type: action.payload};
    case 'SET_POSITION_EARS':
      return {...state, position: action.payload};
    case 'SET_SCALE_EARS':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}