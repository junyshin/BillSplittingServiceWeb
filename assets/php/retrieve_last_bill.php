<?php

require_once 'data_conn.php';

$result = $conn->query("SELECT MIN(id) FROM bills");
$value = mysqli_fetch_object($result);
echo implode("|",get_object_vars($value));
?>