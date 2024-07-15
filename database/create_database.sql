CREATE TABLE Patients (
  PatientID SERIAL PRIMARY KEY,
  Name VARCHAR(100),
  Age INT,
  Gender VARCHAR(10),
  DoctorID INT
);

CREATE TABLE Doctors (
  DoctorID SERIAL PRIMARY KEY,
  Name VARCHAR(100),
  Specialty VARCHAR(100)
);

CREATE TABLE PatientInteractions (
  InteractionID SERIAL PRIMARY KEY,
  PatientID INT,
  DoctorID INT,
  Query TEXT,
  Response TEXT,
  InteractionDate TIMESTAMP,
  FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
  FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);