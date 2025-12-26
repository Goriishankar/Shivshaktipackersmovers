<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

header("Content-Type: text/plain");

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = $_POST['name'] ?? 'N/A';
    $phone   = $_POST['phone'] ?? 'N/A';
    $email   = $_POST['email'] ?? ($_POST['email2'] ?? 'N/A');
    $message = $_POST['message'] ?? 'No message';

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'shivshaktigoddady@gmail.com';
        $mail->Password   = 'lkpd zdqe ucfo gaim';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom($mail->Username, 'Website Enquiry');
        $mail->addAddress('shivshaktigoddady@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "New Website Enquiry";
        $mail->Body = "
            <h2>New Enquiry Received</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";

        $mail->send();
        echo "success";
        exit;

    } catch (Exception $e) {
        http_response_code(500);
        echo "error";
        exit;
    }
}
