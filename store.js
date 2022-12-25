const {configureStore} = require('@reduxjs/toolkit'); 
const {reducer} = require('./ReduxReducer/users');

 const store = configureStore({
    reducer: {
        users:reducer
    },
  });

module.exports = store;