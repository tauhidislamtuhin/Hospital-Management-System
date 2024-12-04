

               ------CREATE ALL TABLE---------

--Department table
Create TABLE T_H_DEPARTMENT(
department_id INT IDENTITY(200001, 1)			PRIMARY KEY,
tx_department_name	VARCHAR(MAX)				 NOT NULL
)


--Doctor table
CREATE TABLE T_H_DOCTOR(
doctor_id INT IDENTITY(300001, 1)			PRIMARY KEY,
department_id INT FOREIGN KEY REFERENCES	T_H_DEPARTMENT(department_id)			NOT NULL,
tx_doctor_name	VARCHAR(MAX)				NOT NULL,
tx_doctor_gender VARCHAR(MAX)				NOT NULL,
tx_doctor_degree VARCHAR(MAX)				NOT NULL,
tx_doctor_schedule VARCHAR(MAX)				NOT NULL,
tx_doctor_phone_no VARCHAR(MAX)				NOT NULL,
doctor_photo VARBINARY(MAX) ,
doctor_fee_bdt int							NOT NULL
)

--Patient table
Create TABLE T_H_PATIENT(
patient_serial_no INT IDENTITY(100001, 1)			PRIMARY KEY,
tx_patient_name VARCHAR(MAX)				NOT NULL,
patient_age INT				NOT NULL,
tx_patient_gender VARCHAR(MAX)				NOT NULL,
department_id INT FOREIGN KEY REFERENCES	T_H_DEPARTMENT(department_id)			NOT NULL,
doctor_id INT FOREIGN KEY REFERENCES	T_H_DOCTOR(doctor_id)			NOT NULL,
tx_patient_problem VARCHAR(MAX)				NOT NULL,
tx_patient_address VARCHAR(MAX)				NOT NULL,
tx_patient_Phone VARCHAR(MAX),
dt_visit_date DATE NOT NULL
)


--Indoor Patient table
CREATE TABLE T_H_ADMISSION(
admission_id INT IDENTITY(400001, 1)			PRIMARY KEY,
patient_serial_no INT FOREIGN KEY REFERENCES	T_H_PATIENT(patient_serial_no)			NOT NULL,
admission_date DATE NOT NULL,
department_id INT FOREIGN KEY REFERENCES	T_H_DEPARTMENT(department_id)			NOT NULL,
doctor_id INT FOREIGN KEY REFERENCES	T_H_DOCTOR(doctor_id)			NOT NULL,
patient_documents VARBINARY(MAX) 
)


--Service table
CREATE TABLE T_H_TREATMENT(
treatment_id INT IDENTITY(300000, 1)			PRIMARY KEY,
doctor_id INT FOREIGN KEY REFERENCES	T_H_DOCTOR(doctor_id)			NOT NULL,
patient_serial_no INT FOREIGN KEY REFERENCES	T_H_PATIENT(patient_serial_no)			NOT NULL, 
tx_medicine_names VARCHAR(MAX),
tx_test_names VARCHAR(MAX),
treatment_fee int
)



--Final Report
CREATE TABLE T_H_REPORT(
dt_date DATE,
patient_serial_no INT FOREIGN KEY REFERENCES	T_H_PATIENT(patient_serial_no)			NOT NULL,
doctor_id INT FOREIGN KEY REFERENCES	T_H_DOCTOR(doctor_id)			NOT NULL,
treatment_id INT FOREIGN KEY REFERENCES	T_H_TREATMENT(treatment_id)			NOT NULL, 
grand_total_of_fee int
)



-----------------------------STORED PROCEDURE-------------------


Create Procedure ACTION_LIST
@tx_action_name varchar(max)
as
BEGIN
	IF(@tx_action_name = 'doctor_list')
	BEGIN
	SELECT B.doctor_id,B.tx_doctor_name, B.tx_doctor_degree, A.tx_department_name , 
	B.tx_doctor_schedule,B.tx_doctor_phone_no
	from T_H_DEPARTMENT as A inner join T_H_DOCTOR as B
	on A.department_id = B.department_id
	END

	ELSE IF(@tx_action_name = 'patient_list')
	BEGIN
	SELECT P.patient_serial_no,P.tx_patient_name, P.patient_age,P.tx_patient_gender,P.tx_patient_problem,
	D.tx_department_name,DR.tx_doctor_name,P.dt_visit_date
	from T_H_PATIENT as P inner join T_H_DEPARTMENT as D 
	on P.department_id = D.department_id
	inner join  T_H_DOCTOR as DR
	on D.department_id=DR.department_id
	END

	ELSE IF (@tx_action_name = 'admission_list')
	BEGIN
	SELECT AD.admission_id, PT.patient_serial_no, PT.tx_patient_name, PT.patient_age,
	PT.tx_patient_gender,DT.tx_department_name,DR.tx_doctor_name,PT.dt_visit_date
	from T_H_ADMISSION As AD inner join T_H_PATIENT AS PT
	on AD.patient_serial_no = PT.patient_serial_no
	Inner Join T_H_DOCTOR As DR
	ON PT.doctor_id = DR.doctor_id
	Inner join T_H_DEPARTMENT AS DT
	On DR.department_id = DT.department_id
	END


	ELSE IF (@tx_action_name = 'treatment_list')
	BEGIN
	SELECT TR.treatment_id,TR.patient_serial_no,PT.tx_patient_name,PT.patient_age, DR.tx_doctor_name, 
	TR.tx_medicine_names, TR.tx_test_names, TR.treatment_fee
	From T_H_TREATMENT As TR inner join T_H_DOCTOR As DR
	on TR.doctor_id = DR.doctor_id
	Inner join T_H_PATIENT As PT
	On DR.doctor_id = PT.doctor_id
	END

END

--Execute Stored Procedure
Exec ACTION_LIST @tx_action_name = 'doctor_list'
Exec ACTION_LIST @tx_action_name = 'patient_list'
Exec ACTION_LIST @tx_action_name = 'admission_list'
Exec ACTION_LIST @tx_action_name = 'treatment_list'


-- View All Table
Select* from T_H_DEPARTMENT
Select* from T_H_DOCTOR
Select* from T_H_PATIENT
Select* from T_H_ADMISSION
Select* from T_H_TREATMENT





--doctor_id	tx_doctor_name	tx_doctor_degree	tx_department_name	tx_doctor_schedule	tx_doctor_phone_no
--patient_serial_no	tx_patient_name	patient_age	tx_patient_gender	tx_patient_problem	tx_department_name	tx_doctor_name	dt_visit_date
--admission_id	patient_serial_no	tx_patient_name	patient_age	tx_patient_gender	tx_department_name	tx_doctor_name	dt_visit_date
--treatment_id	patient_serial_no	tx_patient_name	patient_age	tx_doctor_name	tx_medicine_names	tx_test_names	treatment_fee


