export const initialState = {
  mainNews: {},
  topNews: [],
  latestNews: [],
  active: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MAINNEWS":
      return { ...state, mainNews: action.mainNews };
    case "SET_TOPNEWS":
      return { ...state, topNews: action.topNews };
    case "SET_LATESTNEWS":
      return { ...state, latestNews: action.latestNews };
  }
};
