
export const palettes = [
  ['#5C899C', '#7F4841', '#754039', '#64322B', '#000000', '#301A17'],
  ['#7FA28C', '#9C5C4C', '#955443', '#833C33', '#67191C', '#8C222C'],
  ['#FF7E7E', '#A85A51', '#A15148', '#68342F', '#321B18', '#000000'],
  ['#98ABDE', '#BF776F', '#B86B63', '#AB554C', '#863C34', '#A5483E'],
  ['#C63E40', '#EC8677', '#E27C6D', '#D25D60', '#A63133', '#FBCBCB'],
  ['#476A6F', '#E4998D', '#E58D80', '#D36A5A', '#B45625', '#FFBC8C'],
  ['#F1C881', '#F49F8D', '#F59783', '#F18573', '#CF7462', '#647959'],
  ['#4A3E85', '#F99EA4', '#F3969C', '#EC8094', '#D16480', '#EA6689'],
  ['#FF8080', '#FAC9B8', '#F5BFB0', '#E7A197', '#CB6565', '#2D728F'],
  ['#738576', '#FFCFBA', '#FFBC9F', '#F19882', '#CB7B68', '#FFA06B'],
  ['#8CB9BE', '#FCCFC5', '#FCC6BB', '#FCA390', '#D57D75', '#9F5050'],
  ['#5372A0', '#FFC7B4', '#FFBCA6', '#F59A7F', '#EE8569', '#EC9192'],
  ['#B9B9B9', '#A3A3A3', '#989898', '#6F6F6F', '#383838', '#000000']
];
export const randomPalette = (palettes)=>palettes[Math.round(Math.random()*(palettes.length-1))]

const initialState = {
  id:"background",
  color: '',
  paletteSelected: randomPalette(palettes)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR_BACKGROUND':
      return {...state, color: action.payload};
    case 'SET_PALETTE':
        return {...state, paletteSelected: action.payload};
    default:
      return state;
  }
}