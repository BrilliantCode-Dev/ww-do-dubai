<?php
require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize input
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill in all required fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }

    // Save to database
    $stmt = $conn->prepare("
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (:name, :email, :subject, :message)
    ");

    $stmt->execute([
        ":name" => $name,
        ":email" => $email,
        ":subject" => $subject,
        ":message" => $message
    ]);

    // Send email
    $to = "founder@womendodubai.org";
    $email_subject = "New Contact Message: " . $subject;
    $email_body = "
    You have received a new message from your website:

    Name: $name
    Email: $email
    Subject: $subject

    Message:
    $message
    ";

    $headers = "From: noreply@womendodubai.org\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    mail($to, $email_subject, $email_body, $headers);

    // Redirect or success message
    header("Location: thank-you.html");
    exit;
}
