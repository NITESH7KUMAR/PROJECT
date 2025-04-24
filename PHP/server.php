<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("mysql", "root", "rootpassword", "PROJECT");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

$result = $conn->query("SELECT username, email FROM logindatabase");


if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Query failed", "details" => $conn->error]);
    exit;
}

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>
