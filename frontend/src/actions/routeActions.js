export const fetchRoutes = (start, destination) => async (dispatch) => {
    try {
      const response = await fetch("http://localhost/backend/api/routes.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ start, destination }),
      });
      const data = await response.json();
  
      dispatch({ type: "FETCH_ROUTES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ROUTES_FAIL", payload: error.message });
    }
  };
  