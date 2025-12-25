<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $mobile = $_POST["mobile"];
    $email = $_POST["email3"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'durgapackersandmovers2@gmail.com';
        $mail->Password   = 'bmac okyr yuuy qhfe';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('durgapackersandmovers2@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = "New Inquiry From D T L: " . $subject;
        $mail->Body = "
            <h3>New Inquiry From D T L</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Mobile:</strong> $mobile</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Service:</strong> $subject</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();
        echo "success";

    } catch (Exception $e) {
        echo "error: {$mail->ErrorInfo}";
    }
}
?>
