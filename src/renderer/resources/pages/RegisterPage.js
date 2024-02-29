import React, { useState } from 'react';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import '../../App.css';
import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../scripts/AuthProvider';


export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    specialization: '',
    registrationNo: '',
    estd: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    country: ''
  });
  const [userLogin, setUserLogin] = useState({
    email:"",
    username:"",
    password:"",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl + '/api/parent-register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Successfully created the ParentOrganization
        UIkit.notification({
          message: 'Organization registered successfully!',
          status: 'success'
        });
        // You can redirect the user to another page if needed
      } else {
        // Error occurred while registering the organization
        UIkit.notification({
          message: 'Failed to register organization. Please try again.',
          status: 'danger'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
return (
<div className="uk-card uk-card-default uk-card-body container">
  <h3 className="uk-card-title">Welcome!</h3>
  <p>Thank you for choosing <img className='inLineImage' src={logo}></img> Please enter organization details to
    continue!</p>
  <div data-uk-grid>
    <div className="uk-width-1-2@s">
      <input className="uk-input" value={formData.organizationName} onChange={handleChange} placeholder='Organization Name' type="text"></input>
      <input className="uk-input" value={formData.specialization} onChange={handleChange} placeholder='Specialization' type="text"></input>
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <input className="uk-input" value={formData.registrationNo} onChange={handleChange} type="text" placeholder="Registeration No" aria-label="50"></input>
        </div>
        <div className="uk-width-1-2@s">
          <input className="uk-text" type="date" uk-datepicker="{format:'DD.MM.YYYY'}" value={formData.estd} onChange={handleChange} placeholder="ESTD in" aria-label="50"></input>
        </div>
      </div>
      <input className="uk-input" placeholder='Address' value={formData.address} onChange={handleChange} type="text"></input>
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" value={formData.city} onChange={handleChange} placeholder="City" aria-label="50"></input>
        </div>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" value={formData.pincode} onChange={handleChange} placeholder="Pincode" aria-label="50"></input>
        </div>
      </div>
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" value={formData.state} onChange={handleChange} placeholder="State" aria-label="50"></input>
        </div>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" value={formData.country} onChange={handleChange} placeholder="Country" aria-label="50"></input>
        </div>
      </div>
      <h3>Already User?<Link to={"/login"}> Login Here</Link></h3>
    </div>
    <div className="uk-width-1-2@s">
      <input className="uk-input" placeholder='Administrator Email' type="text"></input>
      <input className="uk-input" placeholder='Administrator Username' type="text"></input>
      <input className="uk-input" placeholder='Create Password' type="password"></input>
      <input className="uk-input" placeholder='Confirm Password' type="password"></input>
      <div><input className="uk-checkbox" type="checkbox"></input>   By clicking this, I agree to the Terms and Conditions</div>
      <div>
      <Link to={'/login'}  className="uk-button uk-button-primary">Sign in</Link></div>
      </div>
  </div>
</div>
)
}
