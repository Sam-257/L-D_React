import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
const Form = () => {

  const defaultFormData =  {
    title: '',
    name: '',
    age:'',
    email:'',
    dob: '',
    gender:'',
    fileUpload:'',
    language: [],
    address: '',
  };
  const [formData,setFormData] = useState(defaultFormData);
  const [errors,setErrors] = useState({});
  const [canSubmit,setCanSubmit] = useState(false);
  const [dataSubmitted,setDataSubmitted] = useState('');

  const handleChange = (e) => {
    const { name, value,type, checked} = e.target;
    setFormData({...formData, [name]: type === 'checkbox' ? (checked ? [...formData.language,value] : formData.language.filter((data) => data !== value)) : value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(formData));
    setCanSubmit(true);
    
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && canSubmit){
      console.log(formData)
      setDataSubmitted('Your Data has been submitted.')
      setFormData(defaultFormData);
    }
  },[canSubmit,errors])

  const validate = (data) => {
    const error = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ ;
    if (!data.title){
      error.title = "Title is required."
    }
    if (!data.name){
      error.name = "Name is required."
    }
    if (!data.age){
      error.age = "Age is required."
    }
    if (!data.email){
      error.email = "Email is required."
    } else if(!regex.test(data.email)){
      error.email = "Enter a valid email."
    }
    if (!data.dob){
      error.dob = "Date of Birth is required."
    }
    if (!data.gender){
      error.gender = "Gender is required."
    }
    if (!data.fileUpload){
      error.fileUpload = "Identification proof is required."
    }
    if (data.language.length === 0){
      error.language = "Language is required."
    }
    if (!data.address){
      error.address = "Address is required."
    }
    return error;
  }

  return (
    <div className="container">
      <h3 className="mt-3"> DIFFERENT FORM INPUTS</h3>
      <div className="container mt-3">
        <div className="form-group">
          <label className="text-secondary">Title:</label>
          <select className="form-control" name="title" id="title" value={formData.title} onChange={handleChange}>
            <option value=""></option>
            <option value="mr">Mr.</option>
            <option value="mrs.">Mrs.</option>
            <option value="ms">Ms.</option>
            <option value="dr">Dr.</option>
            <option value="prof">Prof.</option>
          </select>
          <span className="text-danger">{errors.title}</span>
        </div>
        <div className="form-group">
          <label className="text-secondary">Name:</label>
          <input type="text" className="form-control" name="name" id="name" value={formData.name} onChange={handleChange} />
          <span className="text-danger">{errors.name}</span>
        </div>
        <div className="form-group">
          <label className="text-secondary">Age:</label>
          <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} />
          <span className="text-danger">{errors.age}</span>
        </div>
        <div className="form-group">
          <label className="text-secondary">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          <span className="text-danger">{errors.email}</span>
        </div>
        <h6 className="mt-3 text-secondary">Date of Birth:</h6>
        <DatePicker selected={formData.dob} onChange={(date) => setFormData({...formData,dob: date})} />
        <div className="text-danger">{errors.dob}</div>
        <h6 className="mt-3 text-secondary">Gender:</h6>
        <div className="form-check form-check-inline">
          <input onChange={handleChange}  type="radio" className="form-check-input" id="male" name="gender" value="Male" />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input onChange={handleChange} type="radio" className="form-check-input" id="female" name="gender" value="Female" /> 
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input onChange={handleChange} type="radio" className="form-check-input" id="other" name="gender" value="Other" /> 
          <label className="form-check-label">Other</label>
        </div>
        <div className="text-danger">{errors.gender}</div>
        <div className="form-group">
          <label className="text-secondary mb-1">Identification Proof Upload: </label><br />
          <input type="file" className="form-control-file" id="fileUpload" name="fileUpload" value={formData.fileUpload} onChange={ handleChange } />
          <div className="text-danger">{errors.fileUpload}</div>
        </div>
        <h6 className="mt-3 text-secondary">Languages known: </h6>
        <div className="form-check form-check-inline">
          <input type="checkbox" onChange={handleChange} className="form-check-input" id="english" name="language" value="English" />
          <label className="form-check-label">English</label>
        </div>
        <div className="form-check form-check-inline mb-2">
          <input type="checkbox" onChange={handleChange} className="form-check-input" id="hindi" name="language" value="Hindi" />
          <label className="form-check-label">Hindi</label>
        </div>
        <div className="form-check form-check-inline mb-2">
          <input type="checkbox" onChange={handleChange} className="form-check-input" id="telugu" name="language" value="Telugu" />
          <label className="form-check-label">Telugu</label>
        </div>
        <div className="text-danger">{errors.language}</div>

        <div className="form-group">
          <label className="text-secondary">Address:</label>
          <textarea className="form-control" id="address" name="address" onChange={handleChange} value={formData.address}></textarea>
          <span className="text-danger">{errors.address}</span>
        </div>
        <div className="form-group text-center">
          <button className="btn btn-primary" onClick={handleSubmit}> Submit </button>
        </div>
        <div className="text-success text-center">
          {dataSubmitted}
        </div>
      </div>
    </div>
  );
};

export default Form;
