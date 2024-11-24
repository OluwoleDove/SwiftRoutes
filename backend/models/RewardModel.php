<?php
// models/RewardModel.php

require_once '../init_db.php';

class RewardModel {

    // Get rewards for a specific user
    public static function getUserRewards($userId) {
        global $conn;
        $sql = "SELECT * FROM rewards WHERE user_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $userId);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    // Add a new reward
    public static function addReward($userId, $reward) {
        global $conn;
        $sql = "INSERT INTO rewards (user_id, reward) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("is", $userId, $reward);
        return $stmt->execute();
    }
}
?>
