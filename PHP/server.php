<?php
header("Access-Control-Allow-Origin: *"); // Allow cross-origin requests
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "PROJECT");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT Name, Number FROM logindatabase");

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Send the JSON response
echo json_encode($data);

$conn->close();

?>
