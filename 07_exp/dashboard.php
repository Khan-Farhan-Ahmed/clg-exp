<?php 
include 'db.php';

if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php if (isset($_GET['login']) && $_GET['login'] == 'success'): ?>
<script>
    alert("Welcome <?php echo $_SESSION['user']; ?> You have successfully logged in!");
</script>
<?php endif; ?>

<div class="container">
    <h2>Dashboard</h2>

    <p>Welcome, <b><?php echo $_SESSION['user']; ?></b> 🎉</p>

    <a href="index.php">Home</a>
    <a href="logout.php">Logout</a>
</div>

</body>
</html>