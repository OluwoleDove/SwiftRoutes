<?php
// api/rewards.php

require_once '../models/RewardModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['user_id'])) {
    $userId = $_GET['user_id'];
    $rewards = RewardModel::getUserRewards($userId);
    echo json_encode($rewards);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['user_id']) && isset($_POST['reward'])) {
    $userId = $_POST['user_id'];
    $reward = $_POST['reward'];
    
    if (RewardModel::addReward($userId, $reward)) {
        echo json_encode(["message" => "Reward added successfully"]);
    } else {
        echo json_encode(["message" => "Error adding reward"]);
    }
}
?>
