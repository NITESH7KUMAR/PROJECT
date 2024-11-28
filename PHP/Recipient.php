<?php
// Include PHPMailer files
include('phpmailer_smtp/smtp/PHPMailerAutoload.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$input = json_decode(file_get_contents("php://input"), true);

// Extract data from the input
$name = $input['name'];
$phone = $input['phone'];
$email = $input['email'];
$bloodGroup = $input['bloodGroup'];
$dob = $input['dob'];
$gender = $input['gender'];
$address = $input['address'];
$reason = $input['reason'];
$EmContact = $input['EmContact'];
$urgency = $input['urgency'];


$conn = new mysqli("localhost", "root", "", "Project");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}


$sql = "INSERT INTO Recipient (name, phone, email, bloodGroup, dob, gender, address, reason, EmContact, urgency) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssssi", $name, $phone, $email, $bloodGroup, $dob, $gender, $address, $reason, $EmContact, $urgency);

$response = [];
if ($stmt->execute()) {
    $response["success"] = true;


    $mail_response = smtp_mailer('niteshkumar197025@gmail.com', 'New Blood Recipient Request', "
    <p>Hello Admin,</p>
    <p>Someone has just requested for blood donation.</p>
    <p><strong>Details:</strong></p>
    <ul>
        <li>Name: $name</li>
        <li>Phone: $phone</li>
        <li>Email: $email</li>
        <li>Blood Group: $bloodGroup</li>
        <li>Date of Birth: $dob</li>
        <li>Gender: $gender</li>
        <li>Address: $address</li>
        <li>Reason for Request: $reason</li>
        <li>Emergency Contact: $EmContact</li>
        <li>Urgency: $urgency</li>
    </ul>
    <p>Please take the necessary action.</p>
    <p>Thank you.<br/><br/>Sincerely,<br/>Arogya-Care BloodLine Team</p>
    ");

    if ($mail_response == 'Sent') {
        $response["email_sent"] = true;
    } else {
        $response["email_sent"] = false;
        $response["message"] = "Failed to send email notification. Error: $mail_response";
    }
} else {
    $response["success"] = false;
    $response["message"] = "Error: " . $stmt->error;
}

echo json_encode($response);

$stmt->close();
$conn->close();

// smtp_mailer function definition
function smtp_mailer($to, $subject, $msg) {
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Username = "nk6870877@gmail.com";  // Your email address
    $mail->Password = "avvw xnul txac tcfw"; // Your email password or App Password
    $mail->SetFrom("arogybloodline@gmail.com");     // From address
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);                   // Admin email address

    $mail->SMTPOptions = array('ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => false
    ));

    if (!$mail->Send()) {
        return $mail->ErrorInfo;
    } else {
        return 'Sent';
    }
}
?>
