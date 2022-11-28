import React from 'react';
import "../src/Admin.css"
import  profile from "../src/doctor.jpg"
import axios from "axios";

class AppointmentDetails extends React.Component {
  componentDidMount() {
    const options = {
       method: 'GET',
    url: `http://localhost:8000/records/appointments`,
    headers: { 'content-type': 'application/json'},
  };
  console.log(options)
  axios.request(options).then(
    (Response) => {
      console.log(Response.data.appointments);
      this.setState({List:Response.data.appointments})
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
List:[],            
}
}
    render() {
        
        return (
          <div>
            <div><h1>Your Appointments</h1></div>
<div className='App'>
      <table> <tr>
          <th>FirstName</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Time</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Payment</th>

        </tr>
              {this.state.List.map((list) => { 
                return(
                  <tr>
                  <td>{list.name}</td>
                  <td>{list.age}</td>
                  <td>{list.gender}</td>
                  <td>{list.department}</td>
                  <td>{list.time}</td>
                  <td>{list.contact}</td>
                  <td>{list.address}</td> 
                  <td>{list.pay}</td>
                </tr>
                )
              
              })}
        </table>
          </div>
    
        </div>
        )
        }
}
      
    export default AppointmentDetails;