import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./blood_recipient-reg.css";

function BloodRecipient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [reason, setReasonForRequest] = useState("");
  const [EmContact, setEmergencyContact] = useState("");
  const [urgency, setUrgency] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !bloodGroup || !dob || !gender || !address || !reason || !EmContact) {
      alert("Please fill in all the details.");
    } else {
      axios.post("http://localhost:8000/Recipient.php", {
        name,
        phone,
        email,
        address,
        bloodGroup,
        dob,
        gender,
        reason,
        EmContact,
        urgency
      })
      .then((response) => {
        if (response.data.success) {
          alert("Thank you for registering for your blood request.");
          setName("");
          setPhone("");
          setEmail("");
          setAddress("");
          setBloodGroup("");
          setDob("");
          setGender("");
          setReasonForRequest("");
          setEmergencyContact("");
          setUrgency(false);
        } else {
          alert("Failed to save data.");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Failed to connect to the server.");
      });
    }
  };

  return (
    <div className="rec-page">
      <div className="rec-container">
        <div className="rechead">
          <h3 className="title2">Blood Request Registration</h3>
        </div>
        <div className="rec">
          <form onSubmit={handleSave}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
              />
            </label>
            <br />

            <label>
              Mobile Number
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
              />
            </label>
            <br />

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </label>
            <br />

            <label>
              Blood Group
              <input
                type="text"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                placeholder="Blood Group (e.g., A+, B-, O+)"
                required
              />
            </label>
            <br />

            <label>
              Date of Birth
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Gender
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <br />
            <label>
              Address
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
              />
            </label>
            <br />

            <label>
              Reason for Requesting Blood
              <input
                type="text"
                value={reason}
                onChange={(e) => setReasonForRequest(e.target.value)}
                placeholder="Reason for Request (e.g., Surgery, Accident, etc.)"
                required
              />
            </label>
            <br />

            <label>
              Emergency Contact
              <input
                type="text"
                value={EmContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                placeholder="Emergency Contact Name and Phone"
                required
              />
            </label>
            <br />

            <label>
              <input
                type="checkbox"
                checked={urgency}
                onChange={(e) => setUrgency(e.target.checked)}
                required
              />
              Urgent Request (Tick if this is an emergency)
            </label>
            <br />

            <div className="button-container2">
              <Link className="back2" to="/">
                <button type="button">Back</button>
              </Link>
              <button type="submit" className="save-button2">Request</button>
            </div>
          </form>
        </div>

        <div className="fourthdiv2">
          <div className="rights2">
            <p>&#169; 2024 Arogya-Care. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodRecipient;
