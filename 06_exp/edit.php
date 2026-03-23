<?php
include 'db.php';

$id = $_GET['id'] ?? 0;

// Fetch existing user
$stmt = $conn->prepare("SELECT * FROM users WHERE id=?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

$name = $user['name'] ?? "";
$email = $user['email'] ?? "";
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);

    if (empty($name) || empty($email)) {
        $error = "All fields required!";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email!";
    } else {
        $stmt = $conn->prepare("UPDATE users SET name=?, email=? WHERE id=?");
        $stmt->bind_param("ssi", $name, $email, $id);

        if ($stmt->execute()) {
            header("Location: index.php");
            exit();
        } else {
            $error = "Update failed!";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit User</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
        }

        .container {
            width: 400px;
            margin: 80px auto;
            background: #fff;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        h2 {
            margin-bottom: 20px;
            text-align: center;
            color: #333;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background: #007bff;
            border: none;
            color: white;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background: #0056b3;
        }

        .error {
            color: red;
            text-align: center;
            margin-bottom: 10px;
        }

        .back {
            display: block;
            text-align: center;
            margin-top: 10px;
            text-decoration: none;
            color: #007bff;
        }

        .back:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

<div class="container">
    <h2>Edit User</h2>

    <p class="error"><?= $error ?></p>

    <form method="POST">
        Name:
        <input type="text" name="name" value="<?= htmlspecialchars($name) ?>">

        Email:
        <input type="text" name="email" value="<?= htmlspecialchars($email) ?>">

        <button type="submit">Update</button>
    </form>

    <a href="index.php" class="back">← Back</a>
</div>

</body>
</html>