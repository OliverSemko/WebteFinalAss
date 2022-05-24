<?php
use PHPMailer\PHPMailer\PHPMailer;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'MyPDO.php';
require_once 'config.php';

$conn = new MyPDO();
$sql = "SELECT * FROM measurement";
$stmt = $conn->prepare($sql);
$stmt->execute();
$commandLogs = $stmt->fetchAll(PDO::FETCH_ASSOC);

function array2csv(array &$array) {
    if (count($array) == 0) {
        return null;
    }
<<<<<<< HEAD
=======
    ob_start();
>>>>>>> origin/main

    $csvFile = 'logy.csv';
    $df = fopen($csvFile, 'w');

    if ($df === false) {
        die('Error opening csv file ');
    }

<<<<<<< HEAD
=======
    ob_end_clean();
>>>>>>> origin/main
    fputcsv($df, array_keys(reset($array)));

    foreach ($array as $row) {
        fputcsv($df, $row);
    }
    fclose($df);
<<<<<<< HEAD
=======
    ob_get_clean();
>>>>>>> origin/main
    return $csvFile;
}


if(isset($_POST['send_mail_button'])) {
    array2csv($commandLogs);
    sendmail();
}

function sendmail() {
    $name = "Zaverecne zadanie";
    $to = "webte2admin@azet.sk";
    $subject = "Zaverecne zadanie - logy";
    $body = "Body text";
    $from = "webte2admin@azet.sk";
    $password = "webte2admin2000.";

    require_once "../../vendor/phpmailer/phpmailer/src/PHPMailer.php";
    require_once "../../vendor/phpmailer/phpmailer/src/SMTP.php";
    require_once "../../vendor/phpmailer/phpmailer/src/Exception.php";
    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->Host = "smtp.azet.sk";
    $mail->SMTPAuth = true;
    $mail->Username = $from;
    $mail->Password = $password;
    $mail->AddAttachment('logy.csv');
    $mail->Port = 587;
    $mail->SMTPSecure = "tls";
    $mail->smtpConnect([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $mail->isHTML(true);
    $mail->setFrom($from, $name);
    $mail->addAddress($to);
    $mail->Subject = ("$subject");
    $mail->Body = $body;
<<<<<<< HEAD
    $mail->send();
    header("Location: main.php");
    exit;
=======
    if ($mail->send()) {
        echo "Email is sent!";
    } else {
        echo "Something is wrong: <br><br>" . $mail->ErrorInfo;
    }
>>>>>>> origin/main
}
