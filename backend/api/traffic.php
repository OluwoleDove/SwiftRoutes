<?php
include '../init_db.php';

// Get real-time traffic data
if ($_SERVER['REQUEST_URI'] === '/api/traffic' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    // Example data; can integrate real-time APIs
    $trafficData = [
        ["location" => "Main St", "condition" => "Heavy Traffic", "time" => "10 mins delay"],
        ["location" => "2nd Ave", "condition" => "Clear", "time" => "No delay"],
    ];

    echo json_encode($trafficData);
    exit();
}

// Report a traffic incident
if ($_SERVER['REQUEST_URI'] === '/api/traffic/report' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $location = $conn->real_escape_string($data['location']);
    $description = $conn->real_escape_string($data['description']);

    $sql = "INSERT INTO traffic_reports (location, description) VALUES ('$location', '$description')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Traffic incident reported"]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
    $conn->close();
    exit();
}
?>
