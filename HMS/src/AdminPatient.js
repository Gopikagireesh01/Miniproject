import React from 'react';
import "../src/Admin.css"
import  admin from "../src/admin.jpg"
import  Records from "../src/records.png"
import  Register from "../src/Register.png"
import { Link } from 'react-router-dom';

class AdminPatient extends React.Component {
    render() {
        
        return (
            <div>
                 <div className='div1'>
                <img className='Admin' alt="" src={admin}/>
                </div> 
                <div class="col-container">
  <div className="col">
    <h2>Patient records</h2>
    <img className='img' alt="" src={Records}/>
    <Link to="/records/patient">click here</Link>
  </div>

  <div className="col">
    <h2>Register Patient</h2>
    <img className='img' alt='' src={Register}/>
    <Link to="/signup/patient">click here</Link>
  </div>

</div>
               
            </div>
        )
    }
}
export default AdminPatient;