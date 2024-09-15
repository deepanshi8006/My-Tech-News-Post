import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
const inititalState = {
  isLoading: true,
  query: "Html",
  nbPages: 0,
  page: 0,
  hits: [],
}

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState)
  let API = "https://hn.algolia.com/api/v1/search?"
  const fetchApiData = async (url) => {

    dispatch({
      type: "SetLoading"
    })
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GetStories",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages
        }

      });

    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (id) => {
    dispatch({
      type: "removing",
      payload: id
    })
  }
  const searchItem = (search) => {
    dispatch({
      type: "searching",
      payload: search
    })
  }
  const prev = () => {
    dispatch({
      type: "prevItem",
    });
  };

  const next = () => {
    dispatch({
      type: "nextItem",
    });
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  },  [state.query, state.page]);
  return (
    <AppContext.Provider value={{ ...state, removeItem, searchItem, prev,next }}>
      {children}
    </AppContext.Provider>
  )
};
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };
