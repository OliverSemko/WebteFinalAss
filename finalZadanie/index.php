<?php
$x = $_POST["r"];
?>
<!DOCTYPE html>
<html>
<body>

<h1>Zaverecne zadanie</h1>
<form action="index.php" method="post">
    <label for="r">:</label><br>
    <input type="number" id="r" name="r" value="0.2"><br>
    <input type="submit" value="Submit">
</form>
<?php
echo $x;
?>
</body>
</html>