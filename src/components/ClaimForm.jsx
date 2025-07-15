import React, { useState } from 'react';
import './ClaimForm.css';

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailId: '',
    dateOfBirth: '',
    jobTitle: '',
    dateOfDiagnosis: '',
    typeOfDiagnosis: '',
    story: '',
    agreeToPolicy: false,
    verifyPerson: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="claim-form-container">
      <div className="claim-form">
        <h1 className="form-title">Claim Form</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailId">Email ID *</label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group date-form-group">
              <label htmlFor="dateOfBirth">Date of birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                  className='date-form-input'
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title *</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group date-form-group" >
              <label htmlFor="dateOfDiagnosis">Date of Diagnosis *</label>
              <input
                type="date"
                id="dateOfDiagnosis"
                name="dateOfDiagnosis"
                value={formData.dateOfDiagnosis}
                onChange={handleChange}
                required
                className='date-form-input'
              />
            </div>
            <div className="form-group">
              <label htmlFor="typeOfDiagnosis">Type of Diagnosis *</label>
              <select
                id="typeOfDiagnosis"
                name="typeOfDiagnosis"
                value={formData.typeOfDiagnosis}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden></option>
                <option value="cancer">Cancer</option>
                <option value="heart-disease">Heart Disease</option>
                <option value="diabetes">Diabetes</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="story">Tell us your story (optional)</label>
            <input
              type="text"
              id="story"
              name="story"
              value={formData.story}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox-group checkbox-group-top">
            <input
              type="checkbox"
              id="agreeToPolicy"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeToPolicy" className="checkbox-label">
              I agree to the <span className="link">privacy policy</span> and <span className="link">disclaimer</span> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automated dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
            </label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="verifyPerson"
              name="verifyPerson"
              checked={formData.verifyPerson}
              onChange={handleChange}
              required
            />
            <label htmlFor="verifyPerson" className="checkbox-label">
              Please check this box to verify you're a person.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Start your claim now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClaimForm;