import React, { Component } from 'react';
import './style.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            form_login: {
                username: '',
                password: '',
                error: ''
            },
            form_signup: {
                username: '',
                email: '',
                password: '',
                confirmpassword: '',
                error: ''
            },
            typePage: 1
            
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.login = this.login.bind(this);
        this.dadosLogin = this.dadosLogin.bind(this);
        this.dadosSignUp = this.dadosSignUp.bind(this);

    }

    dadosLogin(e){
        let formulario = this.state.form_login;
        formulario[e.target.name] = e.target.value;

        console.log(formulario);

        this.setState({form: formulario});
    }

    dadosSignUp(e){
        let formulario = this.state.form_signup;
        formulario[e.target.name] = e.target.value;
        this.setState({form: formulario});
    }

    cadastrar(){
    };

    login(){
        let state = this.state;

        state.form_login.error = "";
        this.setState(state);

        if(state.form_login.username === ""){
            state.form_login.error = 'Necessário informar o Username.\n';
            this.setState(state);
        }

        else if(state.form_login.password === ""){
            state.form_login.error = 'Necessário informar o Password.\n';
            this.setState(state);
        }
        else{
            let url = "https://localhosr:3001/users/username=" + state.form_login.username;
            fetch(url)
                .then((r) => r.json())
                    .then((json) => {
                        if(state.form_login.password === json.password){
                            this.props.logon = true;
    
                        }
                        else{
                            state.form_login.error = 'Senha incorreta';
                            this.setState(state);
                        }
                    });
        }
    };

    render(){
        return(
            <section className='forms-section'>
                {this.state.typePage === 1 &&
                <div className='forms'>
                    <div className='form-wrapper is-active'>
                        <button type='button' className='switcher switcher-login' onClick={() => this.setState({typePage: 1})}>
                            Login
                            <span className='underline'></span>
                        </button>
                        <form className='form form-login'>
                            <fieldset>
                                <legend>Please enter your username and password for login</legend>
                                {this.state.form_login.error && <p className='error_message'>{this.state.form_login.error}</p>}
                                <div className='input-block'>
                                    <label htmlFor='login-username'>Username</label>
                                    <input type='text' id='login-username' name='username' onChange={this.dadosLogin} required/>
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='login-password'>Password</label>
                                    <input type='password' id='login-password' name='password' onChange={this.dadosLogin} required/>
                                </div>
                            </fieldset>
                            <button type='button' onClick={this.login} className='btn-login'>Login</button>
                        </form>
                    </div>
                    <div className='form-wrapper'>
                        <button type='button' className='switcher switcher-signup' onClick={() => this.setState({typePage: 2})}>
                            Sign Up
                            <span className='underline'></span>
                        </button>
                        <form className='form form-signup'>
                            <fieldset>
                                <legend>Please, enter your email, username, password and password confirmation for sign up.</legend>
                                <div className='input-block'>
                                    <label htmlFor='signup-username'>Username</label>
                                    <input type='text' id='signup-username' name='username' onChange={this.dadosSignUp} required />
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='signup-email'>Email</label>
                                    <input type='email' id='signup-email' name='email' onChange={this.dadosSignUp} required />
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='signup-password'>Password</label>
                                    <input type='password' id='signup-password' name='password' onChange={this.dadosSignUp} required />
                                </div>
                                <div className='input-block'>
                                    <label htmlFor='signup-confirmpassword'>Confirm Password</label>
                                    <input type='password' id='signup-confirmpassword' name='confirmpassword' onChange={this.dadosSignUp} required /> 
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                }
                {this.state.typePage === 2 &&
                <div className='forms'>
                <div className='form-wrapper'>
                    <button type='button' className='switcher switcher-login' onClick={() => this.setState({typePage: 1})}>
                        Login
                        <span className='underline'></span>
                    </button>
                    <form className='form form-login'>
                        <fieldset>
                            <legend>Please enter your username and password for login</legend>
                            <div className='input-block'>
                                <label htmlFor='login-username'>Username</label>
                                <input type='text' id='login-username' name='username' onChange={this.dadosLogin} required />
                            </div>
                            <div className='input-block'>
                                <label htmlFor='login-password'>Password</label>
                                <input type='password' if='login-password' name='password' onChange={this.dadosLogin} required />
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className='form-wrapper is-active'>
                    <button type='button' className='switcher switcher-signup' onClick={() => this.setState({typePage: 2})}>
                        Sign Up
                        <span className='underline'></span>
                    </button>
                    <form className='form form-signup'>
                        <fieldset>
                            <legend>Please, enter your email, username, password and password confirmation for sign up.</legend>
                            {this.state.form_signup.error && <p className='error_message'>{this.state.form_signup.error}</p>}
                            <div className='input-block'>
                                <label htmlFor='signup-username'>Username</label>
                                <input type='text' id='signup-username' name='username' onChange={this.dadosSignUp} required />
                            </div>
                            <div className='input-block'>
                                <label htmlFor='signup-email'>Email</label>
                                <input type='email' id='signup-email' name='email' onChange={this.dadosSignUp} required />
                            </div>
                            <div className='input-block'>
                                <label htmlFor='signup-password'>Password</label>
                                <input type='password' id='signup-password' name='password' onChange={this.dadosSignUp} required />
                            </div>
                            <div className='input-block'>
                                <label htmlFor='signup-confirmpassword'>Confirm Password</label>
                                <input type='password' id='signup-confirmpassword' name='confirmpassword' onChange={this.dadosSignUp} required /> 
                            </div>
                        </fieldset>
                        <button type='button' className='btn-signup' onClick={this.cadastrar} >Sign Up</button>
                    </form>
                </div>
            </div>
                }    
            </section>
        );
    }
}

export default Login;

