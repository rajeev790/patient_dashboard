import React from 'react';

function PatientProfile({ patient }) {
  return (
    <div>
      <h2>Patient Profile</h2>
      <p>Name: {patient.Name}</p>
      <p>Age: {patient.Age}</p>
      <p>Gender: {patient.Gender}</p>
    </div>
  );
}

export default PatientProfile;