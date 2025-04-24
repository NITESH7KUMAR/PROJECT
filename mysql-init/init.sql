CREATE TABLE IF NOT EXISTS logindatabase (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS profile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(100),
  address TEXT
);

CREATE TABLE IF NOT EXISTS recipient (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(100),
  bloodgroup VARCHAR(10),
  dob DATE,
  gender VARCHAR(10),
  address TEXT,
  reason TEXT,
  emContact VARCHAR(15),
  urgency VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS registration (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(100),
  bloodGroup VARCHAR(10),
  dob DATE,
  gender VARCHAR(10),
  address TEXT
);
