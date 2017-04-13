<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $outp = '[{"ID": "1", "Program":"100m Borstcrawl", "Last":"0:55.78", "Best":"0:54.66"},
    {"ID": "1", "Program":"50m Borstcrawl", "Last":"0:35.52", "Best":"0:35.52"},
    {"ID": "1", "Program":"100m Rugcrawl", "Last":"0:58.62", "Best":"0:58.60"},
    {"ID": "1", "Program":"50m Rugcrawl", "Last":"0:36.87", "Best":"0:36.87"},
    {"ID": "1", "Program":"100m Vlinder", "Last":"1:05.02", "Best":"0:59.24"},
    {"ID": "1", "Program":"100m Wissel", "Last":"1:10.24", "Best":"1:05.14"}]'; 

    echo($outp);
?>