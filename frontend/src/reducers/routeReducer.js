const initialState = {
    routes: [],
    loading: false,
    error: null,
  };
  
  const routeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ROUTES_SUCCESS":
        return { ...state, routes: action.payload, loading: false };
      case "FETCH_ROUTES_FAIL":
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default routeReducer;
  