import React from 'react';

function DoctorInfo({ doctor }) {
  return (
    <div>
      <h2>Doctor Info</h2>
      <p>Name: {doctor.Name}</p>
      <p>Specialty: {doctor.Specialty}</p>
    </div>
  );
}

export default DoctorInfo;