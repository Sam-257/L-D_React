import React, { useState, useEffect } from "react";
import './index.css';
import Axios from "axios";

const Add = () => {

  // const [user_name,setuser_name] = useState('');
  // const [user_email,setuser_email] = useState('');
  // const [user_password,setuser_password] = useState('');
  // const [verify_password,setverify_password] = useState('');
  // const [user_address,setuser_address] = useState('');  

  const initialUserData = {
    "user_name": '',
    "user_email": '',
    "user_password": '',
    "user_address": '',
  };
  const [userData, setUserData] = useState(initialUserData);
  const [verify_password,setVerify_password] = useState('');
  const [errors,setErrors] = useState({});
  const [canSubmit,setCanSubmit] = useState(false);

  const handleChange = (e) =>{
    let { name, value} = e.target
    setUserData({...userData, [name]:value});
    //console.log(userData);
    
  }


  const submit = (e) => {
    e.preventDefault();   //To make sure that the page doesn't reload
    setErrors(validate(userData));
    setCanSubmit(true);
  }

  useEffect(() => {
    //console.log(errors);
    if(Object.keys(errors).length === 0 && canSubmit){
      //console.log(userData);
      Axios.post('http://localhost:3002/add',userData)
    .catch(function (error) {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

  })
    .then(() => {
      console.log('post request sent');
    })
    }
  },[canSubmit, errors]);

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ ;
    if (!values.user_name){
      error.user_name = "Name is required."
    }
    if (!values.user_email){
      error.user_email = "Email is required."
    } else if(!regex.test(values.user_email)){
      error.user_email = "Enter a valid email."
    }
    if (!values.user_password){
      error.user_password = "Password is required."
    }
    if (!verify_password){
      error.verify_password= "Confirm password is required."
    } else if(values.user_password !== verify_password){
      error.verify_password= "Password and confirm password are not same."
    }

    if (!values.user_address){
      error.user_address = "Address is required."
    }
    return error;

  }


  return (
    <div className="container mt-5">
      <h1 className="text-center">Add</h1>
      {/* <pre>{ JSON.stringify(userData,undefined,2)} "verify_password": {verify_password}</pre> */}
      <div className="card m-5">
        <div className="card-body m-2">
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="user_name" placeholder="Enter your name" value={userData.user_name} onChange={ handleChange } />
              <small className="text-danger"> { errors.user_name } </small>
            </div>
            <div className="form-group">
              <label> Email:</label>
              <input type="text" className="form-control" name="user_email" placeholder="Enter your email" value={userData.user_email} onChange={ handleChange }/>
              <small className="text-danger"> { errors.user_email } </small>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" name="user_password" placeholder="Enter your password" value={userData.user_password} onChange={ handleChange }/>
              <small className="text-danger"> { errors.user_password } </small>
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" className="form-control" name="verify_password" placeholder="Re-enter your password" value={verify_password} onChange={(e) => setVerify_password(e.target.value)}/>
              <small className="text-danger"> { errors.verify_password } </small>
            </div>
            <div className="form-group">
              <label >Address</label>
              <textarea className="form-control" name="user_address" placeholder="Enter Your address" value={userData.user_address} onChange={ handleChange }/>
              <small className="text-danger"> { errors.user_address } </small>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary"> Add </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
