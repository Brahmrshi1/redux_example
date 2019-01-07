import {
    combineReducers,
  createStore,
} from 'redux';


// Action We Do plce here 
export const activateDude = dude => ({
    type: 'ACTIVATE_Dude',
    dude,
  });

  export const closeDude = () => ({
    type: 'CLOSE_Dude',
  });
  
// Reducer Declaration place here
export const dude = (state = {}, action) => {
    switch (action.type) {
      case 'ACTIVATE_Dude':
        return action.dude;
      case 'CLOSE_Dude':
        return {};
      default:
        return state;
    }
  };
  
export const reducers = combineReducers({
    dude,
  });
  
  // Store Declaration place here
  export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();