<?php
$host = "localhost";
$user = "root";
$pass = "faRhan@963";
$db = "auth_db";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
session_start();
?>
