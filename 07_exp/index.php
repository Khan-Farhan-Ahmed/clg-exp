<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Welcome to My PHP Project</h2>

    <?php if (isset($_SESSION['user'])): ?>
        <p>Hello, <b><?php echo $_SESSION['user']; ?></b> 👋</p>

        <a href="dashboard.php">Go to Dashboard</a>
        <a href="logout.php">Logout</a>

    <?php else: ?>
        <a href="login.php">Login</a>
        <a href="register.php">Register</a>
    <?php endif; ?>
</div>

</body>
</html>