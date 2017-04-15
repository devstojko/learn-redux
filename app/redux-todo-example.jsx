var redux = require('redux');

console.log('Starting redux example');


var stateDefault = {
  name: 'Default',
  hobbies: [],
  guns: []
};

var nextHobbyId = 1;
var nextGunId = 1;

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymus'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };

    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };

  case 'REMOVE_HOBBY':
    return {
      ...state,
      hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
    };

  case 'ADD_AIRSOFT_GUN':
    return {
      ...state,
      guns: [
        ...state.guns,
        {
          id: nextGunId++,
          name: action.name,
          fire: action.fire
        }
      ]
    };

    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var currentState = store.getState();

// Subscribe to changes
store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
});
// unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Nemanja'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Airsoft'
});

store.dispatch({
  type: 'ADD_AIRSOFT_GUN',
  name: 'M4',
  fire: 'semi-auto'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Nikola'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Learning REACT'
});

store.dispatch({
  type: 'ADD_AIRSOFT_GUN',
  name: 'AK-47',
  fire: 'semi-auto'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Playing games'
});
