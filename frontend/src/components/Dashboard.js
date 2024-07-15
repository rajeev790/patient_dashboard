import React, { useState, useEffect } from 'react';
import PatientProfile from './PatientProfile';
import InteractionHistory from './InteractionHistory';
import DoctorInfo from './DoctorInfo';
import Chatbot from './Chatbot';

function Dashboard() {
  const [patient, setPatient] = useState(null);
  const [interactions, setInteractions] = useState([]);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const patientId = 1; // example patient ID
      const patientResponse = await fetch(/api/patient/${patientId});
      const patientData = await patientResponse.json();
      setPatient(patientData);

      const interactionsResponse = await fetch(/api/interactions/${patientId});
      const interactionsData = await interactionsResponse.json();
      setInteractions(interactionsData);

      const doctorResponse = await fetch(/api/doctor/${patientData.DoctorID});
      const doctorData = await doctorResponse.json();
      setDoctor(doctorData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      {patient && <PatientProfile patient={patient} />}
      {doctor && <DoctorInfo doctor={doctor} />}
      {interactions.length > 0 && <InteractionHistory interactions={interactions} />}
      <Chatbot />
    </div>
  );
}

export default Dashboard;