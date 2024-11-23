<?php
if ($_SERVER['REQUEST_URI'] === '/api/rewards') {
    include 'rewards.php';
    exit();
}

if (strpos($_SERVER['REQUEST_URI'], '/api/users') === 0) {
    include 'users.php';
    exit();
}

if (strpos($_SERVER['REQUEST_URI'], '/api/traffic') === 0) {
    include 'traffic.php';
    exit();
}

// Default response for undefined routes
http_response_code(404);
echo json_encode(["message" => "Route not found"]);
?>
