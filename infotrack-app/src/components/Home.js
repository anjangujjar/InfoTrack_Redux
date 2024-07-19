// HomePage.js
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const location = useLocation();
  const { data, error } = location.state?.loginResponse || {};

  useEffect(() => {
    if (data && data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
    }
  }, [data]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No login response available.</div>;
  }

  if (!data.user) {
    return <div>No user data available.</div>;
  }

  const renderUserData = () => {
    const rows = [];
    for (const key in data.user) {
      if (Object.hasOwnProperty.call(data.user, key)) {
        rows.push(
          <tr key={key}>
            <td>{key}</td>
            <td>{data.user[key]}</td>
          </tr>
        );
      }
    }
    return rows;
  };

  return (
    <div className="homepage-container">
      <h2>Home Page</h2>
      <h3>User Data</h3>
      <table>
        <tbody>
          {renderUserData()}
        </tbody>
      </table>
      <Link to="/page">
        <button>Next Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
