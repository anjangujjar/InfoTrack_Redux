import React, { useEffect, useState } from 'react';
import Card from './Card'; // Import your Card component
import './Card.css';

const Page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState({ property: 'VehicleId', order: 'asc' }); // Default sort

  useEffect(() => {
    const fetchEldVehicles = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        console.log('Using access token:', token);

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
        console.log('Fetched data:', responseData);
        setData(responseData.data.data || []); // Ensure data is set to an array

      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    };

    fetchEldVehicles();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter(vehicle =>
    Object.values(vehicle).some(value =>
      value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    let comparison = 0;

    const aValue = a[sortBy.property];
    const bValue = b[sortBy.property];

    // Convert values to numbers if they are numeric
    const aNumeric = !isNaN(Number(aValue)) ? Number(aValue) : aValue;
    const bNumeric = !isNaN(Number(bValue)) ? Number(bValue) : bValue;

    if (aNumeric > bNumeric) {
      comparison = 1;
    } else if (aNumeric < bNumeric) {
      comparison = -1;
    }

    return sortBy.order === 'asc' ? comparison : -comparison;
  });

  return (
    <div>
      <header className="header">
        <h2>Eld Vehicles Data</h2>
      </header>
      <div className="input-container">
        <div className="input-box">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by any field"
          />
        </div>
        <div className="sort-box">
          <label>
            Sort by:
            <select
              value={sortBy.property}
              onChange={(e) => setSortBy({ ...sortBy, property: e.target.value })}
            >
              <option value="VehicleId">Vehicle Id</option>
              <option value="DriverId">Driver Id</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Order:
            <select
              value={sortBy.order}
              onChange={(e) => setSortBy({ ...sortBy, order: e.target.value })}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>
      <div className="card-container">
        {sortedData.map(vehicle => (
          <Card key={vehicle.VehicleId} vehicle={vehicle} searchQuery={searchQuery} />
        ))}
      </div>
    </div>
  );
};

export default Page;
