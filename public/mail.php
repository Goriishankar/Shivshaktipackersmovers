<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Common fields (safe handling)
    $name    = $_POST['name'] ?? 'N/A';
    $phone   = $_POST['phone'] ?? ($_POST['mobile'] ?? 'N/A');
    $email   = $_POST['email'] ?? ($_POST['email2'] ?? 'N/A');
    $message = $_POST['message'] ?? 'No message provided';

    // Optional fields
    $subject = $_POST['subject'] ?? 'Website Inquiry';

    $mail = new PHPMailer(true);

    try {
        // SMTP Config
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'shivshaktigoddady@gmail.com';
        $mail->Password   = 'lkpd zdqe ucfo gaim';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Mail Headers
        $mail->setFrom($mail->Username, 'Website Enquiry');
        $mail->addAddress('shivshaktigoddady@gmail.com');
        $mail->addReplyTo($email, $name);

        // Content
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

    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
?>
