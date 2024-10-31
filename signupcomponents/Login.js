import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleonchange2=(e)=>{
        // console.log("login")
        const name=e.target.name;
        const value=e.target.value;
        this.setState((prev)=>{
            return {...prev , [name]:value};
        })
    }
    handleonclicklogin=(e)=>{
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password)
    }
    render() {
        return (
            <div>

                <div className="sub-right2 container-fluid p-4">
                    <div className="containerlogin1">
                        <h1 className="login_head fs-3 mb-5">Login:</h1>
                        <h1 className="welcome_back fs-2 mb-8">Welcome Back</h1>

                    </div>
                    <div className="containerlogin2 text-start">
                        <label htmlFor="" className="l_email">
                            Email
                        </label>
                        <input type="email" className="email_input" name='email' onChange={this.handleonchange2} />


                    </div>
                    <div className="containerlogin3 text-start mb-3">
                        <label htmlFor="" className="l_pass">
                            Password
                        </label>
                        <input type="password" className="password_input" name='password' onChange={this.handleonchange2} />
                    </div>
                    <div className="containerlogin4">
                        <button className="login" onClick={this.handleonclicklogin}>
                            Login
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
