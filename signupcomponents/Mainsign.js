import React, { Component } from 'react';
import Signcompor from './Signcompor';
import Login from "./Login"


export class Mainsign extends Component {
  constructor(props){
    super(props);
    this.state=({
      signup:true
    })
  }
  handlelogin1=()=>{
    // console.log("login")
    this.setState({signup:false})
    console.log(this.state.signup);
  }
  render() {
    return (
      <div className='signup_main text-light '>
        <form action="">
          <div className="container-fluid">
            <div className="row">


              <div className="left col-md-6">
                <div className="containers1 ">
                  <h3 className="superlist fs-4"> <i className='supericon fas fa-star star-icon fs-4'></i > SuperList</h3>
                  <h1 className="30-dat-trial fs-3">Start your 30-day Trial</h1>
                </div>
                <div className="containers2">
                  <i className="person fas fa-users people-icon" ></i>
                  <h1 className="intive_head">incite ultimited colleges</h1>
                  <h1 className="intive_des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum!</h1>
                </div>
                <div className="containers3">
                  <i className="correct bi bi-check check-icon"></i>
                  <h1 className="correct_head">Ensure Complience</h1>
                  <h1 className="correct_des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum!</h1>
                </div>
                <div className="containers4">
                  <i className="secure bi bi-lock lock-icon"></i>
                  <h1 className="secure_head">Buit-in Security</h1>
                  <h1 className="secure_des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rerum!</h1>
                </div>
                <div className="containers5 mt-5">
                  <h1 className="terms">Terms</h1>
                  <h1 className="privacy">Privacy</h1>
                  <select className='language bg-dark pl-1' name="" id="">
                    <option value="" className="opt1 ">
                      <i className='global bi bi-globe globe-icon '> English</i>
                    </option>
                  </select>
                </div>
              </div>



              <div className="right col-md-6 text-center ">
                {/* <Signcompor ></Signcompor> */}
                {this.state.signup? <Signcompor handlelogin={this.handlelogin1}/>:<Login/>}

              </div>
            </div>

          </div>
        </form>

      </div>
    )
  }
}

export default Mainsign
