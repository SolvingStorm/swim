<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $outp = '[{"ID": "1", "Description":"This is record number 1"},{"ID": "2", "Description":"This is record number 2"},{"ID": "3", "Description":"This is record number 3"},{"ID": "4", "Description":"This is record number 4"},{"ID": "5", "Description":"This is record number 5"},{"ID": "6", "Description":"This is record number 6"},{"ID": "7", "Description":"This is record number 7"},{"ID": "8", "Description":"This is record number 8"},{"ID": "9", "Description":"This is record number 9"},{"ID": "10", "Description":"This is record number 10"}]'; 

    echo($outp);
?>