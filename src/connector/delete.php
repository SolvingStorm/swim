<?php

$data = json_decode(file_get_contents("php://input"));

 
include 'connect.php';
mysqli_select_db($con, 'dbnaam') or die('Could not select db');

$id = mysqli_real_escape_string($con, $data->ID);

if(!$id){
	$arr = array('msg' => "", 'error' => "Ongeldig ID!");
	$jsn = json_encode($arr);
	print_r($jsn);
}
 else
 {
	$date = date('Y-m-d');
	$qry = 'UPDATE groceries SET Checked = 1, DateChecked = "' . $date . '" where ID = ' . $id;
	$qry_res = mysqli_query($con, $qry) or die('Query failed ' . mysqli_error($con));
	if ($qry_res) {
		$arr = array('msg' => "Grocery id:" . $id . " Deleted Successfully!", 'error' => '');
		$jsn = json_encode($arr);
		print_r($jsn);
	} else {
		$arr = array('msg' => "", 'error' => 'Error In deleting grocery');
		$jsn = json_encode($arr);
		print_r($jsn);
	}
}

?>