<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['mailing-email'])) {$email = $_POST['mailing-email'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$to = "biropka@gmail.com";
	$sendfrom   = "baloonowa";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";
	$message = "$formData <br><b>Client need mailing </b> <br> <b>Client`s email:</b> $email";
	$send = mail ($to, $subject, $message, $headers);
	if ($send == 'true')
	{
		echo '<p class="success">Success!</p>';
	}
	else
	{
		echo '<p class="fail"><b>Error!</b></p>';
	}
} else {
	http_response_code(403);
	echo "try again";
}
?>