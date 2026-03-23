<?php
session_start();
session_destroy();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Logged Out</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>You have been logged out</h2>
    <a href="login.php">Login Again</a>
</div>

</body>
</html>