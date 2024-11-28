<?php
// Allow any origin (for development), change this in production for security
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
header("Access-Control-Allow-Credentials: true");


// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  
    http_response_code(200);
    exit();
}


session_start();
session_unset();
session_destroy();


echo json_encode(["success" => true, "message" => "Logged out successfully"]);
?>
