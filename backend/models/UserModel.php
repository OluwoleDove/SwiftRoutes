<?php
// models/UserModel.php

require_once '../init_db.php';

class UserModel {
    
    // Register a new user
    public static function createUser($username, $email, $passwordHash) {
        global $conn;
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $username, $email, $passwordHash);
        return $stmt->execute();
    }

    // Find a user by email
    public static function findByEmail($email) {
        global $conn;
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    // Find a user by username
    public static function findByUsername($username) {
        global $conn;
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    // Get user by ID
    public static function findById($id) {
        global $conn;
        $sql = "SELECT * FROM users WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    // Update user details
    public static function updateUser($id, $username, $email, $passwordHash) {
        global $conn;
        $sql = "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssi", $username, $email, $passwordHash, $id);
        return $stmt->execute();
    }
}
?>
