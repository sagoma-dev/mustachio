
const initialState = {
  id: 'facialhair',
  position: {x:88.5, y:187.5},
  rotate: 0,
  scale: 1,
  subsections: ['Mustachio','Beard'],
  subsectionSelected:'Mustachio',
  nTypesMustachio: 12,
  mustachioColor:'',
  mustachioWidth:3,
  mustachioType:'',
  nTypesBeard: 15,
  beardColor:'',
  beardWidth: 3,
  beardType:'',
  fill: "#b4bedb"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FACIALHAIR':
      return {...state, ...action.payload};
    case 'SET_POSITION_FACIALHAIR':
      var position = action.payload;
      position.x = state.position.x;
      return {...state, position};
    case 'SET_ROTATE_FACIALHAIR':
      return {...state, rotate: action.payload};
    case 'SET_SCALE_FACIALHAIR':
      return {...state, scale: action.payload};
    case 'SET_COLOR_MUSTACHIO':
      return {...state, mustachioColor: action.payload};
    case 'SET_TYPE_MUSTACHIO':
      return {...state, mustachioType: action.payload};
    case 'SET_COLOR_BEARD':
      return {...state, beardColor: action.payload}; 
    case 'SET_TYPE_BEARD':
      return {...state, beardType: action.payload};
    case 'SET_SUBSECTION_SELECTED_FACIALHAIR':
      return {...state, subsectionSelected: action.payload};
    default:
      return state;
  }
}