<?php
 
$data = json_decode(file_get_contents("php://input"));

 
include 'connect.php';
mysqli_select_db($con, 'dbnaam') or die('Could not select db');

$listid = mysqli_real_escape_string($con, $data->listid);
$description = mysqli_real_escape_string($con, $data->description);

if(!$description || !$listid){
	$arr = array('msg' => "", 'error' => "description: " . $description . " listid: " . $listid);
		$jsn = json_encode($arr);
		print_r($jsn);
}
 else
 {
	$date = date('Y-m-d');
	$qry = 'INSERT INTO groceries (listid,description,checked, dateadded) values (' . $listid .',"' . $description . '", 0, "' . $date . '")';
	$qry_res = mysqli_query($con, $qry) or die('Query failed ' . mysqli_error($con));
	if ($qry_res) {
		$arr = array('msg' => "Grocery added Successfully!!! ", 'error' => '');
		$jsn = json_encode($arr);
		print_r($jsn);
	} else {
		$arr = array('msg' => "", 'error' => 'Error In inserting grocery');
		$jsn = json_encode($arr);
		print_r($jsn);
	}
}
?>