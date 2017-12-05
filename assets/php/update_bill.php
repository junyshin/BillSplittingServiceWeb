<?php

require_once 'data_conn.php';

$billID = $_GET["id"];
$paypaid = $_GET["paid"];

$sql = "UPDATE bills SET paypaid='$paypaid' WHERE id='$billID'";

$result = $conn -> query($sql);
if($result === TRUE) {
    echo "Updated successfully";
} else {
    echo "Error: " . $conn->error;
}
?>