import React from 'react';

function InteractionHistory({ interactions }) {
  return (
    <div>
      <h2>Interaction History</h2>
      <ul>
        {interactions.map((interaction) => (
          <li key={interaction.InteractionID}>
            <p>Query: {interaction.Query}</p>
            <p>Response: {interaction.Response}</p>
            <p>Date: {new Date(interaction.InteractionDate).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InteractionHistory;