<?php
// api/routes.php

require_once '../models/RouteModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['start']) && isset($_GET['destination'])) {
    $start = $_GET['start'];
    $destination = $_GET['destination'];
    
    $routes = RouteModel::getRoutes($start, $destination);
    
    echo json_encode($routes);
}
?>
