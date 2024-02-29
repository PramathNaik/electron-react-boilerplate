import React, { useState } from 'react';

export const LOA = () => {
  const [formData, setFormData] = useState({
    name: '',
    ref_code: '',
    depreciation: '',
    description: '',
    opening_balance: 0,
    parent_account: 'Assets',
    organization: 'org1' // Default organization
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (

    <div className='container' >

    <button uk-toggle="target: #my-id" type="button" className="uk-button uk-button-primary ">New Account</button>
      <ul uk-tab="{connect:'#mydata'}" className='uiTabs'>
        <li><a href="">List of Account</a></li>
        <li><a href="">Account Groups</a></li>
        <li><a href="">Opening Balances</a></li>
        <li><a href="">Re-arrange Accounts</a></li>
      </ul>
      <ul id="mydata" className="uk-switcher">
      <li>
      <div className="uk-grid-small uk-child-width-1-5@s" data-uk-grid>
    <div>
        <div className="">Assets</div>

    </div>
    <div className="">
        <div className="">Liabilities</div>
    </div>
    <div>
        <div className="">Revenue</div>
    </div>
    <div>
        <div className="">Expenses</div>
    </div>
    <div className="">
        <div className="">Equity</div>
    </div>

</div>
</li>
      <li>

      <table className="uk-table  uk-table-divider">
    <thead>
        <tr>
            <th>Group Name</th>
            <th>Parent Account</th>
            <th>Report View</th>
            <th></th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>

</table></li>
      <li><table className="uk-table uk-table-divider">
    <thead>
        <tr>
            <th>Group Name</th>
            <th>Parent Account</th>
            <th>Opening Balances</th>
            <th></th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>

</table></li>
      <li></li>

    </ul>
    <div id="my-id" data-uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title"></h2>
        <div className="uk-container">
      <h2>Account Form</h2>
      <form className="uk-form-stacked" >
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="name">Name:</label>
          <div className="uk-form-controls">
            <input className="uk-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} maxLength="250" />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="ref_code">Reference Code:</label>
          <div className="uk-form-controls">
            <input className="uk-input" type="text" id="ref_code" name="ref_code" value={formData.ref_code} onChange={handleChange} maxLength="250" />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="depreciation">Depreciation:</label>
          <div className="uk-form-controls">
            <input className="uk-input" type="text" id="depreciation" name="depreciation" value={formData.depreciation} onChange={handleChange} maxLength="250" />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="description">Description:</label>
          <div className="uk-form-controls">
            <textarea className="uk-textarea" id="description" name="description" value={formData.description} onChange={handleChange} rows="4" cols="50"></textarea>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="opening_balance">Opening Balance:</label>
          <div className="uk-form-controls">
            <input className="uk-input" type="number" id="opening_balance" name="opening_balance" value={formData.opening_balance} onChange={handleChange} />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="parent_account">Parent Account:</label>
          <div className="uk-form-controls">
            <select className="uk-select" id="parent_account" name="parent_account" value={formData.parent_account} onChange={handleChange}>
              <option value="Assets">Assets</option>
              <option value="Liabilities">Liabilities</option>
              <option value="Revenue">Revenue</option>
              <option value="Expenditure">Expenditure</option>
              <option value="Equity">Equity</option>
            </select>
          </div>
        </div>




      </form>
      <div className="uk-margin">
      <button onClick={()=>handleSubmit()} className="uk-button uk-button-primary" >Submit</button>
    </div>
    </div>    </div>
</div>
    </div>
  );
};
