import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function TestServer() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>Server Test</h2>
      <p>{message}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Personal Website</h1>

        <section>
          <h2>About Me</h2>
          <p>Hi, I'm Akhil! I'm a software developer passionate about building web applications and exploring new technologies.</p>
          <p>
            Feel free to connect with me:
            <ul>
              <li>
                <a href="https://github.com/akhilpampana" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pampana-akhil/" target="_blank" rel="noopener noreferrer">
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

        <TestServer />

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