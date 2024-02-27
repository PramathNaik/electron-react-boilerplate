import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"

export const LoginPage = () => {
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
    <div class="uk-margin">
        <input class="uk-input uk-form-width-large loginText uk-form-large" type="text" placeholder="Username" aria-label="Large"></input>
    </div>
    <div class="uk-margin">
        <input class="uk-input uk-form-width-large loginText uk-form-large" type="password" placeholder="password" aria-label="Large"></input>
    </div>
    <div><a href="#" className="uk-link-muted uk-margin-top">Forgot Password? Click Here</a>
      <Link to={"/dashboard"} className="uk-button  uk-button-primary">Login</Link>
      </div>

    </form>
  </div>
</div>
</div>
)
}
