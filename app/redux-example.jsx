var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/store.conf').configure();


var currentState = store.getState();

// Subscribe to changes
store.subscribe(() => {
  var state = store.getState();


  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View your location</a>`;
  }
});
// unsubscribe();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Nemanja'));

store.dispatch(actions.addHobby('Airsoft'));

store.dispatch(actions.addAirsoftGun('M4', 'semi-auto'));

store.dispatch(actions.removeHobby(1));

store.dispatch(actions.changeName('Nikola'));

store.dispatch(actions.addHobby('Football'));

store.dispatch(actions.addAirsoftGun('AWP', 'bolt-action'));

store.dispatch(actions.removeAirsoftGun(1));

store.dispatch(actions.addHobby('Playing pc games'));
