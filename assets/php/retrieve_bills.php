<?php
/**
 * Created by PhpStorm.
 * User: Mikambi
 * Date: 23/11/2017
 * Time: 22:12
 */
require_once 'data_conn.php';
//$data = json_decode(file_get_contents("php://input"));

//$user = mysqli_real_escape_string($conn, $data->email) WHERE Payer='$user' OR WHERE Payees LIKE '%$user%';

$id = $_GET["id"];
$result = $conn->query("SELECT * FROM bills WHERE id='$id'");

$arr = array();
if(mysqli_num_rows($result) != 0)
{
    while ($row = mysqli_fetch_assoc($result))
    {
        $arr[] = $row;
    }
}
echo $info = json_encode($arr);
?>