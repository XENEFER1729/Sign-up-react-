import React, { Component } from 'react'

export class Signcompor extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            user_name:"",
            email:"",
            password:""
        }
    }
    handleonchange1=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState((prev)=>{
            return {...prev, [name] :value}
        })
        
        
    }

    handleonsignupclick=(event)=>{
        event.preventDefault()
        // console.log("sign up")
        console.log(this.state.first_name)
        console.log(this.state.last_name)
        console.log(this.state.user_name)
        console.log(this.state.email)
        console.log(this.state.password)
    }

    render() {
        
        return (
            <div>


                <div className="sub-right container-fluid">
                    <div className="containerr1">
                        <h1 className="register_head" style={{ fontSize: "18px" }}>Register with:</h1>
                    </div>
                    <div className="containerr2 row">
                        <button className="email">
                            <i className="google_icon fab fa-google"></i>
                            <h1 className="google">Google</h1>
                        </button>
                        <button className="github">
                            <i className="github_icon fab fa-github"></i>
                            <h1 className="githubname">Github</h1>
                        </button>
                        <button className="facebook ">
                            <i className="facebook_icon fab fa-facebook"></i>
                            <h1 className="facebookname">Facebook</h1>
                        </button>
                    </div>
                    <hr />

                    <div className="containerr3">
                        <label htmlFor="" className="first_name">
                            <h1 className="f_name">
                                First Name
                            </h1>
                            <input type="text" onChange={this.handleonchange1} name='first_name' className="first_name_input" placeholder='First Name' />
                        </label>
                        <label htmlFor="" className="last_name" >
                            <h1 className="l_name">
                                Last Name
                            </h1>
                            <input type="text" onChange={this.handleonchange1} name='last_name' className="last_name_input" placeholder="Last Name" />
                        </label>
                    </div>

                    <div className="containerr4">
                        <label className="user_name">
                            <h1 className="u_name">
                                User Name
                            </h1>
                            <input type="text" className="user_name_input" name='user_name' onChange={this.handleonchange1} placeholder='User Name' />
                        </label>
                    </div>
                    <div className="containerr5">
                        <label className="email2">
                            <h1 className="e_name">
                                Email
                            </h1>
                            <input type="eamil" className="email_input" name='email' placeholder='Email' onChange={this.handleonchange1} />
                        </label>
                    </div>
                    <div className="containerr6">
                        <label className="password">
                            <h1 className="p_name">
                                Password
                            </h1>
                            <input type="password" onChange={this.handleonchange1} name='password' className="password_input" placeholder='Password' />
                        </label>
                        <h1 className="pass_des" style={{ opacity: "0.7" }}>Minimum length 8 characters</h1>
                    </div>
                    <div className="containerr7">
                        <button className="signin fs-5" onClick={this.handleonsignupclick} style={{ width: "100%" }}>Sign Up</button>
                        <div className="sign_des">
                            <span className="signin_des1">Lorem ipsum dolor sit amet.</span>
                            <a className='terms_link text-primary' href="">Terms of Service.</a>
                            <span className="signin_des2">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="containerr8">
                        <h1 className="already_acc">Already have an account?
                            <a href="#" className="Login text-primary" onClick={this.props.handlelogin}>Login</a>
                        </h1>
                    </div>
                </div>

            </div>

        )
    }
}

export default Signcompor
