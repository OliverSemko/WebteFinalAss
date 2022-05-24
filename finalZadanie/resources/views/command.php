<?php
require_once "MyPDO.php";

header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    header("HTTP/1.1 200 OK");
    $data = json_decode(file_get_contents('php://input'), true);
    try {
        $myPdo = new MyPDO();
        $myPdo->run("INSERT into measurement
            (`date`, `r`, `error`) values (?, ?, ?)",
            [date('d-m-y h:i:s', time()), $data["r"], false]);


    }
    catch (Exception $e) {
        $myPdo = new MyPDO();
        $myPdo->run("INSERT into measurement
            (`date`, `r`, `error`) values (?, ?, ?)",
            [date('d-m-y h:i:s', time()),$data["r"], true]);
    }
}

