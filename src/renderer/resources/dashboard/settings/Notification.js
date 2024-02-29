import React, { useState } from 'react'

export const Notification = () => {
  const [isChecked, setIsChecked] = useState({
    orgNotification: true,
    stakeholderCreated: false,
    stakeholderUpdated: false,
    receiptEntry: false,
    paymentEntry: false,
    journalEntry: false,
  });

  const handleCheckboxChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="notification-settings">
      <h2>Notification Settings</h2>
      <div className="setting">
        <input
          type="checkbox"
          id="orgNotification"
          name="orgNotification"
          checked={isChecked.orgNotification}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="orgNotification">Get notification within the organization only.</label>
      </div>
      <div className="setting">
        <input
          type="checkbox"
          id="stakeholderCreated"
          name="stakeholderCreated"
          checked={isChecked.stakeholderCreated}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="stakeholderCreated">Notify when a Stakeholder is created</label>
      </div>
      <div className="setting">
        <input
          type="checkbox"
          id="stakeholderUpdated"
          name="stakeholderUpdated"
          checked={isChecked.stakeholderUpdated}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="stakeholderUpdated">Notify when Stakeholder data is updated by another user</label>
      </div>
      <div className="setting">
        <input
          type="checkbox"
          id="receiptEntry"
          name="receiptEntry"
          checked={isChecked.receiptEntry}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="receiptEntry">When a receipt entry is made by another user</label>
      </div>
      <div className="setting">
        <input
          type="checkbox"
          id="paymentEntry"
          name="paymentEntry"
          checked={isChecked.paymentEntry}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="paymentEntry">When a payment entry is made by another user</label>
      </div>
      <div className="setting">
        <input
          type="checkbox"
          id="journalEntry"
          name="journalEntry"
          checked={isChecked.journalEntry}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="journalEntry">When a journal entry is made by another user</label>
      </div>
    </div>
  )
}
