<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:51
 */
require_once 'data_conn.php';

$billID = $_GET["id"];
$payer = $_GET["user"];

$sql = "DELETE '$billID' FROM bills WHERE payeemail='$payer'";

$result = $conn -> query($sql);
if($result === TRUE) {
    echo "Bill deleted successfully";
} else {
    echo "Error: " . $conn->error;
}?>