import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api');
      if (!response.ok) {
        // If the server responds with a status outside the 2xx range
        throw new Error(`Server error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.message);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Fetch data once on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + Node.js Full-Stack App</h1>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && <p>{data}</p>}

        <button onClick={fetchData} disabled={loading}>
          Refresh Data
        </button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;