import React from 'react';
import "../src/Profile.css"
import axios from "axios";


class PatientRecords extends React.Component {
  componentDidMount() {
            const options = {
            params: {
                type: this.state.username
            },
            method: 'GET',
            url: `http://localhost:8000/patients/`,
            headers: { 'content-type': 'application/json'},
          };
          console.log(options)
          axios.request(options).then(
            (Response) => {
              console.log(Response.data.data);
              this.setState({List:Response.data.data})
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
            <div><h1>Registered Patients Record</h1></div>
<div className="App">
            
            <table>
              <tr>
                <th>FirstName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Disease</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Contact</th>
                <th>Date of Registration</th>
      
              </tr>
              <tr>
                <td>Anu</td>
                <td>19</td>
                <td>Female</td>
                <td>Cpy</td>
                <td>Fracture</td>
                <td>Ortho</td>
                <td>RaviShankar</td>
                <td>9544332211</td>
                <td>2022-11-18</td>
              </tr>
              {this.state.List.map((list) => { 
                return(
                  <tr>
                  <td>{list.name}</td>
                  <td>{list.age}</td>
                  <td>{list.gender}</td>
                  <td>{list.address}</td>
                  <td>{list.disease}</td>
                  <td>{list.department}</td>
                  <td>{list.doctor}</td>
                  <td>{list.contact}</td>
                 <td>{list.date}</td>
                  
                </tr>
                )
              
              })}
            </table>
          </div>
          </div>
        
          )
        }
    }
    export default PatientRecords;