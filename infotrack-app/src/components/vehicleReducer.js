// src/reducers/vehicleReducer.js
const initialState = {
    data: [], // or null if you prefer
    // Add other initial state properties if needed
  };
  
  const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_VEHICLES_SUCCESS':
        return {
          ...state,
          data: action.payload,
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default vehicleReducer;
  