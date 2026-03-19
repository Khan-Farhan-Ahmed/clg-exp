<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>User CRUD</title>
</head>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f9;
}

.container {
    width: 80%;
    margin: 40px auto;
    background: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

h2 {
    margin-bottom: 15px;
    color: #333;
}

a {
    text-decoration: none;
    color: white;
    background: #007bff;
    padding: 8px 14px;
    border-radius: 5px;
    font-size: 14px;
}

a:hover {
    background: #0056b3;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th {
    background: #007bff;
    color: white;
    padding: 10px;
    text-align: left;
}

table td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

table tr:hover {
    background-color: #f1f1f1;
}

.actions a {
    background: #28a745;
    margin-right: 5px;
}

.actions a.delete {
    background: #dc3545;
}

.actions a:hover {
    opacity: 0.8;
}
</style>
<body>

<div class="container">
    <h2>User List</h2>
    <a href="create.php">Add New User</a>
    <br><br>
    
    <table border="1" cellpadding="10">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
    </tr>
</div>

<?php
$result = $conn->query("SELECT * FROM users");

while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>" . htmlspecialchars($row['name']) . "</td>
        <td>" . htmlspecialchars($row['email']) . "</td>
        <td>
            <a href='edit.php?id={$row['id']}'>Edit</a> |
            <a href='delete.php?id={$row['id']}' onclick='return confirm(\"Delete?\")'>Delete</a>
        </td>
    </tr>";
}
?>

</table>

</body>
</html>