// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import vehicleReducer from './components/vehicleReducer';
import authReducer from './components/authReducer'; // Ensure this path is correct

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  auth: authReducer, // Include authReducer if you created it
  // Add more reducers here if needed
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
