<?php
error_reporting(0);
ini_set('display_errors', 0);
$x = $_POST["r"];
?>
<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Finalne zadanie</title>
    <link rel="icon" type="image/x-icon" href="https://icon-library.com/images/icon-favicon/icon-favicon-19.jpg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/print.css">
</head>
<body>
<header>
    <h1 id="nadpis">Záverečné zadanie</h1>
    <div id="flag" onclick="flag()"></div>
    <br><br>
    <form id="addUser">
        <label for="name">Zadaj meno:</label>
        <input id="name" type="text">
        <button onclick="logIn(event)">LogIn</button>
    </form>
    <button id="changeUser" style="display: none" onclick="changeUser()">odhlasit</button>
</header>
<main>
