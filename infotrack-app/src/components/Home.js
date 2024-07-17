// HomePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const location = useLocation();
  const { loginResponse } = location.state || {};

  if (!loginResponse) {
    return <div>No login response available.</div>;
  }

  const renderLoginResponse = () => {
    const rows = [];
    for (const key in loginResponse) {
      if (typeof loginResponse[key] === 'object') {
        rows.push(
          <tr key={key}>
            <th colSpan="2">{key}</th>
          </tr>
        );
        for (const subKey in loginResponse[key]) {
          rows.push(
            <tr key={`${key}-${subKey}`}>
              <td>{subKey}</td>
              <td>
                <pre>{JSON.stringify(loginResponse[key][subKey], null, 2)}</pre>
              </td>
            </tr>
          );
        }
      } else {
        rows.push(
          <tr key={key}>
            <td>{key}</td>
            <td>{loginResponse[key]}</td>
          </tr>
        );
      }
    }
    return rows;
  };

  return (
    <div className="homepage-container">
      <h2>Home Page</h2>
      <h3>Login Response</h3>
      <table>
        <tbody>
          {renderLoginResponse()}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
