import React, { useState } from 'react';

function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/interactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        PatientID: 1, // example patient ID
        DoctorID: 1, // example doctor ID
        Query: query,
        Response: 'This is a simulated response', // simulate response
        InteractionDate: new Date().toISOString(),
      }),
    });
    const data = await res.json();
    setResponse(data.Response);
    setQuery('');
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;