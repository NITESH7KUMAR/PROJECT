import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./Registration.css";

function Registration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [agreeToDonate, setAgreeToDonate] = useState(false);
  const [error, setError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !bloodGroup || !dob || !gender || !agreeToDonate) {
      setError("Please fill in all the details and confirm your willingness to donate.");
    } else {
      setError(""); // Clear any previous error
      axios
        .post("https://eb29-125-16-189-244.ngrok-free.app/PROJECT/PHP/Registration.php", {
          name,
          phone,
          email,
          address,
          bloodGroup,
          dob,
          gender,
        })
        .then((response) => {
          if (response.data.success) {
            alert("Thank you for registering as a blood donor.");
            // Clear the form after successful submission
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
            setBloodGroup("");
            setDob("");
            setGender("");
            setAgreeToDonate(false);
          } else {
            setError("Failed to save data. Please try again later.");
          }
        })
        .catch((error) => {
          setError("Error while registering: " + error.message);
        });
    }
  };

  return (
    <div className="reg-page">
      <div className="reg-container">
        <div className="reghead">
          <h3 className="title1">Donor Registration</h3>
        </div>
        <div className="reg">
          <form onSubmit={handleSave}>
            {error && <p className="error">{error}</p>} {/* Display error message */}
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
                pattern="\d{10}" // Add phone number pattern for validation
                title="Please enter a valid 10-digit phone number"
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
              <input
                type="checkbox"
                checked={agreeToDonate}
                onChange={(e) => setAgreeToDonate(e.target.checked)}
                required
              />
              I confirm that I am willing to donate blood and meet the eligibility criteria.
            </label>
            <br />

            <div className="button-container1">
              <Link className="back1" to="/">
                <button type="button">Back</button>
              </Link>
              <button type="submit" className="save-button1">Register as Donor</button>
            </div>
          </form>
        </div>

        <div className="fourthdiv1">
          <div className="rights1">
            <p>&#169; 2024 Arogya-Care. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
