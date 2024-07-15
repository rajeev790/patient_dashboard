INSERT INTO Patients (Name, Age, Gender, DoctorID) VALUES
('John Doe', 30, 'Male', 1),
('Jane Smith', 28, 'Female', 2);

INSERT INTO Doctors (Name, Specialty) VALUES
('Dr. Gregory House', 'Diagnostic Medicine'),
('Dr. Meredith Grey', 'General Surgery');

INSERT INTO PatientInteractions (PatientID, DoctorID, Query, Response, InteractionDate) VALUES
(1, 1, 'What are the symptoms of a heart attack?', 'The symptoms of a heart attack can include chest pain, shortness of breath, and nausea.', '2023-07-01T13:00:00Z'),
(2, 2, 'What should I do if I have a severe headache?', '