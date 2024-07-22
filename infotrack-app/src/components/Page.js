// src/components/Page.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card'; // Import your Card component
import './Card.css';
import { fetchVehicles } from '../actions/vehicleActions'; // Import your action

const Page = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.vehicles);

  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState({ property: 'VehicleId', order: 'asc' }); // Default sort

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter(vehicle => {
    return Object.values(vehicle).some(value => {
      return value !== null && value !== undefined && value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  const sortedData = filteredData.sort((a, b) => {
    let comparison = 0;

    const aValue = a[sortBy.property];
    const bValue = b[sortBy.property];

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
        <h2>ELD Vehicles Data</h2>
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
