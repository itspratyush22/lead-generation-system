import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!form.name || !form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please provide a valid name and email.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.status === 'success') {
        setSuccess(true);
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setError('Failed to submit. Try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try later.');
    }
  };

  return (
    <div className="App" style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Lead Generation Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <input
          name="company"
          placeholder="Company (optional)"
          value={form.company}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          rows={4}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Submitted successfully!</p>}
      </form>
    </div>
  );
}

export default App;
