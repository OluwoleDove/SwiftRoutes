<?php
include '../init_db.php';

// Fetch available rewards
if ($_SERVER['REQUEST_URI'] === '/api/rewards' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM rewards";
    $result = $conn->query($sql);
    $rewards = [];

    while ($row = $result->fetch_assoc()) {
        $rewards[] = $row;
    }

    echo json_encode($rewards);
    exit();
}

// Add a new reward (Admin-only)
if ($_SERVER['REQUEST_URI'] === '/api/rewards' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $type = $conn->real_escape_string($data['type']);
    $description = $conn->real_escape_string($data['description']);
    $points = (int)$data['points'];

    $sql = "INSERT INTO rewards (type, description, points) VALUES ('$type', '$description', $points)";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Reward added successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
    $conn->close();
    exit();
}
?>
