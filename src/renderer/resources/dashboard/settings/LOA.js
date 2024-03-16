import React, { useEffect, useState } from 'react';
import { authFetch } from '../../../scripts/AuthProvider';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { title } from 'process';

export const LOA = () => {
let subtitle;
const [formData1, setFormData1] = useState({
  name: '',
  parent_account: 'Assets',
  selected_account: []
});
const [selectedParentAccount, setSelectedParentAccount] = useState('Assets');
const [accounts1, setAccounts1] = useState([]);
const [selectedAccounts, setSelectedAccounts] = useState([]);
const [selectedAccountIds, setSelectedAccountIds] = useState([]);
const [groupedAccount, setGroupedAccount] = useState([])
const handleChange1 = (e) => {
  const { name, value } = e.target;
  setFormData1({
    ...formData1,
    [name]: value
  });
};

const handleParentAccountChange = async (e) => {
  const parentAccount = e.target.value;
  setSelectedParentAccount(parentAccount);
  try {
    const response = await authFetch(`/api/accounts?parent=${parentAccount}`);
    const data = await response;
    setAccounts1(data);
  } catch (error) {
    console.error("Error fetching accounts:", error);
  }
};

const handleAccountSelection = (e) => {
  const accountName = e.target.value;
  if (e.target.checked) {
    setSelectedAccounts([...selectedAccounts, accountName]);
  } else {
    setSelectedAccounts(selectedAccounts.filter(account => account !== accountName));
  }
};


const [formData, setFormData] = useState({
name: '',
ref_code: '',
depreciation: '',
description: '',
opening_balance: 0,
parent_account: 'Assets',
});
const [accounts, setAccounts] = useState([]);


const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
};

const handleSubmit = async (e) => {
e.preventDefault(); // Prevent default form submission
try {
const response = await authFetch("/api/accounts/", formData, "POST");
closeModal("newAccount");
Swal.fire({
title: 'Success!',
text: 'Account Creation Successful',
icon: 'success',
confirmButtonText: 'OK'
})

} catch (error) {
console.error("Error submitting form:", error);
Swal.fire({
title: 'Error!',
text: error,
icon: 'error',
confirmButtonText: 'OK'
})
}
};
const [activeTab, setActiveTab] = useState(0);

const [modals, setModals] = useState({
newAccount: false,
newAccountGroup: false,
newOpeningBalances: false,
rearrangeAccounts: false,
});

const openModal = (modalName) => {
setModals(prevState => ({
...prevState,
[modalName]: true
}));
};

const closeModal = (modalName) => {
setModals(prevState => ({
...prevState,
[modalName]: false
}));
};
const fetchData = async () => {
try {
const response = await authFetch("/api/accounts/");
const data = await response;
setAccounts(data);
} catch (error) {
console.error("Error fetching data:", error);
}
try {
  const response = await authFetch("/api/account-groups/");
  const data = await response;
  setGroupedAccount(data)
} catch (error) {
  console.error("Error fetching data:", error);
  }

};
useEffect(() => {
fetchData();
}, []);
const groupedAccounts = accounts.reduce((acc, account) => {
acc[account.parent_account] = acc[account.parent_account] || [];
acc[account.parent_account].push(account);
return acc;
}, {});
const handleAccountidSelection = (e) => {
  const accountId = e.target.value; // Convert to string

  if (e.target.checked) {
    setSelectedAccountIds([...selectedAccountIds, accountId]);
  } else {
    setSelectedAccountIds(selectedAccountIds.filter(id => id !== accountId));
  }

  // Update formData1 with selected account IDs
  setFormData1(prevFormData => ({
    ...prevFormData,
    selected_account: selectedAccountIds // Assuming selected_account is an array of IDs
  }));
};



const handleSubmit1 = async (e) => {
  e.preventDefault();
  console.log(formData1)
  try {
    const response = await authFetch("/api/account-groups/", formData1, "POST");
      closeModal('newAccountGroup');
      Swal.fire({
        title: 'Success!',
        text: 'Account Group Creation Successful',
        icon: 'success',
        confirmButtonText: 'OK'
      });

  } catch (error) {
    console.error("Error submitting form:", error);
    Swal.fire({
      title: 'Error!',
      text: error,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
  setFormData1({
    name: '',
    parent_account: 'Assets',
    selected_account: []
  })
  setSelectedAccountIds([])
};

return (

<div className='container'>

  {!modals.newAccount?activeTab==0?<button onClick={()=>openModal("newAccount")} type="button" className="uk-button
    uk-button-primary uk-align-right upCome">New Account</button>:"":""}
  {!modals.newAccountGroup?activeTab==1?<button onClick={()=>openModal("newAccountGroup")} type="button"
    className="uk-button uk-button-primary uk-align-right upCome">New Account Group</button>:"":""}


  <ul uk-tab="{connect:'#mydata'}" className='uiTabs'>
    <li onClick={()=> setActiveTab(0)}><a href="">List of Account</a></li>
    <li onClick={()=> setActiveTab(1)}><a href="">Account Groups</a></li>
    <li onClick={()=> setActiveTab(2)}><a href="">Opening Balances</a></li>
    <li onClick={()=> setActiveTab(3)}><a href="">Re-arrange Accounts</a></li>

  </ul>
  <ul id="mydata" className="uk-switcher">
    <li>
      <div className="uk-grid-small uk-child-width-1-5@s" data-uk-grid>
        {Object.entries(groupedAccounts).map(([parentAccount, accounts]) => (
        <div key={parentAccount}>
          <div className="">{parentAccount}</div>
          {accounts.map(account => (
          <div className='accounts' key={account.id}>{account.name}</div>
          ))}
        </div>
        ))}

      </div>
    </li>
    <li>

      <table className="uk-table rwd-table uk-table-divider">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Parent Account</th>
            <th>Report View</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
        {groupedAccount.map(account => (
          <tr key={account.id}>
            <td>{account.name}</td>
            <td>{account.parent_account}</td>
            <td>{account.is_combined_view?"Combined View":"Seprated View"}</td>
            <td></td>
          </tr>
))}
        </tbody>

      </table>
    </li>
    <li>
      <table className="uk-table rwd-table uk-table-divider">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Parent Account</th>
            <th>Opening Balances</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
        {groupedAccount.map(account => (
          <tr key={account.id}>
            <td>{account.name}</td>
            <td>{account.parent_account}</td>
            <td>{account.opening_balance}</td>
            <td></td>
          </tr>
))}

        </tbody>

      </table>
    </li>
    <li></li>

  </ul>
  <Modal isOpen={modals.newAccount} onRequestClose={()=> closeModal('newAccount')} contentLabel="New Account Modal">
    <div class="uk-container">
      <h2 class="uk-modal-title"></h2>
      <div className="uk-container upTop">
        <h2>Create account type</h2>
        <form className="uk-form-horizontal" onSubmit={(e)=>handleSubmit(e)} >
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="name">Name:</label>
            <div className="uk-form-controls">
              <input className="uk-input" type="text" id="name" name="name" value={formData.name}
                onChange={handleChange} maxLength="250" />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="parent_account">Parent Account:</label>
            <div className="uk-form-controls">
              <select className="uk-select" id="parent_account" name="parent_account" value={formData.parent_account}
                onChange={handleChange}>
                <option value="Assets">Assets</option>
                <option value="Liablities">Liablities</option>
                <option value="Revenue">Revenue</option>
                <option value="Expenditure">Expenditure</option>
                <option value="Equity">Equity</option>
              </select>
            </div>
          </div>
          <div data-uk-grid className='uk-child-width-expand@s '>

            <div className="">
              <label className="uk-form-label" htmlFor="ref_code">Reference Code:</label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-width-large" type="text" id="ref_code" name="ref_code"
                  value={formData.ref_code} onChange={handleChange} maxLength="250" />
              </div>
            </div>

            <div className="">
              <label className="uk-form-label" htmlFor="depreciation">Depreciation:</label>
              <div className="uk-form-controls">
                <input className="uk-input uk-form-width-large" type="number" id="depreciation" name="depreciation"
                  value={formData.depreciation} onChange={handleChange} maxLength="250" />
              </div>
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="description">Description:</label>
            <div className="uk-form-controls">
              <textarea className="uk-textarea" id="description" name="description" value={formData.description}
                onChange={handleChange} rows="4" cols="50"></textarea>
            </div>
          </div>

          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="opening_balance">Opening Balance:</label>
            <div className="uk-form-controls">
              <input className="uk-input" type="number" id="opening_balance" name="opening_balance"
                value={formData.opening_balance} onChange={handleChange} />
            </div>
          </div>



          <div className="uk-margin">
            <button type="submit" className="uk-button uk-button-primary upCome">Submit</button>
          </div>


        </form>


      </div>
    </div>
  </Modal>
  <Modal isOpen={modals.newAccountGroup} onRequestClose={() => closeModal('newAccountGroup')} contentLabel="New Account Group Modal">
      <div className="uk-container">
        <h2 className="uk-modal-title"></h2>
        <div className="uk-container upTop">
          <h2>Create account group</h2>
          <form className="uk-form-horizontal" onSubmit={handleSubmit1}>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="name">Name:</label>
              <div className="uk-form-controls">
                <input className="uk-input" type="text" id="name" name="name" maxLength="250" onChange={handleChange1} />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="parent_account">Parent Account:</label>
              <div className="uk-form-controls">
                <select className="uk-select" id="parent_account" name="parent_account" value={selectedParentAccount} onChange={handleParentAccountChange}>
                  <option value="Assets">Assets</option>
                  <option value="Liablities">Liablities</option>
                  <option value="Revenue">Revenue</option>
                  <option value="Expenditure">Expenditure</option>
                  <option value="Equity">Equity</option>
                </select>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Accounts:</label>
              <div className="uk-form-controls">
              <table className="uk-table uk-table-divider">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Selected</th>
                </tr>
              </thead>
              <tbody>
                {accounts1.map(account => (
                  <tr key={account.id}>
                    <td className='black'>{account.name}</td>
                    <td>
                    <input
                    className='uk-checkbox'
                    type="checkbox"
                    name="selected_account"
                    value={account.id}
                    onChange={handleAccountidSelection} // Add this line

                />                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
              </div>
            </div>
            <div className="uk-margin">
              <button type="submit" className="uk-button uk-button-primary upCome">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>

</div>
);
};
