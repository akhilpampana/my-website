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
        <h1>Welcome to My Personal Website</h1>

        {/* Personal Information Section */}
        <section>
          <h2>About Me</h2>
          <p>Hi, I'm Akhil! I'm a software developer passionate about building web applications and exploring new technologies.</p>
          <p>
            Feel free to connect with me:
            <ul>
              <li>
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </li>
            </ul>
          </p>
        </section>

        {/* Existing Functionality */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && <p>{data}</p>}

        <button onClick={fetchData} disabled={loading}>
          Refresh Data
        </button>
      </header>
    </div>
  );
}

export default App;