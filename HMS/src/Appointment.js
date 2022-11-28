import React from 'react';
import "../src/PLoginComponent.css"
import  Logo from "../src/header.jpeg"
import  Logo1 from "../src/download.jpeg"
import  Logo2 from "../src/image1.jpeg"
import  Logo3 from "../src/image2.jpeg"
import DatePicker from "react-datepicker";
import  { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import {Navigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            Firstname: { name: 'Firstname', value: '', error: '' },
            Lastname: { name: 'Lastname', value: '', error: '' },
            Age: { name: 'Age', value: '', error: '' },
            Gender: { name: 'Gender', value: '', error: '' },
            Department: { name: 'Department', value: "General", error: '' },
            Doctor: { name: 'Doctor', value: '', error: '' },
            Disease: { name: 'Disease', value: '', error: '' },
            Address: { name: 'Address', value: '', error: '' },
            Contact: { name: 'Contact', value: '', error: '' },
            File: { name: 'File', value: '', error: '' },
            DOA:  { name: 'DOA', value: '', error: '' },
            Time: { name: 'Time', value: '', error: ''},
            Declaration: { name: 'Declaration', value: false, error: '' },
            online: false,
            Fee:{name:'fee',value: 250},
            postdone:false,
            // payment: { name: 'payment', value: '', error: '' },
        }
    }

    render() {
            const { Firstname,Lastname,Age,Gender,Department,Disease,Doctor,Address,Contact,File,DOA,Time,Declaration,Fee } = this.state;
        return (
                <form className='form' onSubmit={this.onSubmit}>
                    <div className='header'><img className='logo' src={Logo}/><img className='logo' src={Logo1}/><img className='logo' src={Logo2}/><img className='sign' src={Logo}/><img className='logo' src={Logo3}/></div>
                    <h3>TAKE YOUR APPOINTMENT NOW!!!</h3>
                    <div>
                        <label>Firstname *</label>
                        <br />
                        <input
                            className='input'
                            placeholder="Please enter your firstname"
                            type="Firstname"
                            name={Firstname.name}
                            value={Firstname.value}
                            onChange={this.onChange}
                        />
                        <div style={{ color: 'red', fontSize: '15px' }}>
                            {Firstname.error.length > 0 && Firstname.error}
                        </div>
                    </div>
                    <div>
                    <br/>
                        <label>Lastname *</label>
                        <br />
                        <input
                            className='input'
                            placeholder="Please enter your Lastname"
                            type="Lastname"
                            name={Lastname.name}
                            value={Lastname.value}
                            onChange={this.onChange}
                        />
                        <div style={{ color: 'red', fontSize: '15px' }}>
                            {Lastname.error.length > 0 && Lastname.error}
                        </div>
                    </div>
                   <div>
                    <br/>
                        <label>Age *</label>
                        <br />
                        <div>
                        <input
                            className='input'
                            placeholder="Please enter your Age"
                            type="Age"
                            name={Age.name}
                            value={Age.value}
                            onChange={this.onChange}
                        />
                         <div style={{ color: 'red', fontSize: '15px' }}>
                            {Age.error.length > 0 && Age.error}
                        </div>
                    </div>
                    <div>
                    <br/>
                        <label>Gender *</label>
                        <br />
                        <input type="radio" value="Male" name="Gender" onChange={this.onChange}/> Male <br/>
                        <input type="radio" value="Female" name="Gender" onChange={this.onChange} /> Female <br/>
                        <input type="radio" value="Other" name="Gender" onChange={this.onChange}/> Other <br/>
                            
                        <div style={{ color: 'red', fontSize: '15px' }}>
                            {Gender.error.length > 0 && Gender.error}
                        </div>
                    </div>

                    <div>
                    <br/>
                        <label>Department *
                            <select name={Department.name} value={Department.value} default="General" onChange={this.onChange} >
                            <option value="General">General</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Ortho">Ortho</option>
                                <option value="oncology">oncology</option>
                                <option value="Gastrology">Gastrology</option>
                                <option value="Gynaecology">Gynaecology</option>
                            </select>
                        </label>
                        <div style={{ color: 'red', fontSize: '15px' }}>
                            {Department.error.length > 0 &&Department.error}
                        </div>
                        <label>Disease *</label>
                        <br />
                        <input
                            className='input'
                            placeholder="Please enter disease"
                            type="disease"
                            name={Disease.name}
                            value={Disease.value}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                    <br/>
                        <label>Doctor *
                        <select name={Doctor.name} value={Doctor.value} onChange={this.onChange} >
                                <option value="Mathews">Mathews</option>
                                <option value="John">John</option>
                                <option value="Manu">Manu</option>
                                <option value="Ranjith">Ranjith</option>
                                <option value="Navya">Navya</option>
                                <option value="Harshitha">Harshitha</option>
                                <option value="Joy">Amritha</option>
                                <option value="Joy">Hameed</option>
                            </select>
                        </label>
                        <br />
                        </div>
                        <div style={{ color: 'red', fontSize: '15px' }}>
                            {Doctor.error.length > 0 && Doctor.error}
                        </div>
                    </div>
                    <div>
                    <br/>
                        <label>Address
                        </label><br />
                        <textarea
                            placeholder="Please enter your address"
                            name={Address.name}
                            value={Address.value}
                            onChange={this.onChange} />
                    </div>
                    <div style={{ color: 'red', fontSize: '15px' }}>
                            {Department.error.length > 0 &&Department.error}
                    </div>
                    <div>
                    <br/>
                        <label>Contact *</label>
                        <br />
                        <input
                            className='input'
                            placeholder="Please enter your contactnumber"
                            type="Contact"
                            name={Contact.name}
                            value={Contact.value}
                            onChange={this.onChange}
                        />
                        <div style={{ color: 'red', fontSize: '15px' }}>
                            {Contact.error.length > 0 && Contact.error}
                        </div>
                    </div>
                    <div>
                    <br/>
                        <label>File *</label>
                        <br />
                        <input
                            className='input'
                            placeholder="Please enter your file"
                            type="File"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <br/>
                        <label>Day of Appointment</label>
                        <br />
                        <select name={DOA.name} value={DOA.value} onChange={this.onChange} >
                        <option value=""></option>
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Day After Tomorrow">Day After Tomorrow</option>
                            </select>
                    </div>
                    <div>
                        <br/>
                        <label>Time *</label>
                        <br />
                        <br/>
                        <input type="radio" value="9.00AM - 10.00AM" name="Time" onChange={this.onChange}/> 9.00AM - 10.00AM <br/>
                        <input type="radio" value="10.00AM - 11.00AM" name="Time" onChange={this.onChange} /> 10.00AM - 11.00AM <br/>
                        <input type="radio" value="11.00AM - 12.00PM" name="Time" onChange={this.onChange}/> 11.00AM - 12.00PM <br/>
                        <br/>
                            
                        <div style={{ color: 'red', fontSize: '15px'}}>
                            {Time.error.length > 0 && Time.error}
                        </div>
                    </div>
                    <div>
                        <br/>
                        <label>Payment Mode</label>
                        <br />
                        <br/>
                        <input type="radio" value="offline" name="payment" onChange={this.onChange} /> Offline <br/>
                        <input type="radio" value="online" name="payment" onChange={this.onChange}/> Online <br/>
                        <br/> 
                        <div style={{ color: 'red', fontSize: '15px'}}>
                            {Time.error.length > 0 && Time.error}
                        </div>
                        <br/>
                        {this.state.online && (
                            <div>
                                <input
                                className='input'
                                type="fee"
                                name={Fee.name}
                                value={Fee.value}
                                ></input>
                                <p>Amount is fixed no need to change</p>
                                <Button onClick={this.handlePayment}>Pay</Button>
                            </div>
                        )}
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name={Declaration.name}
                                checked={Declaration.value}
                                onChange={this.onChange}
                            />
                            Here by I declare that all the details I have mentioned above are true.
                        </label>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    {this.state.user && (
          <Navigate to="/home" replace={true} />
        )}
                <Modal
                    show={this.state.showModal}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Doctor Registration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       {this.state.modalmsg}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                </form>

        )
    }

    handleClose = (e) => {
        console.log(this.state.Declaration.value !== true)
        if (this.state.Declaration.value !== true) {
            console.log("pay")
            this.setState({showModal:false, user: false})
        } else{
            console.log("sub")
            this.setState({showModal:false,user: true})
        }
        
    }
        

    handlePayment =() => {
        this.setState({showModal:true, modalmsg:"Payment successful - Rs.250"})
        // this.setState({ [name]: { ...this.state[name], value } });
        // this.setState({
        //   DOA: date
        // })
      }

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name == this.state.Declaration.name) {
            value = e.target.checked;
        }

        if (name == "payment" && value == "online") {
            this.setState({ [name]: { ...this.state[name], value },online:true });
        }
        console.log(name,value,"formvalues")
        this.setState({ [name]: { ...this.state[name], value } });
    }

    validateForm = () => {
        const { Firstname,Lastname,Age,Gender,Department,Disease,Doctor,Address,Contact,File,DOA } = this.state;

        let status = true;
        if (Firstname.value.length === 0) {
            status = false;
            this.setState({ Firstname: { ...Firstname, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Firstname: { ...Firstname, error: '' } })
        }
        if (Lastname.value.length === 0) {
            status = false;
            this.setState({ Lastname: { ...Lastname, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Lastname: { ...Lastname, error: '' } })
        }
        if (Age.value.length === 0) {
            status = false;
            this.setState({ Age: { ...Age, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Age: { ...Age, error: '' } })
        }
        if (Gender.value.length === 0) {
            status = false;
            this.setState({ Gender: { ...Gender, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Gender: { ...Gender, error: '' } })
        }
        if (Department.value.length === 0) {
            status = false;
            this.setState({ Department: { ...Department, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Department: { ...Department, error: '' } })
        }
        if (Doctor.value.length === 0) {
            status = false;
            this.setState({ Doctor: { ...Doctor, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Doctor: { ...Doctor, error: '' } })
        }
        if (DOA.value.length === 0) {
            status = false;
            this.setState({ DOA: { ...DOA, error: 'Please enter a valid value' } })
        } else {
            this.setState({ DOA: { ...DOA, error: '' } })
        }
        // if (Time.value.length === 0) {
        //     status = false;
        //     this.setState({ Time: { ...Time, error: 'Please enter a valid value' } })
        // } else {
        //     this.setState({ Time: { ...Time, error: '' } })
        // }


        if (Address.value.length === 0) {
            console.log(Address.value,"Adr")
            status = false;
            this.setState({ Address: { ...Address, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Address: { ...Address, error: '' } })
        }
        if (Contact.value.length === 0) {
            status = false;
            this.setState({ Contact: { ...Contact, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Contact: { ...Contact, error: '' } })
        }
        if (Contact.value.length === 0) {
            status = false;
            this.setState({ Contact: { ...Disease, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Contact: { ...Disease, error: '' } })
        }


        return status;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const validationStatus = this.validateForm();
        if (validationStatus === true) {
            const { Firstname, Age,Gender,Department} = this.state;
            const model = {
                Firstname: Firstname.value,
                Age: Age.value,
                Gender: Gender.value,
                department: Department.value
            }
            console.log(model);
            const options = {
                data: {
                    name: this.state.Firstname.value,
                    age:this.state.Age.value,
                    gender: this.state.Gender.value,
                    department:this.state.Department.value,
                    doctor:this.state.Doctor.value,
                    address: this.state.Address.value,
                    contact: this.state.Contact.value,
                    date: this.state.DOA.value,
                    time: this.state.Time.value,
                    pay:this.state.online,
                },
                method: 'POST',
                url: `http://localhost:8000/appointment/`,
                headers: { 'content-type': 'application/json'},
              };
              console.log(options)
              axios.request(options).then(
                (Response) => {
                    console.log("rs",Response);
                    this.setState({showModal:true, modalmsg:Response.data.message,postdone:true}, () => {
                        console.log("state",this.state.modalmsg,this.state.showModal)
                    })
                },
                (error) => {
                  console.log(error,"ERRRrrr");
                },
              ).catch(
                (error) => {
                    console.log(error.Response(),"ERRRrrrCatch");
                  },
              );
        }

    }
}

export default Registration;