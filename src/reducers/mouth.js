
const initialState = {
  id: 'mouth',
  position: {x:-142,y:231},
  scale: 1,
  subsections: ['Lower Lip','Upper Lip','Smile'],
  subsectionSelected:'Upper Lip',
  nTypesUpperLip: 27,
  nTypesSmile: 11,
  nTypesLowerLip: 18,
  upperlipColor:'',
  upperlipType:'',
  smileColor:'',
  smileWidth: 3,
  smileType:'',
  lowerlipColor:'',
  lowerlipType:'',
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOUTH':
      return {...state, ...action.payload};
    case 'SET_SHAPE_MOUTH':
      return {...state, shape: action.payload};
    case 'SET_POSITION_MOUTH':
      var position = action.payload;
      position.x = state.position.x;
      return {...state, position};
    case 'SET_ROTATE_MOUTH':
      return {...state, rotate: action.payload};
    case 'SET_SCALE_MOUTH':
      return {...state, scale: action.payload};
    case 'SET_COLOR_UPPER_LIP':
      return {...state, upperlipColor: action.payload}; 
    case 'SET_TYPE_UPPER_LIP':
      return {...state, upperlipType: action.payload};
    case 'SET_COLOR_SMILE':
      return {...state, smileColor: action.payload}; 
    case 'SET_TYPE_SMILE':
      return {...state, smileType: action.payload};
    case 'SET_COLOR_LOWER_LIP':
      return {...state, lowerlipColor: action.payload}; 
    case 'SET_TYPE_LOWER_LIP':
      return {...state, lowerlipType: action.payload};
    case 'SET_SUBSECTION_SELECTED_MOUTH':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}