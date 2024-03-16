import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { authFetch } from '../../../scripts/AuthProvider';

export const Stakeholders = () => {
const [modals, setModals] = useState({
stakeholder: false,
category:false
});
const [accounts, setAccounts] = useState([])
const [stakeholders, setStakeholders] = useState([])
const [stakeholdersCategory, setStakeholdersCategory] = useState([])

const openModal = (modalName) => {
setModals(prevState => ({
...prevState,
[modalName]: true
}));
};
const [formData, setFormData] = useState({
  name: '',
  effected_account: '',
  description: ''
});
const [formData1, setFormData1] = useState({
  name: '',
  stakeholdertype: '',
  description: ''
});

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

try{
  const response = await authFetch("/api/stakeholders/");
  const data = await response;
  setStakeholders(data);
}catch (error) {
  console.error("Error fetching data:", error);
  }

try{
  const response = await authFetch("/api/stakeholdercategory/");
  const data = await response;
  setStakeholdersCategory(data);
}catch (error) {
  console.error("Error fetching data:", error);
  }
}

useEffect(() => {
fetchData();
}, [])
 const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleInputChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authFetch("/api/stakeholders/", formData, "POST");

      setFormData({
        name: '',
        effected_account: '',
        description: ''
      });
      // Close the modal
      closeModal('stakeholder');
      // Show success message or perform any other action
      Swal.fire('Success', 'Stakeholder type created successfully', 'success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message or perform any other action
      Swal.fire('Error', 'Failed to create stakeholder type', 'error');
    }
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(formData1)
    try {
      const response = await authFetch("/api/stakeholdercategory/", formData1, "POST");
      setFormData1({
        name: '',
        stakeholdertype: '',
        description: ''
      })
      // Close the modal
      closeModal('category');
      // Show success message or perform any other action
      fetchData()
      Swal.fire('Success', 'Stakeholder type created successfully', 'success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message or perform any other action
      Swal.fire('Error', 'Failed to create stakeholder type', 'error');
    }
  };


return (
<div>
  <div data-uk-grid>
    <a onClick={()=>openModal("stakeholder")} className='red'>Create new Stakeholders Type</a>
    <a onClick={()=>openModal("category")} className='red'>Create new Stakeholders Category</a>
  </div>
  <div className="uk-grid-divider" data-uk-grid>
    <div className="uk-width-expand@m">Stakeholders Types
      <table className="uk-table rwd-table  uk-table-divider">
        <tbody>
        {stakeholders.map(stakeholder => (
          <tr key={stakeholder.id}>
            <td>{stakeholder.name}</td>
            <td>edit</td>
          </tr>
          ))}
        </tbody>

      </table>
    </div>
    <div className="uk-width-expand@m">Stakeholders Categories
    <table className="uk-table rwd-table  uk-table-divider">
      <tbody>
      {stakeholdersCategory.map(stakeholder => (
        <tr key={stakeholder.id}>
          <td>{stakeholder.name}({stakeholder.stakeholdertype})</td>
          <td>edit</td>
        </tr>
        ))}
      </tbody>

    </table>
  </div>
  </div>
  <Modal isOpen={modals.stakeholder} onRequestClose={()=> closeModal('stakeholder')} contentLabel="New Account Group
    Modal">
    <div className="uk-container">
      <h2 className="uk-modal-title"></h2>
      <div className="uk-container upTop">
        <h2>Create Stakeholders Type</h2>
        <form className="uk-form-horizontal" onSubmit={handleSubmit}>
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="name">Name:</label>
            <div className="uk-form-controls">
              <input className="uk-input" type="text" id="name" name="name" maxLength="250" value={formData.name}
              onChange={handleInputChange}
              required />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="effected_account">Effected Account:</label>
            <div className="uk-form-controls">
              <select className="uk-select" id="effected_account" name="effected_account" value={formData.effected_account}
              onChange={handleInputChange}
              required>
              <option >Select Effected Account</option>
                {accounts.map(accountData => (<option value={accountData.id}>{accountData.name}</option>))}

              </select>
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="description">Description:</label>
            <div className="uk-form-controls">
              <textarea className="uk-input" type="text" id="description" name="description" maxLength="250"  value={formData.description}
              onChange={handleInputChange}
              required/>
            </div>
          </div>
          <div className="uk-margin">
            <button type="submit" className="uk-button uk-button-primary upCome">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </Modal>
  <Modal isOpen={modals.category} onRequestClose={()=> closeModal('category')} contentLabel="New Account Group
  Modal">
  <div className="uk-container">
    <h2 className="uk-modal-title"></h2>
    <div className="uk-container upTop">
      <h2>Create Stakeholders category</h2>
      <form className="uk-form-horizontal" onSubmit={handleSubmit1}>
      <div className="uk-margin">
          <label className="uk-form-label" htmlFor="name">Name:</label>
          <div className="uk-form-controls">
            <input className="uk-input" type="text" id="name" name="name" maxLength="250" value={formData1.name}
            onChange={handleInputChange1}
            required />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="stakeholdertype">Effected Account:</label>
          <div className="uk-form-controls">
            <select className="uk-select" id="stakeholdertype" name="stakeholdertype" value={formData1.stakeholdertype}
            onChange={handleInputChange1}
            required>
            <option >Select Stakeholder Type</option>
              {stakeholders.map(accountData => (<option value={accountData.id}>{accountData.name}</option>))}

            </select>
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="description">Description:</label>
          <div className="uk-form-controls">
            <textarea className="uk-input" type="text" id="description" name="description" maxLength="250"  value={formData1.description}
            onChange={handleInputChange1}
            required/>
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
)
}
