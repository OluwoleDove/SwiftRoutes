import React from "react";
import "./RouteList.css";

const RouteList = ({ routes }) => {
  return (
    <ul className="route-list">
      {routes.map((route, index) => (
        <li key={index} className="route-item">
          <p>Mode: {route.mode}</p>
          <p>Duration: {route.duration} mins</p>
          <p>Cost: ${route.cost}</p>
        </li>
      ))}
    </ul>
  );
};

export default RouteList;
