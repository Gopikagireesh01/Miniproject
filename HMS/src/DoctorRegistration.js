import React from 'react';
import "../src/PLoginComponent.css"
import Logo from "../src/header.jpeg"
import Logo1 from "../src/download.jpeg"
import Logo2 from "../src/image1.jpeg"
import Logo3 from "../src/image2.jpeg"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import {Navigate} from 'react-router-dom';
import DatePicker from "react-datepicker";
import  { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            Firstname: { name: 'Firstname', value: '', error: '' },
            Lastname: { name: 'Lastname', value: '', error: '' },
            Username: { name: 'Username', value: '', error: '' },
            password: { name: 'password', value: '', error: '' },
            Age: { name: 'Age', value: 0, error: '' },
            Gender: { name: 'Gender', value: '', error: '' },
            Department: { name: 'Department', value: 'General', error: '' },
            DOJ: { name: 'DOJ', value: new Date(), error: ''},
            Address: { name: 'Address', value: '', error: '' },
            Contact: { name: 'Contact', value: '', error: '' },
            File: { name: 'File', value: '', error: '' },
            Qualification: { name: 'Qualification', value: '', error: '' },
            Declaration: { name: 'Declaration', value: false, error: '' },
            showModal:false,
            modalmsg:"",
            user:false,
        }
    }

    render() {
        const { Firstname, Lastname, Username, password, Age, Gender, Department,DOJ, Address, Contact, File, Qualification, Declaration } = this.state;
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <div className='header'><img className='logo' src={Logo} /><img className='logo' src={Logo1} /><img className='logo' src={Logo2} /><img className='sign' src={Logo} /><img className='logo' src={Logo3} /></div>
                <h3>DOCTOR REGISTRATION</h3>
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
                    <br />
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
                    <br />
                    <label>Username *</label>
                    <br />
                    <input
                        className='input'
                        placeholder="Please enter your username"
                        type="Username"
                        name={Username.name}
                        value={Username.value}
                        onChange={this.onChange}
                    />
                    <div style={{ color: 'red', fontSize: '15px' }}>
                        {Username.error.length > 0 && Username.error}
                    </div>
                </div>
                <br />
                <div>
                    <br />
                    <label>Password *</label>
                    <br />
                    <input
                        className='input'
                        placeholder="Please enter your password"
                        type="password"
                        name={password.name}
                        value={password.value}
                        onChange={this.onChange}
                    />
                    <div style={{ color: 'red', fontSize: '15px' }}>
                        {password.error.length > 0 && password.error}
                    </div>
                </div>
                <div>
                    <br />
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
                        <br />
                        <label>Gender *</label>
                        <br />
                        <input type="radio" value="Male" name="Gender" onChange={this.onChange} /> Male<br />
                        <input type="radio" value="Female" name="Gender" onChange={this.onChange} /> Female<br />
                        <input type="radio" value="Other" name="Gender" onChange={this.onChange} /> Other<br />

                    </div>

                    <div style={{ color: 'red', fontSize: '15px' }}>
                        {Gender.error.length > 0 && Gender.error}
                    </div>
                </div>

                <div>
                    <br />
                    <label>Department *
                        <select name={Department.name} value={Department.value} onChange={this.onChange} >
                            <option value="General">General</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Ortho">Ortho</option>
                            <option value="oncology">oncology</option>
                            <option value="Gastrology">Gastrology</option>
                            <option value="Gynaecology">Gynaecology</option>
                        </select>
                    </label>
                    <br />
                    <div style={{ color: 'red', fontSize: '15px' }}>
                        {Department.error.length > 0 && Department.error}
                    </div>
                </div>
                <div>
                    <br />
                    <label>Date of Join</label>
                        <br />
                        <DatePicker
                            type="datepicker"
                            name={DOJ.name}
                            selected={DOJ.value}
                            onChange={this.onChange}
                        />
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
                    {Department.error.length > 0 && Department.error}
                </div>
                <div>
                    <br />
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
                    <br />
                    <label>File *</label>
                    <br />
                    <input
                        className='input'
                        placeholder="Upload file"
                        type="File"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <br />
                    <label>Qualification *</label>
                    <br />
                    <input
                        className='input'
                        placeholder="Please enter your Qualification"
                        type="Qualification"
                        name={Qualification.name}
                        value={Qualification.value}
                        onChange={this.onChange}
                    />
                    <div style={{ color: 'red', fontSize: '15px' }}>
                        {Qualification.error.length > 0 && Qualification.error}
                    </div>
                </div>
                <div>
                    <br />
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
          <Navigate to="/login/doctor" replace={true} />
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
this.setState({showModal:false, user: true})
    }

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name == this.state.Declaration.name) {
            value = e.target.checked;
        }
        console.log(name, value, "formvalues")
        this.setState({ [name]: { ...this.state[name], value } });
    }

    validateForm = () => {
        const { Firstname, Lastname, Username, password, Age, Gender, Department, Qualification, DOJ,Address, Contact, File } = this.state;

        let status = true;
        if (Firstname.value.length === 0) {
            status = false;
            this.setState({ Firstname: { ...Firstname, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Firstname: { ...Firstname, error: '' } })
        }
        if (Lastname.value.length === 0) {
            status = false;
            this.setState({ Lastname: { ...Firstname, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Lastname: { ...Firstname, error: '' } })
        }
        if (Username.value.length === 0) {
            status = false;
            this.setState({ Username: { ...Username, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Username: { ...Username, error: '' } })
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
        if (Address.value.length === 0) {
            console.log(Address.value, "Adr")
            status = false;
            this.setState({ Address: { ...Address, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Address: { ...Address, error: '' } })
        }
        if (Qualification.value.length === 0) {
            status = false;
            this.setState({ Qualification: { ...Qualification, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Qualification: { ...Qualification, error: '' } })
        }
        if (Contact.value.length === 0) {
            status = false;
            this.setState({ Contact: { ...Contact, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Contact: { ...Contact, error: '' } })
        }

        if (password.value.length === 0) {
            status = false;
            this.setState({ password: { ...password, error: 'Please enter a valid value' } })
        } else {
            this.setState({ password: { ...password, error: '' } })
        }
        if (DOJ.value.length === 0) {
            status = false;
            this.setState({ DOA: { ...DOJ, error: 'Please enter a valid value' } })
        } else {
            this.setState({ DOA: { ...DOJ, error: '' } })
        }

        return status;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const validationStatus = this.validateForm();
        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         "Access-Control-Allow-Origin": "*",
        //     }
        //   };
        if (validationStatus === true) {
            const { Username, password, Department } = this.state;
            const model = {
                Username: Username.value,
                password: password.value,
                department: Department.value
            }
            // const headers = {
            //     "Content-Type": "application/json",
            //   };
            console.log(model);
            const options = {
                data: {
                    name: this.state.Firstname.value,
                    age: this.state.Age.value,
                    gender: this.state.Gender.value,
                    department: this.state.Department.value,
                    address: this.state.Address.value,
                    contact: this.state.Contact.value,
                    qualification: this.state.Qualification.value,
                    username: this.state.Username.value,
                    password: this.state.password.value,
                    date:this.state.DOJ.value,
                },
                method: 'POST',
                url: `http://localhost:8000/doctors/`,
                headers: { 'content-type': 'application/json' },
            };
            console.log(options)
            axios.request(options).then(
                () => {
                    console.log(this.state.value,"HIIIdone");
                    this.setState({showModal:true, modalmsg:"Successfully registered"}, () => {
                        console.log("state",this.state.modalmsg,this.state.showModal)
                    })
                },
                (error) => {
                    console.log(error, "ERRRrrr");
                },
            ).catch(
                (error) => {
                    console.log(error.Response(), "ERRRrrrCatch");
                },
            );
        }

    }
}

export default Registration;