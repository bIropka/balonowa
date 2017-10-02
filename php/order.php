<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['order-email'])) {$email = $_POST['order-email'];}
	if (isset($_POST['order-name'])) {$name = $_POST['order-name'];}
	if (isset($_POST['order-phone'])) {$phone = $_POST['order-phone'];}
	if (isset($_POST['order-product'])) {$product = $_POST['order-product'];}
	if (isset($_POST['order-address'])) {$delivery = $_POST['order-address'];}
	if (isset($_POST['order-cost'])) {$cost = $_POST['order-cost'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$toAdmin = "mirrexx777@gmail.com";
	$toClient = "mirrexx777@gmail.com";
	$sendfrom   = "baloonowa";
	$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	$subject = "$formData";

	$number = rand(9999, 99999);
	$date = date("j/n/Y");

	$messageAdmin = "$formData <br>
 					<b>Zamówienie nr $number  od $date</b> <br>
 					<table>
 						<tr>
 							<td>Imję i Nazwisko</td>
 							<td>$name</td>
						</tr>
 						<tr>
 							<td>E-mail</td>
 							<td>$email</td>
						</tr>
 						<tr>
 							<td>Telefon</td>
 							<td>$phone</td>
						</tr>
 						<tr>
 							<td>Nazwa produktu</td>
 							<td>$product</td>
						</tr>
 						<tr>
 							<td>Adres dostawy</td>
 							<td>$delivery</td>
						</tr>
 						<tr>
 							<td>Suma</td>
 							<td>$cost</td>
						</tr> 					
					</table>";

	$messageClient = "$formData <br>
				    Dzień dobry!<br>
				    Dziękujemy za zamówienie <b>$product</b>.<br>
				    Aby zrealizować zamówienie, prosimy o dokonaniu przelewu:
				    <table>
				    	<tr>
				    		<td><b>NR Konta:</b></td>
				    		<td>12 2325 5132 1564 65498 54</td>
						</tr>
				    	<tr>
				    		<td><b>Nazwa odbiorcy:</b></td>
				    		<td>OLOKA Sp. z o. o.</td>
						</tr>
				    	<tr>
				    		<td colspan='2'><b>05-110 Jablonna ul. Lesna 17 D/7</b></td>
						</tr>
				    	<tr>
				    		<td><b>Do zapłaty:</b></td>
				    		<td>$cost Zł</td>
						</tr>
				    	<tr>
				    		<td><b>Tytuł:</b></td>
				    		<td>Zamówienie nr $number</td>
						</tr>
					</table>
				    <br>
				    W razie pytań, prosimy dzwonić pod numer <b><a href='tel:+48575150487'>+48575150487</a></b>";

	$sendAdmin = mail ($toAdmin, $subject, $messageAdmin, $headers);
	$sendClient = mail ($toClient, $subject, $messageClient, $headers);

	if ( $sendAdmin == 'true' ) {
		echo '<p class="success">Success!</p>';
	} else {
		echo '<p class="fail"><b>Error!</b></p>';
	}
} else {
	http_response_code( 403 );
	echo "try again";
}
?>