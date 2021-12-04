export const initialState = {
  mainNews: {},
  topNews: [],
  latestNews: [],
  active: 1,
  comment: [
    {
      id: 1,
      name: "Bukola",
      comment: "This is my comment",
      date: "Jan 3 1991",
    },
  ],
  editComment: { id: null, name: "", comment: "" },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MAINNEWS":
      return { ...state, mainNews: action.mainNews };
    case "SET_TOPNEWS":
      return { ...state, topNews: action.topNews };
    case "SET_LATESTNEWS":
      return { ...state, latestNews: action.latestNews };
    case "SET_ACTIVE":
      return { ...state, active: action.active };
    case "SET_COMMENT":
      return { ...state, comment: action.comment };
    case "SET_EDITCOMMENT":
      return { ...state, editComment: action.editComment };
  }
};
