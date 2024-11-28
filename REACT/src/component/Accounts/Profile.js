import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

function ProfilePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "") {
      alert("Please fill in all the details.");
    } else {
      axios
        .post("https://eb29-125-16-189-244.ngrok-free.app/PROJECT/PHP/Profile.php", {
          name,
          phone,
          email,
          address,
        })
        .then((response) => {
          if (response.data.success) {
            alert("Profile updated successfully.");
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
          } else {
            alert("Please enter your login email to update profile");
          }
        })
        .catch((error) => {
          console.error("There was an error saving the data!", error);
        });
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="pagehead">
          <h3 className="title">Update Profile</h3>
        </div>
        <div className="profile">
          <form onSubmit={handleSave}>
            <label>
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
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
                placeholder="Enter login email"
                required
              />
            </label>
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

            <div className="button-container">
              <Link className="back" to="/">
                <button type="button">Back</button>
              </Link>
              <button type="submit" className="save-button">
                SAVE
              </button>
            </div>
          </form>
        </div>

        <div className="fourthdiv">
          <div className="rights">
            <p>&#169; 2024 Arogya-Care. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
