import { useState } from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../scripts/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await login(username, password);
      if (response && response.key) {
        localStorage.setItem('authToken', response.key);
        history('/dashboard')
        // Redirect or perform other actions upon successful login
      } else {
        // Handle other cases, e.g., invalid credentials
        Swal.fire({
          title: 'Error!',
          text: 'Invalid credentials',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    } catch (error) {
      // Handle error cases, e.g., network error
      Swal.fire({
          title: 'Error!',
          text: 'Invalid credentials',
          icon: 'error',
          confirmButtonText: 'OK'
        })
    }
  };

  return (
    <div className="uk-card uk-card-default uk-card-body container">
      <div className="uk-container uk-container-small">
        <div className="uk-text-center">
          <h2>Monster's College</h2>
          <div>P.O. Box 283 8562 Fusce Rd.</div>
        </div>
      </div>
      <div className="uk-margin-top">
        <div md={6} className="uk-text-center">
          <form>
            <div className="uk-margin">
              <input
                className="uk-input uk-form-width-large loginText uk-form-large"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                aria-label="Large"
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input uk-form-width-large loginText uk-form-large"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                aria-label="Large"
              />
            </div>
            <div>
              <a href="#" className="uk-link-muted uk-margin-top">Forgot Password? Click Here</a>
              <br />
              <button onClick={loginUser} className="uk-button uk-button-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
