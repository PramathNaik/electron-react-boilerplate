import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import '../../App.css';
import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';


export const RegisterPage = () => {
return (
<div className="uk-card uk-card-default uk-card-body container">
  <h3 className="uk-card-title">Welcome!</h3>
  <p>Thank you for choosing <img className='inLineImage' src={logo}></img> Please enter organization details to
    continue!</p>
  <div data-uk-grid>
    <div className="uk-width-1-2@s">
      <input className="uk-input" placeholder='Organization Name' type="text"></input>
      <input className="uk-input" placeholder='Specialization' type="text"></input>
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" placeholder="Registeration No" aria-label="50"></input>
        </div>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" placeholder="ESTD in" aria-label="50"></input>
        </div>
      </div>
      <input className="uk-input" placeholder='Address' type="text"></input>
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" placeholder="City" aria-label="50"></input>
        </div>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" placeholder="Pincode" aria-label="50"></input>
        </div>
      </div>
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" placeholder="State" aria-label="50"></input>
        </div>
        <div className="uk-width-1-2@s">
          <input className="uk-input" type="text" placeholder="Country" aria-label="50"></input>
        </div>
      </div>
      <h3>Already User? Login Here</h3>
    </div>
    <div className="uk-width-1-2@s">
      <input className="uk-input" placeholder='Administrator Email' type="text"></input>
      <input className="uk-input" placeholder='Administrator Username' type="text"></input>
      <input className="uk-input" placeholder='Create Password' type="password"></input>
      <input className="uk-input" placeholder='Confirm Password' type="password"></input>
      <input className="uk-checkbox" type="checkbox"></input>By clicking this, I agree to the Terms and Conditions
      <Link to={'/login'}  class="uk-button uk-button-primary">Sign in</Link>
      </div>
  </div>
</div>
)
}
