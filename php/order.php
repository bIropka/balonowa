<?php
$email = 'empty';
$name = 'empty';
$phone = 'empty';
$product = 'empty';
$delivery = 'Odbior osobisty';
$cost = 'empty';
$formData = 'empty';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['order-email'])) {$email = $_POST['order-email'];}
	if (isset($_POST['order-name'])) {$name = $_POST['order-name'];}
	if (isset($_POST['order-phone'])) {$phone = $_POST['order-phone'];}
	if (isset($_POST['order-product'])) {$product = $_POST['order-product'];}
	if (isset($_POST['order-delivery'])) {$delivery = $_POST['order-delivery'];}
	if (isset($_POST['order-cost'])) {$cost = $_POST['order-cost'];}
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

	$toAdmin = "biropka@gmail.com";
	$toClient = "st.linden.11@gmail.com";
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
				    <b>NR Konta:</b> 12 2325 5132 1564 65498 54<br>
				    <b>Nazwa odbiorcy:</b>  OLOKA Sp. z o. o.<br>
				    <b>05-110 Jablonna ul. Lesna 17 D/7</b><br>
				    <b>Do zapłaty:</b> $cost Zł<br>
				    <b>Tytuł:</b> Zamówienie nr $number<br>
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