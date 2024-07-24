// src/actions/vehicleActions.js
export const fetchVehicles = () => async (dispatch) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch('https://eldapipoc.infotracktelematics.com:5006/fms/v2/eld/driver/eldVehicles', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "vehicleId": 0,
          "driverId": 0
        })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${errorText}`);
      }
  
      const responseData = await response.json();
      dispatch({ type: 'FETCH_VEHICLES_SUCCESS', payload: responseData.data.data || [] });
    } catch (error) {
      console.error('Error:', error);
      dispatch({ type: 'FETCH_VEHICLES_FAILURE', payload: error.message });
    }
  };
  