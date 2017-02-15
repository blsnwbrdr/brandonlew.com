<?php
if(!isset($_POST['submit']))
{
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'brandon.t.lew@gmail.com';
$email_subject = "New Message - brandonlew.com";
$email_body = "You have received a new message from the user $name\n".
              "Email address: $visitor_email\n".
              "Here is the message: $message\n".
    
$to = "brandon.t.lew@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header('Location: thank_you.html');  
?> 