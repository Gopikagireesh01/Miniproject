import React from 'react';
import "../src/Admin.css"
import admin from "../src/admin.jpg"
import Patient from "../src/pat.png"
import Doctor from "../src/doc.jpg"
import Appointment from "/home/user/sample/my-app/src/appointment.jpg"
import { Link } from 'react-router-dom';
class Home extends React.Component {


  render() {

    return (
      <div>
        <div className='div1'>
          <h1>ADMIN</h1>
          <img className='Adminimage' alt="" src={admin} />
        </div>
        <div class="col-container">
          <div className="col">
            <h2>Patient</h2>
            <img className='img' alt="" src={Patient} />
            <Link to="/adminpatient">click here</Link>
          </div>

          <div className="col">
            <h2>Doctor</h2>
            <img className='img' alt='' src={Doctor} />
            <Link to="/admindoctor">click here</Link>
          </div>

          <div className="col">
            <h2>Appointment</h2>
            <img className='img' alt="" src={Appointment} />
            <Link to="/appointmentdetails">click here</Link>
          </div>
        </div>
        {/* <div className='Pages'> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='div2'>
                        <img className='Doctor' alt='' src={Doctor}/>
                        <button type="submit">Doctors</button>
                    </div>
                    <br/>
                    <br/>
                    <div className='div3'>
                        <img className='Patient' alt="" src={Patient}/>
                        <button type="submit">Patient</button>
                    </div>
                    <br/>
                    <br/>
                    <div className='div3'>
                        <img className='Appointment' alt="" src={Appointment}/>
                        <button type="submit">Signin</button>
                    </div>
                    </div> */}
      </div>
    )
  }
}
export default Home;