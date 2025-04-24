<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Decode input JSON data
$input = json_decode(file_get_contents("php://input"), true);

$name = $input['name'];
$phone = $input['phone'];
$email = trim($input['email']);  // Remove any leading or trailing whitespace
$address = $input['address'];

// Database connection
$conn = new mysqli("mysql", "root", "rootpassword", "PROJECT");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Step 1: Check if the email exists in the login database
$sql_check_login = "SELECT email FROM logindatabase WHERE email = ?";
$stmt_check_login = $conn->prepare($sql_check_login);
$stmt_check_login->bind_param("s", $email);
$stmt_check_login->execute();
$stmt_check_login->store_result();

// Debugging: Check if email is found in login database
if ($stmt_check_login->num_rows > 0) {
    // Email exists in login database, now check profile database
    // Step 2: Check if the email exists in the profile table
    $sql_check_profile = "SELECT email FROM profile WHERE email = ?";
    $stmt_check_profile = $conn->prepare($sql_check_profile);
    $stmt_check_profile->bind_param("s", $email);
    $stmt_check_profile->execute();
    $stmt_check_profile->store_result();

    if ($stmt_check_profile->num_rows > 0) {
        // Email exists in profile, proceed with updating the profile
        $sql_update = "UPDATE profile SET name = ?, phone = ?, address = ? WHERE email = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("ssss", $name, $phone, $address, $email);

        if ($stmt_update->execute()) {
            $response["success"] = true;
            $response["message"] = "Profile updated successfully.";
        } else {
            $response["success"] = false;
            $response["message"] = "Error updating profile: " . $stmt_update->error;
        }

        // Close the update statement
        $stmt_update->close();
    } else {
        // Email does not exist in the profile, insert a new record
        $sql_insert = "INSERT INTO profile (name, phone, email, address) VALUES (?, ?, ?, ?)";
        $stmt_insert = $conn->prepare($sql_insert);
        $stmt_insert->bind_param("ssss", $name, $phone, $email, $address);

        if ($stmt_insert->execute()) {
            $response["success"] = true;
            $response["message"] = "Profile created successfully.";
        } else {
            $response["success"] = false;
            $response["message"] = "Error creating profile: " . $stmt_insert->error;
        }

        // Close the insert statement
        $stmt_insert->close();
    }

    // Close profile check statement
    $stmt_check_profile->close();
} else {
    // Email does not exist in the login database
    $response["success"] = false;
    $response["message"] = "Email not found in login database.";
}

// Close login check statement and database connection
$stmt_check_login->close();
$conn->close();

// Return response in JSON format
echo json_encode($response);
?>
