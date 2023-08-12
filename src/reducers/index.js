import {combineReducers} from 'redux'
import background from './background';
import ears from './ears';
import eyebrows from './eyebrows';
import eyes from './eyes';
import fringe from './fringe';
import glasses from './glasses';
import hairstyle from './hairstyle';
import jawline from './jawline';
import mouth from './mouth';
import mustachio from './mustachio';
import facialhair from './facialhair';
import nose from './nose';
import wrinkles from './wrinkles'

export default combineReducers({
  background,
  ears,
  eyebrows,
  eyes,
  fringe,
  glasses,
  hairstyle,
  jawline,
  mouth,
  facialhair,
  nose,
  wrinkles
});