import { useEffect, useState } from "react";
import { authFetch } from "../../../scripts/AuthProvider";

export const Organization = () => {
  const [formData, setFormData] = useState({
    name: '',
    ref_code: '',
    depreciation: '',
    description: '',
    opening_balance: 0,
    parent_account: '',
    accountName: '',
    accountCode: '',
    currency: '',
    bankName: '',
    accountNo: '',
    ifsc: '',
    bankDescription: ''
  });

  useEffect(() => {
    // Fetch data when component mounts
    getData();
  }, []);

  const getData = () => {
    authFetch("/v2/organization/", null, "GET")
      .then(response => response)
      .then(data => {
        console.log("API Response:", data);
        // Update form data with API response
        setFormData({
          name: data.name || '',
          ref_code: data.register_no || '',
          estd: data.estd || '',
          description: data.description || '',
          opening_balance: data.opening_balance || 0,
          parent_account: data.parent || '',
          accountName: data.accountName || '',
          accountCode: data.accountCode || '',
          currency: data.currency || '',
          bankName: data.bank_accounts[0]?.bank_name || '',
          accountNo: data.bank_accounts[0]?.account_number || '',
          ifsc: data.bank_accounts[0]?.ifsc || '',
          bankDescription: data.bank_accounts[0]?.description || '',
          city: data.city || '',
          pincode: data.pincode || '',
          state: data.state || '',
          country: data.country || '',
          principal_name: data.principal_name || ''
          // Add other fields as needed
        });

      })
      .catch(error => {
        console.error("Error:", error);
        // Handle error appropriately
      });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      ref_code: '',
      estd: '',
      description: '',
      opening_balance: 0,
      parent_account: '',
      accountName: '',
      accountCode: '',
      currency: '',
      bankName: '',
      accountNo: '',
      ifsc: '',
      bankDescription: ''
    });
  };

  return (
    <div className="uk-container" style={{ overflowY: "scroll", height: "600px", overflowX: 'hidden' }}>
      <form onSubmit={handleSubmit} className="uk-grid-large uk-form-horizontal" data-uk-grid>
        {/* Organization Details */}
        <div className="uk-width-1-2@s">
          <label htmlFor="logo" className="uk-form-label" id="logoLabel">Organization Logo</label>
          <input id="logo" className="" type="file" placeholder="Upload organization logo" aria-label="Organization Logo"></input>
        </div>
        <div className="uk-width-1-2@s">
          <label htmlFor="orgName" className="uk-form-label" id="orgNameLabel">Organization Name</label>
          <input
            id="orgName"
            name="name"
            className="uk-input"
            type="text"
            placeholder="Enter organization name"
            aria-label="Organization Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="parentOrg" className="uk-form-label" id="parentOrgLabel">Parent Organization</label>
          <input
            id="parentOrg"
            name="parent_account"
            className="uk-input"
            type="text"
            placeholder="Enter parent organization name"
            aria-label="Parent Organization"
            value={formData.parent_account}
            onChange={handleChange}
          />
          <div data-uk-grid>
            <div className="uk-width-1-2@s">
              <label htmlFor="registrationNo" className="uk-form-label" id="registrationNoLabel">Registration No</label>
              <input
                id="registrationNo"
                name="ref_code"
                className="uk-input"
                type="text"
                placeholder="Enter registration number"
                aria-label="Registration Number"
                value={formData.ref_code}
                onChange={handleChange}
              />
            </div>
            <div className="uk-width-1-2@s">
              <label htmlFor="estd" className="uk-form-label" id="estdLabel">Established in</label>
              <input
                id="estd"
                name="estd"
                className="uk-input"
                type="text"
                placeholder="Enter year of establishment"
                aria-label="Year of Establishment"
                value={formData.estd}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="uk-width-1-1">
          <label htmlFor="address" className="uk-form-label" id="addressLabel">Address</label>
          <input
            id="address"
            name="description"
            className="uk-input"
            type="text"
            placeholder="Enter organization address"
            aria-label="Address"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-4@s inputData">
          <label htmlFor="city" className="uk-form-label" id="cityLabel">City</label>
          <input
            id="city"
            name="city"
            className="uk-input"
            type="text"
            placeholder="Enter city"
            aria-label="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-4@s inputData">
          <label htmlFor="pincode" className="uk-form-label" id="pincodeLabel">Pincode</label>
          <input
            id="pincode"
            name="pincode"
            className="uk-input"
            type="text"
            placeholder="Enter pincode"
            aria-label="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-4@s inputData">
          <label htmlFor="state" className="uk-form-label" id="stateLabel">State</label>
          <input
            id="state"
            name="state"
            className="uk-input"
            type="text"
            placeholder="Enter state"
            aria-label="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-4@s inputData">
          <label htmlFor="country" className="uk-form-label" id="countryLabel">Country</label>
          <input
            id="country"
            name="country"
            className="uk-input"
            type="text"
            placeholder="Enter country"
            aria-label="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-1 inputData">
          <label htmlFor="bankName" className="uk-form-label" id="bankNameLabel">Bank Name</label>
          <input
            id="bankName"
            name="bankName"
            className="uk-input"
            type="text"
            placeholder="Enter bank name"
            aria-label="Bank Name"
            value={formData.bankName}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-1 inputData">
          <label htmlFor="accountNo" className="uk-form-label" id="accountNoLabel">Account No</label>
          <input
            id="accountNo"
            name="accountNo"
            className="uk-input"
            type="text"
            placeholder="Enter account number"
            aria-label="Account No"
            value={formData.accountNo}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-1 inputData">
          <label htmlFor="ifsc" className="uk-form-label" id="ifscLabel">IFSC</label>
          <input
            id="ifsc"
            name="ifsc"
            className="uk-input"
            type="text"
            placeholder="Enter IFSC code"
            aria-label="IFSC"
            value={formData.ifsc}
            onChange={handleChange}
          />
        </div>
        <div className="uk-width-1-1 inputData">
          <label htmlFor="bankDescription" className="uk-form-label" id="bankDescriptionLabel">Bank Description</label>
          <input
            id="bankDescription"
            name="bankDescription"
            className="uk-input"
            type="text"
            placeholder="Enter bank description"
            aria-label="Bank Description"
            value={formData.bankDescription}
            onChange={handleChange}
          />
        </div>

      </form>
    </div>
  );
};
