import React from 'react';
import { Link } from 'react-router-dom';
// import history from 'history'
import "../src/Home.css"
// import  Image from "../src/image.jpeg"
import Admin from "../src/admin.jpg"
import Patient from "../src/pat.png"
import Doctor from "../src/doc.jpg"
import mainimg from "../src/doctorface.jpg"
import app from "../src/appointment.jpg"
import homeimg from "../src/image.jpeg"
import { withAlert } from 'react-alert'

class Home extends React.Component {

    // routeChange=()=> {
    //     console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    //     // let path = `newPath`;
    //     let navigate = Navigate();
    //     navigate('/signup/patient');
    //   }

    render() {

        const alert = this.props.alert;
        return (
            <div className='divhome'>
                <header className="headerdiv">
                    <div class="col-containers">
                    <button style={{backgroundColor:'red', marginRight: "5%"}} className="colh" onClick={() => {
                            console.log("appoint")
                        }}>
                            <Link to="/appointment" ><h4>Take an appointment Now</h4></Link>
                            <img className='img' alt="" src={app} />
                        </button>
                        <button className="colh" >
                        <Link to="/login/patient" ><h4>Patient</h4></Link>
                            {/* <h4>Patient</h4> */}
                            <img className='img' alt="" src={Patient} />
                        </button>

                        <button className="colh">
                            {/* <h4>Doctor</h4> */}
                            <Link to="/login/doctor"><h4>Doctor</h4></Link>
                            <img className='img' alt='' src={Doctor} />
                        </button>

                        <button className="colh">
                            {/* <h4>Admin</h4> */}
                            <Link to="/login/admin"><h4>Admin</h4></Link>
                            <img className='img' alt="" src={Admin} />
                        </button>
                    </div>
                </header>
                <div className='homeimg'>
                    <img className='imghome' alt="" src={homeimg} />
                    <div className='center__text'>
                    <p className='heading'>HOSPITAL MANAGEMENT SYSTEM</p>
                    </div>
                    
                </div>
                {/* <div className='Pages'>
                    <div className='col-cont2'>
                        <div className="col" style={{ width: '90%', marginBottom: '10%' }}>
                            <h2>Hi Admin</h2>
                            <img className='img' alt="" src={Admin} />
                            <button>SignUp</button>
                            <button>SignIn</button>
                        </div>

                        <div className="col" style={{ width: '90%' ,marginBottom: '10%'}}>
                            <h2>Hi Patient</h2>
                            <img className='img' alt="" src={Patient} />
                        </div>

                        <div className="col" style={{ width: '90%',marginBottom: '10%'}}>
                            <h2>Hi Doctor</h2>
                            <img className='img' alt='' src={Doctor} />
                        </div>
                    </div >
                        <div className='col-cont2' style={{ margin: 0}}>
                                <img className='imgs' alt="" src={mainimg} />
                        </div>
                        <div className='col-cont2'>
                            <div className='Appointment'>
                                <h2>Take an appointment Now</h2>
                                <img className='img' alt="" src={app} />
                            </div>
                        </div> */}
                {/* </div> */}
            </div>


        )
    }
}
export default Home;