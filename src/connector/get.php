<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'connect.php';
mysqli_select_db($con, 'dbnaam') or die('Could not select db');

$result = $con->query("SELECT ID, ListID, Description, Checked, DateAdded, DateChecked FROM groceries WHERE Checked = 0");

$outp = "[";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"ID":"'  . $rs["ID"] . '",';
    $outp .= '"ListID":"'   . $rs["ListID"]        . '",';
	$outp .= '"Description":"'   . $rs["Description"]        . '",';
	$outp .= '"Checked":"'   . $rs["Checked"]        . '",';
	$outp .= '"DateAdded":"'   . $rs["DateAdded"]        . '",';
    $outp .= '"DateChecked":"'. $rs["DateChecked"]     . '"}'; 
}
$outp .="]";

$con->close();

echo($outp);
?>