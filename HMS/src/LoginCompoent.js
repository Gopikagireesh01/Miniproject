import React from 'react';
import "../src/LoginComponent.css"
import  Logo from "../src/Image.png"
import { Link,Navigate ,useParams} from 'react-router-dom';
import axios from "axios";

class LoginCompoent extends React.Component {

    componentDidMount() {
        console.log(window.location.href.split('/')[4], "");
        this.setState({usertype:window.location.href.split('/')[4]}) 
        };
    
    constructor() {
        super();
        this.state = {
            Username: { name: 'Username', value: '', error: '' },
            password: { name: 'password', value: '', error: '' },
            usertype:"",
            user: false,

        }
    }

    render() {
        // const params = useParams(); 
        // console.log(user,"user")
        var val = `/signup/${this.state.usertype}`
        var pathnew = `/profile/${this.state.usertype}/${this.state.Username.value}`
        const { Username, password, rememberMe } = this.state;
        return (
            <div className='maindiv'>
                <div className='div1'>
                <img className='logo' src={Logo}/>
                </div>
                <form className='form' onSubmit={this.onSubmit}>
                    <h3>Hi {this.state.usertype}!</h3>
                    <div>
                        <label>Username *</label>
                        <br />
                        <input
                            className='input'
                            placeholder="Please enter your email"
                            type="Username"
                            name={Username.name}
                            value={Username.value}
                            onChange={this.onChange}
                        />
                        <div style={{ color: 'red' }}>
                            {Username.error.length > 0 && Username.error}
                        </div>
                    </div>
                    <br />
                    <div>
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
                        <div style={{ color: 'red' }}>
                            {password.error.length > 0 && password.error}
                        </div>
                    </div>
                    <br />
                    <div>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    {this.state.user && (
          <Navigate to={pathnew} replace={true} />
        )}
                    {this.state.usertype != "admin" &&(<Link to = {val} ><h4> SignUp</h4></Link>)}
                    {/* <Link to="/signup/doctor" ><h4>Doctor's SignUp</h4></Link> */}
                </form>
            </div>

        )
    }

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name !== this.state.Username.name && name !== this.state.password.name) {
            value = e.target.checked;
        }

        this.setState({ [name]: { ...this.state[name], value } });
    }

    validateForm = () => {
        const { Username, password } = this.state;

        let status = true;
        if (Username.value.length === 0) {
            status = false;
            this.setState({ Username: { ...Username, error: 'Please enter a valid value' } })
        } else {
            this.setState({ Username: { ...Username, error: '' } })
        }

        if (password.value.length === 0) {
            status = false;
            this.setState({ password: { ...password, error: 'Please enter a valid value' } })
        } else {
            this.setState({ password: { ...password, error: '' } })
        }

        return status;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const validationStatus = this.validateForm();
        if (validationStatus === true) {
            const { Username, password, rememberMe } = this.state;
            const model = {
                Username: Username.value,
                password: password.value,
                type: this.state.usertype
            }
            console.log(model);
            const options = {
                params: {
                    username: this.state.Username.value,
                    password: this.state.password.value,
                    type: this.state.usertype
                },
                method: 'GET',
                url: `http://localhost:8000//login/patient`,
                headers: { 'content-type': 'application/json'},
              };
              console.log(options)
              axios.request(options).then(
                (Response) => {
                  console.log(Response.data);
                  if (Response.data.Status == "success") {
                    localStorage.setItem("username", this.state.Username.value);
                    localStorage.setItem("password", this.state.password.value);
                    this.setState({user: true})
                  }
                  
                //   this.props.history.push(`/adminpatient`);
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

    }
}

export default LoginCompoent;