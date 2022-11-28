import React from 'react';
import "../src/Profile.css"
import axios from "axios";

class DoctorRecords extends React.Component {
  componentDidMount() {
    const options = {
       method: 'GET',
    url: `http://localhost:8000/doctors/`,
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
            <div><h1>Registered Doctors Record</h1></div>
        <div className="App">
       <div>     
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
        {this.state.List.map((list) => { 
                return(
                  <tr>
                  <td>{list.name}</td>
                  <td>{list.age}</td>
                  <td>{list.gender}</td>
                  <td>{list.qualification}</td>
                  <td>{list.department}</td>
                  <td>{list.contact}</td>
                  <td>{list.address}</td>
                  <td>{list.date}</td> 
                </tr>
                )
              
              })}
      </table>
    </div>
    
      </div>
      </div>
        )
        }
}
      
    export default DoctorRecords;