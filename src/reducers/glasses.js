const initialState = {
  id: 'glasses',
  color:'',
  nTypes: 6,
  type:'',
  position: {x:-79, y:145},
  scale: 1,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GLASSES':
      return {...state, ...action.payload};
    case 'SET_COLOR_GLASSES':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_GLASSES':
      return {...state, type: action.payload};
    case 'SET_POSITION_GLASSES':
      return {...state, position: action.payload};
    case 'SET_SCALE_GLASSES':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}