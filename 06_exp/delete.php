<?php
include 'db.php';

$id = $_GET['id'] ?? 0;

$stmt = $conn->prepare("DELETE FROM users WHERE id=?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    header("Location: index.php");
} else {
    echo "Delete failed!";
}
?>