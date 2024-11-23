<?php
// Database connection details
$host = '127.0.0.1';
$db = 'swift_routes';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create 'users' table
$createUsersTable = "
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
";

if ($conn->query($createUsersTable) === TRUE) {
    echo "Table 'users' created successfully.\n";
} else {
    echo "Error creating 'users' table: " . $conn->error . "\n";
}

// Create 'traffic_reports' table
$createTrafficReportsTable = "
CREATE TABLE IF NOT EXISTS traffic_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
";

if ($conn->query($createTrafficReportsTable) === TRUE) {
    echo "Table 'traffic_reports' created successfully.\n";
} else {
    echo "Error creating 'traffic_reports' table: " . $conn->error . "\n";
}

// Create 'rewards' table
$createRewardsTable = "
CREATE TABLE IF NOT EXISTS rewards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    points INT NOT NULL
);
";

if ($conn->query($createRewardsTable) === TRUE) {
    echo "Table 'rewards' created successfully.\n";
} else {
    echo "Error creating 'rewards' table: " . $conn->error . "\n";
}

$conn->close();
?>
