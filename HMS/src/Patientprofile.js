import React from 'react';
import {Navigate} from 'react-router-dom';
import "../src/Profile.css"
import imagepatient from "../src/patient.jpg"
import axios from "axios";





class Patientprofile extends React.Component {

    componentDidMount() {
        console.log(window.location.href.split('/')[5], "");
        this.setState({ username: window.location.href.split('/')[5] }, this.updatePatient)
    };

    updatePatient = () => {
        const options = {
            params: {
                type: this.state.username
            },
            method: 'GET',
            url: `http://localhost:8000/patient/detail`,
            headers: { 'content-type': 'application/json' },
        };
        console.log(options)
        axios.request(options).then(
            (Response) => {
                console.log(Response.data.data);
                this.setState({ FirstName: Response.data.data.name, Age: Response.data.data.age, Gender: Response.data.data.gender, Address: Response.data.data.address, Disease: Response.data.data.disease, Department: Response.data.data.department, Doctor: Response.data.data.doctor, Contact: Response.data.data.contact, Date:Response.data.data.date })
            },
            (error) => {
                console.log(error, "ERRRrrr");
            },
        ).catch(
            (error) => {
                console.log(error, "ERRRrrrCatch");
            },
        );
    }
    changePath = (e) => {
        this.setState({Appointment:true})
    }

    constructor() {
        super();
        this.state = {
            username: "",
            FirstName: "",
            Lastname: "",
            Age: "",
            Gender: "",
            Address: "",
            Disease: "",
            Department: "",
            Doctor: "",
            Contact: "",
            Date: "",
            Appointment: "false",
        }
    }

    render() {

        return (
            <div className='prof'>
                <div>
                    <img className='imgp' alt="" src={imagepatient} />
                </div>
                <br />
                <br />
                <div className='App'>
                    <table>
                        <tbody>
                            <tr>
                            <th>FirstName</th>
                            <td>{this.state.FirstName}</td>
                            </tr>
                            <tr>
                            <th>Age</th> 
                            <td>{this.state.Age}</td>
                            </tr>
                            <tr>
                            <th>Gender</th> 
                            <td>{this.state.Gender}</td>
                            </tr>
                            <tr>
                            <th>Address</th> 
                            <td>{this.state.Address}</td>
                            </tr>
                            <tr>
                            <th>Disease</th> 
                            <td>{this.state.Disease}</td>
                            </tr>
                            <tr>
                            <th>Department</th> 
                            <td>{this.state.Department}</td>
                            </tr>
                            <tr>
                            <th>Doctor</th> 
                            <td>{this.state.Doctor}</td>
                            </tr>
                            <tr>
                            <th>Date of Registration</th> 
                            <td>{this.state.Date}</td>
                            </tr>
                            <tr>
                            <th>Contact</th> 
                            <td>{this.state.Contact}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br />
                <div>
                    <button style={{marginLeft: "40%"}} type="submit" onClick={this.changePath}>Take Appointment</button>
        


                </div>
            </div>

        )
    }
}
export default Patientprofile;