
const initialState = {
  id: 'nose',
  position: {x:155, y:169},
  rotate: 0,
  scale: 1,
  subsections: ['Nostrils','Septum'],
  subsectionSelected:'Nostrils',
  nTypesNostrils: 24,
  nostrilsColor:'',
  nostrilsWidth: 3,
  nostrilsType:'',
  nTypesSeptum: 13,
  septumColor:'',
  septumWidth: 3,
  septumType:'',
  fill: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOSE':
      return {...state, ...action.payload};
    case 'SET_POSITION_NOSE':
      var position = action.payload;
      position.x = state.position.x;
      return {...state, position};
    case 'SET_ROTATE_NOSE':
      return {...state, rotate: action.payload};
    case 'SET_SCALE_NOSE':
      return {...state, scale: action.payload};
    case 'SET_COLOR_NOSTRILS':
      return {...state, nostrilsColor: action.payload}; 
    case 'SET_TYPE_NOSTRILS':
      return {...state, nostrilsType: action.payload};
    case 'SET_COLOR_SEPTUM':
      return {...state, septumColor: action.payload}; 
    case 'SET_TYPE_SEPTUM':
      return {...state, septumType: action.payload};
    case 'SET_SUBSECTION_SELECTED_NOSE':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}