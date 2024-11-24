<?php
// api/users.php

require_once '../models/UserModel.php';
require_once '../utils/auth.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'register') {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        if (UserModel::createUser($username, $email, $passwordHash)) {
            echo json_encode(["message" => "User registered successfully"]);
        } else {
            echo json_encode(["message" => "Error registering user"]);
        }
    } elseif (isset($_POST['action']) && $_POST['action'] === 'login') {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $user = UserModel::findByEmail($email);

        if ($user && password_verify($password, $user['password'])) {
            $jwt = generateJWT($user['id']);
            echo json_encode(["message" => "Login successful", "token" => $jwt]);
        } else {
            echo json_encode(["message" => "Invalid email or password"]);
        }
    }
}
?>
