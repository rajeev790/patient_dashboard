const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/patient/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await pool.query('SELECT * FROM Patients WHERE PatientID = $1', [id]);
    res.json(patient.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/api/doctor/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await pool.query('SELECT * FROM Doctors WHERE DoctorID = $1', [id]);
    res.json(doctor.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/api/interactions/:patientId', async (req, res) => {
  const { patientId } = req.params;
  try {
    const interactions = await pool.query(
      'SELECT * FROM PatientInteractions WHERE PatientID = $1',
      [patientId]
    );
    res.json(interactions.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/api/interactions', async (req, res) => {
  const { PatientID, DoctorID, Query, Response, InteractionDate } = req.body;
  try {
    const newInteraction = await pool.query(
      'INSERT INTO PatientInteractions (PatientID, DoctorID, Query, Response, InteractionDate) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [PatientID, DoctorID, Query, Response, InteractionDate]
    );
    res.json(newInteraction.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(Server is running on port ${port});
});