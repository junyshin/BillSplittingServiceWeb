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
$repeat = $_GET["repeat"];


$sql = "INSERT INTO bills (id, name, due, payeemail, paynames, paymail, paycost, paypaid, category, description, paypal, transfer, cash, frequency) VALUES ('$billID','$name','$date','$payee','$paynames','$paymail','$paycost','$paypaid','$category','$description','$paypal','$transfer','$cash','$repeat')";

$result = $conn -> query($sql);
if($result === TRUE) {
    echo "Created successfully";
} else {
    echo "Error: " . $conn->error;
}
?>