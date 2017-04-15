var axios = require('axios');

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    // name: name -> same as below es6
    name
  }
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

export var addAirsoftGun = (name, fire) => {
  return {
    type: 'ADD_AIRSOFT_GUN',
    name,
    fire
  }
};

export var removeAirsoftGun = (id) => {
  return {
    type: 'REMOVE_AIRSOFT_GUN',
    id
  }
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function (res) {
      var location = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + location));
    });
  };
};

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};
