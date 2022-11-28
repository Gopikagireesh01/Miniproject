package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
	"github.com/rs/cors"
)

type LoginRequest struct {
	Username string
	Password string
}

type Patient struct {
	PatientID   int    `json:"id"`
	PatientName string `json:"name"`
	Age         string `json:"age"`
	Gender      string `json:"gender"`
	Department  string `json:"department"`
	Disease     string `json:"disease"`
	Doctor      string `json:"doctor"`
	Address     string `json:"address"`
	Contact     string `json:"contact"`
	Username    string `json:"username"`
	Password    string `json:"password"`
	RegDate     string `json:"date"`
}

type Doctor struct {
	ID            int    `json:"id"`
	Name          string `json:"name"`
	Age           string `json:"age"`
	Gender        string `json:"gender"`
	Department    string `json:"department"`
	Address       string `json:"address"`
	Contact       string `json:"contact"`
	Qualification string `json:"qualification"`
	Username      string `json:"username"`
	Password      string `json:"password"`
	JoinDate      string `json:"date"`
}

type Appointment struct {
	ID          int    `json:"id"`
	PatientName string `json:"name"`
	Age         string `json:"age"`
	Gender      string `json:"gender"`
	Department  string `json:"department"`
	Doctor      string `json:"doctor"`
	Address     string `json:"address"`
	Contact     string `json:"contact"`
	Date        string `json:"date"`
	Time        string `json:"time"`
	IsPaid      bool   `json:"pay"`
}

type LoginResponse struct {
	Status  string
	Message string
}

type PatientResponse struct {
	Type    string    `json:"type"`
	Data    []Patient `json:"data"`
	Message string    `json:"message"`
}
type PatientDetailResponse struct {
	Type    string  `json:"type"`
	Data    Patient `json:"data"`
	Message string  `json:"message"`
}
type DoctorDetailResponse struct {
	Type         string        `json:"type"`
	Doctor       Doctor        `json:"doctor"`
	Appointments []Appointment `json:"appointments"`
	Message      string        `json:"message"`
}

type DoctorResponse struct {
	Type    string   `json:"type"`
	Data    []Doctor `json:"data"`
	Message string   `json:"message"`
}

const (
	DB_USER     = "postgres"
	DB_PASSWORD = "new_password"
	DB_NAME     = "hms"
)

// DB set up
func setupDB() *sql.DB {
	dbinfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", DB_USER, DB_PASSWORD, DB_NAME)
	// dbinfo := fmt.Sprintf("user=%s dbname=%s sslmode=disable", DB_USER, DB_NAME)
	db, err := sql.Open("postgres", dbinfo)

	checkErr(err)

	return db
}

// Go main function
func main() {
	fmt.Println("Hello World!")
	// Init the mux router
	router := mux.NewRouter()
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://*"},
		AllowCredentials: true,
	})

	// Route handles & endpoints

	// Get all patients
	router.HandleFunc("/patients/", GetPatients).Methods("GET")

	// Add a patient
	router.HandleFunc("/patients/", AddPatient).Methods("POST")

	// GET a doctor
	router.HandleFunc("/doctors/", GetDoctors).Methods("GET")

	// Add a doctor
	router.HandleFunc("/doctors/", AddDoctor).Methods("POST")

	// take an appointment
	router.HandleFunc("/appointment/", TakeAppointment).Methods("POST")

	//login
	router.HandleFunc("/login/patient", PatientLogin).Methods("GET")

	//patient detail
	router.HandleFunc("/patient/detail", GetPatientDetails).Methods("GET")

	//doctor detail
	router.HandleFunc("/doctor/detail", GetDoctorDetails).Methods("GET")

	//appointment detail
	router.HandleFunc("/records/appointments", GetAppointments).Methods("GET")

	// serve the app
	fmt.Println("Server at 8000")
	handler := c.Handler(router)
	log.Fatal(http.ListenAndServe(":8000", handler))
}

// Function for handling messages
func printMessage(message string) {
	fmt.Println("")
	fmt.Println(message)
	fmt.Println("")
}

// Function for handling errors
func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

// Get all patients

// response and request handlers
func GetPatients(w http.ResponseWriter, r *http.Request) {
	// enableCors(w)
	db := setupDB()

	printMessage("Getting patients...")

	// Get all patients from patient table
	rows, err := db.Query("SELECT id,name,age,gender,department,disease,doctor,address,contact,dateofregister FROM patient")

	// check errors
	checkErr(err)

	// var response []JsonResponse
	var patients []Patient

	// Foreach patient
	for rows.Next() {
		var (
			id          int
			patientName sql.NullString
			age         int
			gender      sql.NullString
			department  sql.NullString
			disease     sql.NullString
			doctor      sql.NullString
			address     sql.NullString
			contact     sql.NullString
			date        sql.NullString
		)

		err = rows.Scan(&id, &patientName, &age, &gender, &department, &disease, &doctor, &address, &contact, &date)

		// check errors
		checkErr(err)
		newage := strconv.Itoa(age)

		patients = append(patients, Patient{
			PatientID:   id,
			PatientName: patientName.String,
			Age:         newage,
			Gender:      gender.String,
			Department:  department.String,
			Disease:     disease.String,
			Doctor:      doctor.String,
			Address:     address.String,
			Contact:     contact.String,
			RegDate:     date.String,
		})
	}

	var response = PatientResponse{Type: "success", Data: patients}

	json.NewEncoder(w).Encode(response)
}

func GetPatientDetails(w http.ResponseWriter, r *http.Request) {

	user := r.URL.Query().Get("type")
	fmt.Println("user", user)
	// enableCors(w)
	db := setupDB()

	printMessage("Getting patients...")
	var (
		id          int
		patientName sql.NullString
		age         int
		gender      sql.NullString
		department  sql.NullString
		disease     sql.NullString
		doctor      sql.NullString
		address     sql.NullString
		contact     sql.NullString
		date        sql.NullString
	)

	// Get all patients from patient table
	err := db.QueryRow("SELECT id,name,age,gender,department,disease,doctor,address,contact,dateofregister FROM patient where username = $1", user).Scan(&id, &patientName, &age, &gender, &department, &disease, &doctor, &address, &contact, &date)

	// check errors
	checkErr(err)

	// var response []JsonResponse
	// var patient []Patient

	// Foreach patient
	// for rows.Next() {

	// 	err = rows.Scan(&id, &patientName, &age, &gender, &department, &disease, &doctor, &address, &contact)

	// check errors
	checkErr(err)
	newage := strconv.Itoa(age)

	patient := Patient{
		PatientID:   id,
		PatientName: patientName.String,
		Age:         newage,
		Gender:      gender.String,
		Department:  department.String,
		Disease:     disease.String,
		Doctor:      doctor.String,
		Address:     address.String,
		Contact:     contact.String,
		RegDate:     date.String,
	}
	// }

	var response = PatientDetailResponse{Type: "success", Data: patient}

	json.NewEncoder(w).Encode(response)
}

// Add patient

// response and request handlers
func AddPatient(w http.ResponseWriter, r *http.Request) {
	// enableCors(w)
	body := Patient{}
	fmt.Println("body", r.Body)
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&body); err != nil {
		fmt.Println("errr", err)
		// some error handling
		return
	}
	fmt.Println("bodynew", body.PatientName)
	defer r.Body.Close()
	test := body
	fmt.Print(test)
	var response = PatientResponse{}

	if body.PatientName == "" || body.Gender == "" || body.Address == "" || body.Contact == "" {
		response = PatientResponse{Type: "error", Message: "You are missing some of the parameters."}
	} else {
		db := setupDB()
		printMessage("Inserting patient into DB")
		age, _ := strconv.Atoi(body.Age)

		var lastInsertID int
		err := db.QueryRow("INSERT INTO patient (name,age,gender,department,disease,doctor,address,contact,username,password,dateofregister) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning id;", body.PatientName, age, body.Gender, body.Department, body.Disease, body.Doctor, body.Address, body.Contact, body.Username, body.Password, body.RegDate).Scan(&lastInsertID)

		// check errors
		checkErr(err)

		response = PatientResponse{Type: "success", Message: "The patient has been inserted successfully!"}
	}

	json.NewEncoder(w).Encode(response)
}
func AddDoctor(w http.ResponseWriter, r *http.Request) {
	// enableCors(w)
	body := Doctor{}
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&body); err != nil {
		fmt.Println("err", err)
		// some error handling
		return
	}
	defer r.Body.Close()
	test := body
	fmt.Print(test)
	var response = DoctorResponse{}

	if body.Name == "" || body.Gender == "" || body.Address == "" || body.Contact == "" {
		response = DoctorResponse{Type: "error", Message: "You are missing some of the parameters."}
	} else {
		db := setupDB()

		printMessage("Inserting Doctor into DB")
		age, _ := strconv.Atoi(body.Age)

		var lastInsertID int
		err := db.QueryRow("INSERT INTO doctor (Name,Age,Gender,Department,Address,Contact,Qualification,username,password,joindate) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning id;", body.Name, age, body.Gender, body.Department, body.Address, body.Contact, body.Qualification, body.Username, body.Password, body.JoinDate).Scan(&lastInsertID)

		// check errors
		checkErr(err)

		response = DoctorResponse{Type: "success", Message: "The Doctor has been inserted successfully!"}
	}

	json.NewEncoder(w).Encode(response)
}

func GetDoctors(w http.ResponseWriter, r *http.Request) {
	// enableCors(w)
	db := setupDB()

	printMessage("Getting doctors...")

	// Get all doctors from doctor table
	rows, err := db.Query("SELECT id,Name,Age,Gender,Department,Address,Contact,Qualification,joindate FROM doctor")

	// check errors
	checkErr(err)

	var doctors []Doctor

	// Foreach doctor
	for rows.Next() {
		var (
			id            int
			name          sql.NullString
			age           int
			gender        sql.NullString
			department    sql.NullString
			address       sql.NullString
			contact       sql.NullString
			qualification sql.NullString
			date          sql.NullString
		)

		err = rows.Scan(&id, &name, &age, &gender, &department, &address, &contact, &qualification, &date)

		// check errors
		checkErr(err)
		newage := strconv.Itoa(age)
		doctors = append(doctors, Doctor{
			ID:            id,
			Name:          name.String,
			Age:           newage,
			Gender:        gender.String,
			Department:    department.String,
			Address:       address.String,
			Contact:       contact.String,
			Qualification: qualification.String,
			JoinDate:      date.String,
		})
	}

	var response = DoctorResponse{Type: "success", Data: doctors}

	json.NewEncoder(w).Encode(response)
}

//get dr details
func GetDoctorDetails(w http.ResponseWriter, r *http.Request) {

	user := r.URL.Query().Get("type")
	fmt.Println("user", user)
	// enableCors(w)
	db := setupDB()

	printMessage("Getting detailss...")
	var (
		id            int
		name          string
		age           int
		gender        string
		department    string
		qualification string
		address       string
		contact       string
		date          string
	)

	// Get all patients from patient table
	err := db.QueryRow("SELECT id,name,age,gender,department,qualification,address,contact,joindate FROM doctor where username = $1", user).Scan(&id, &name, &age, &gender, &department, &qualification, &address, &contact, &date)
	printMessage("Getting detailss...1")
	// check errors
	checkErr(err)
	printMessage("Getting detailss...2")
	newage := strconv.Itoa(age)
	doctor := Doctor{
		ID:            id,
		Name:          name,
		Age:           newage,
		Gender:        gender,
		Department:    department,
		Qualification: qualification,
		Address:       address,
		Contact:       contact,
		JoinDate:      date,
	}
	printMessage("Getting detailss...3")
	var (
		ID         int
		Name       string
		Age        int
		Gender     string
		Department string
		Doctor     string
		Address    string
		Contact    string
		Date       string
		Time       string
	)
	printMessage("Getting detailss...4")
	appointments := []Appointment{}
	rows, err := db.Query("SELECT id,name,age,gender,department,doctor,address,contact,date,time FROM appointment where doctor=$1;", name)
	for rows.Next() {
		printMessage("Getting detailss...5")
		rows.Scan(&ID, &Name, &Age, &Gender, &Department, &Doctor, &Address, &Contact, &Date, &Time)
		checkErr(err)
		newage := strconv.Itoa(age)
		appointments = append(appointments, Appointment{
			ID:          ID,
			PatientName: Name,
			Age:         newage,
			Gender:      Gender,
			Department:  Department,
			Doctor:      Doctor,
			Address:     Address,
			Contact:     Contact,
			Time:        Time,
			Date:        Date,
		})

	}
	var response = DoctorDetailResponse{Type: "success", Doctor: doctor, Appointments: appointments}

	json.NewEncoder(w).Encode(response)
}

func PatientLogin(w http.ResponseWriter, r *http.Request) {
	username := r.URL.Query().Get("username")
	password := r.URL.Query().Get("password")
	user := r.URL.Query().Get("type")
	fmt.Println("user", username, password)
	var response = LoginResponse{}
	if username == "" || password == "" {
		response = LoginResponse{Status: "failed", Message: "You are missing username or password."}
	} else {
		db := setupDB()

		printMessage("Logging in......")
		var count int
		err := db.QueryRow(fmt.Sprintf("SELECT count(*) FROM %s where username = $1 and password = $2", user), username, password).Scan(&count)
		// check errors
		if err == nil {
			if count == 0 {
				response = LoginResponse{Status: "failed", Message: "Invalid username or password"}
			} else {
				response = LoginResponse{Status: "success", Message: "Login successful"}
			}

		} else {
			response = LoginResponse{Status: "failed", Message: "failed to check credentials"}
		}
		json.NewEncoder(w).Encode(response)

	}
}

//GetAppointments
func GetAppointments(w http.ResponseWriter, r *http.Request) {
	db := setupDB()

	printMessage("Getting detailss...")

	var (
		ID         int
		Name       string
		Age        int
		Gender     string
		Department string
		Doctor     string
		Address    string
		Contact    string
		Date       string
		Time       string
		ispaid     bool
	)
	printMessage("Getting detailss...4")
	appointments := []Appointment{}
	rows, err := db.Query("SELECT id,name,age,gender,department,doctor,address,contact,date,time,ispaid FROM appointment")
	for rows.Next() {
		printMessage("Getting detailss...5")
		rows.Scan(&ID, &Name, &Age, &Gender, &Department, &Doctor, &Address, &Contact, &Date, &Time, &ispaid)
		checkErr(err)
		newage := strconv.Itoa(Age)
		appointments = append(appointments, Appointment{
			ID:          ID,
			PatientName: Name,
			Age:         newage,
			Gender:      Gender,
			Department:  Department,
			Doctor:      Doctor,
			Address:     Address,
			Contact:     Contact,
			Time:        Time,
			Date:        Date,
			IsPaid:      ispaid,
		})

	}
	var response = DoctorDetailResponse{Type: "success", Appointments: appointments}

	json.NewEncoder(w).Encode(response)
}

func TakeAppointment(w http.ResponseWriter, r *http.Request) {
	// enableCors(w)
	db := setupDB()
	body := Appointment{}
	fmt.Println("body", r.Body)
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&body); err != nil {
		fmt.Println("errr", err)
		// some error handling
		return
	}
	fmt.Println("bodynew", body.PatientName)
	defer r.Body.Close()
	test := body
	fmt.Print(test)
	var response = PatientResponse{}

	if body.PatientName == "" || body.Gender == "" || body.Address == "" || body.Contact == "" {
		response = PatientResponse{Type: "error", Message: "You are missing some of the parameters."}
	} else {
		printMessage("taking appointment in progress...")
		age, _ := strconv.Atoi(body.Age)
		if body.Date == "Today" {
			body.Date = time.Now().Format("2006-01-02")
		} else if body.Date == "Tomorrow" {
			body.Date = time.Now().AddDate(0, 0, 1).Format("2006-01-02")
		} else {
			body.Date = time.Now().AddDate(0, 0, 2).Format("2006-01-02")
		}
		var count int
		err := db.QueryRow("SELECT count(*) from appointment where date=$1 AND time=$2;", body.Date, body.Time).Scan(&count)
		checkErr(err)
		var payment_status string
		if body.IsPaid {
			payment_status = "Yes"
		} else {
			payment_status = "No"
		}

		if count == 10 {
			response = PatientResponse{Type: "error", Message: "Sorry, This time slot is already filled."}
		} else {
			var lastInsertID int
			err = db.QueryRow("INSERT INTO appointment (name,age,gender,department,doctor,address,contact,date,time,ispaid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning id;", body.PatientName, age, body.Gender, body.Department, body.Doctor, body.Address, body.Contact, body.Date, body.Time, payment_status).Scan(&lastInsertID)

			// check errors
			checkErr(err)

			response = PatientResponse{Type: "success", Message: fmt.Sprintf("The appointment has been taken for the date %s at %s successfully!", body.Date, body.Time)}
		}
	}
	fmt.Println(response)

	json.NewEncoder(w).Encode(response)
}
