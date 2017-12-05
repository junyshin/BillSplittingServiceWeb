<?php

require_once 'data_conn.php';

$billID = $_GET["id"];
$name = $_GET["name"];
$date = $_GET["date"];
$payee = $_GET["payee"];
$paynames = $_GET["names"];
$paymail = $_GET["mails"];
$paycost = $_GET["costs"];
$paypaid = $_GET["paid"];
$category = $_GET["cat"];
$description = $_GET["desc"];
$paypal = $_GET["paypal"];
$transfer = $_GET["transfer"];
$cash = $_GET["cash"];
$frequency = $_GET["repeat"];

$sql = "UPDATE bills SET name='$name', due='$date', payeemail='$payee', paynames='$paynames', paymail='$paymail', paycost='$paycost', paypaid='$paypaid', category='$category', description='$description', paypal='$paypal', transfer='$transfer', cash='$cash', frequency='$frequency' WHERE id='$billID'";

$result = $conn -> query($sql);
if($result === TRUE) {
    echo "Updated successfully";
} else {
    echo "Error: " . $conn->error;
}
?>