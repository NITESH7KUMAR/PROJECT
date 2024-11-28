<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

$conn = new mysqli("localhost", "root", "", "Project");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$email = $data['email'];
$password =$data['password'];

$sql = "INSERT INTO logindatabase (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $password);

if ($stmt->execute()) {
    echo json_encode(["message" => "Signup successful"]);
} else {
    echo json_encode(["error" => "Error signing up"]);
}

$stmt->close();
$conn->close();
?>
