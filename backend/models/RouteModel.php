<?php
// models/RouteModel.php

require_once '../init_db.php';

class RouteModel {

    // Fetch all routes
    public static function getRoutes($start, $destination) {
        global $conn;
        $sql = "SELECT * FROM routes WHERE start_location LIKE ? AND destination LIKE ?";
        $stmt = $conn->prepare($sql);
        $startParam = "%" . $start . "%";
        $destinationParam = "%" . $destination . "%";
        $stmt->bind_param("ss", $startParam, $destinationParam);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}
?>
