<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

session_start();


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

$conn = new mysqli("localhost", "root", "", "Project");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Read JSON input and decode
$data = json_decode(file_get_contents("php://input"), true);

// Check if data is parsed correctly
if (!$data || !isset($data['identifier']) || !isset($data['password'])) {
    echo json_encode(["success" => false, "message" => "Invalid input data"]);
    exit();
}

// Extract identifier and password
$identifier = $data['identifier'];
$password = $data['password'];

// Prepare and execute SQL statement
$sql = "SELECT * FROM logindatabase WHERE username = ? OR email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $identifier, $identifier);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if ($password === $user['password']) {
        $_SESSION['username'] = $user['username'];
        $_SESSION['email'] = $user['email'];
        echo json_encode(["success" => true, "message" => "Login successful", "username" => $user['username']]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "User not found"]);
}

$stmt->close();
$conn->close();
?>
