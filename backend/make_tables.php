<?php
// make_tables.php

require_once 'init_db.php';

// Create the users table
$createUsersTable = "
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($createUsersTable) === TRUE) {
    echo "Users table created successfully.<br>";
} else {
    echo "Error creating users table: " . $conn->error . "<br>";
}

// Create the routes table
$createRoutesTable = "
CREATE TABLE IF NOT EXISTS routes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_location VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    distance INT NOT NULL,  -- in kilometers or miles
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($createRoutesTable) === TRUE) {
    echo "Routes table created successfully.<br>";
} else {
    echo "Error creating routes table: " . $conn->error . "<br>";
}

// Create the rewards table
$createRewardsTable = "
CREATE TABLE IF NOT EXISTS rewards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    reward VARCHAR(255) NOT NULL,
    redeemed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)";

if ($conn->query($createRewardsTable) === TRUE) {
    echo "Rewards table created successfully.<br>";
} else {
    echo "Error creating rewards table: " . $conn->error . "<br>";
}

$conn->close();
?>
