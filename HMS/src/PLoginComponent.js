import React from 'react';
import "../src/PLoginComponent.css"
import  Logo from "../src/Image.png"

class PloginCompoent extends React.Component {
    constructor() {
        super();
        this.state = {
            Username: { name: 'Username', value: '', error: '' },
            password: { name: 'password', value: '', error: '' },
            rememberMe: { name: 'rememberMe', value: false, error: '' },
        }
    }

    render() {
        const { Username, password, rememberMe } = this.state;
        return (
            <div className='maindiv'>
                <div className='div1'>
                <img className='logo' src={Logo}/>
                </div>
                <form className='form' onSubmit={this.onSubmit}>
                    <h3>HI PATIENT!</h3>
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
                        <label>
                            <input
                                type="checkbox"
                                name={rememberMe.name}
                                checked={rememberMe.value}
                                onChange={this.onChange}
                            />
                            Remember me?
                        </label>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
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
                rememberMe: rememberMe.value
            }
            console.log(model);
        }

    }
}

export default PloginCompoent;