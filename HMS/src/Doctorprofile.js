import React from 'react';
import "../src/Profile.css"
import  profile from "../src/doctor.jpg"
import axios from "axios";


class Doctorprofile extends React.Component {
  componentDidMount() {
    console.log(window.location.href.split('/')[5], "");
    this.setState({username:window.location.href.split('/')[5]},this.updatePatient)        
    };

    updatePatient = () => {
        const options = {
            params: {
                type: this.state.username
            },
            method: 'GET',
            url: `http://localhost:8000/doctor/detail`,
            headers: { 'content-type': 'application/json'},
          };
          console.log(options)
          axios.request(options).then(
            (Response) => {
              console.log(Response.data);
              this.setState({FirstName:Response.data.doctor.name,Age:Response.data.doctor.age,Gender:Response.data.doctor.gender,Address:Response.data.doctor.address,Department:Response.data.doctor.department,Qualification:Response.data.doctor.qualification,Contact:Response.data.doctor.contact,List:Response.data.appointments})
            },
            (error) => {
              console.log(error,"ERRRrrr");
            },
          ).catch(
            (error) => {
                console.log(error,"ERRRrrrCatch");
              },
          );
    }

constructor() {
    super();
    this.state = {
        username:"",
        FirstName:"",
        Lastname:"",
        Age:"",
        Gender:"",
        Address:"",
        Department:"",
        Qualification:"",
        Contact:"",
        date:"",   
        List:[],         
    }
} 

    render() {
      console.log(this.state,"sssssssssss");
        return (
        <div>
            <div>
                <img className='imgp' alt="" src={profile}/>
                </div> 
       <div> 
       <div className="App">
       <table>
        <tr>
          <th>FirstName</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Qualification</th>
          <th>Department</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Date Of Join</th>
        </tr>
        <tr>
          <td>{this.state.FirstName}</td>
          <td>{this.state.Age}</td>
          <td>{this.state.Gender}</td>
          <td>{this.state.Qualification}</td>
          <td>{this.state.Department}</td>
          <td>{this.state.Contact}</td>
          <td>{this.state.Address}</td>
          <td>{this.state.date}</td>
        </tr>
      </table></div>    
     
    </div>
    <br/>
    <br/>
    <h3>Your Appointments</h3>
    <div className='App'>
      <table> 
        <tr>
          <th>FirstName</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Disease</th>
          <th>Time</th>
          <th>Contact</th>
          <th>Address</th>
        </tr>
        {this.state.List.map((list) => { 
          return(
            <tr>
            <td>{list.name}</td>
            <td>{list.age}</td>
            <td>{list.gender}</td>
            <td>{list.disease}</td>
            <td>{list.time}</td>
            <td>{list.contact}</td>
            <td>{list.address}</td>
            
          </tr>
          )
        
        })}
        
        </table>
        </div>
      </div>
        )
        }
}
      
    export default Doctorprofile;