import { useEffect, useReducer } from "react";

const useFetch = (url) => {
  const initialState = {
    loading: true,
    data: null,
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "DATA": {
        return { ...state, loading: false, data: action.payload };
      }
      case "ERROR": {
        return { ...state, loading: false, error: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => dispatch({ type: "DATA", payload: resp }))
      .catch((error) => {
        dispatch({ type: "ERROR", payload: error.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
