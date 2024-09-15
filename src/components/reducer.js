
export const reducer = (state, action) => {
    switch (action.type) {
        case "SetLoading": {
            return {
                ...state,
                isLoading: true,
               }
            };
        case "GetStories":
            return {
                ...state,
                hits: action.payload.hits, 
                nbPages: action.payload.nbPages,
               
                isLoading: false,
            };
        case "removing":
            return {
                ...state,
                hits: state.hits.filter((item) => item.objectID !== action.payload)
            };
        case "searching":
            return {
                ...state,
                query: action.payload
            }
        case "prevItem":
                return {
                  ...state,
                  page: state.page === 0 ? 49 : state.page - 1, // Prevent going below page 0
                };
        case "nextItem":
                return {
                  ...state,
                  page: state.page + 1 < state.nbPages ? state.page + 1 : 1, // Prevent going beyond nbPages
                };
              default:
                return state;
    }
    return

}
