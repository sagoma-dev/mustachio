
const initialState = {
  id: 'hairstyle',
  color:'',
  nTypes: 42,
  type:'',
  position: 0,
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HAIRSTYLE':
      return {...state, ...action.payload};
    case 'SET_COLOR_HAIRSTYLE':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_HAIRSTYLE':
      return {...state, type: action.payload};
    case 'SET_POSITION_HAIRSTYLE':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_HAIRSTYLE':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}