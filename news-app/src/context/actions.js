export const updateMainNews = (news) => {
  return {
    type: "SET_MAINNEWS",
    mainNews: news,
  };
};

export const updateTopNews = (news) => {
  return {
    type: "SET_TOPNEWS",
    topNews: news,
  };
};

export const updateLatestNews = (news) => {
  return {
    type: "SET_LATESTNEWS",
    latestNews: news,
  };
};

export const updateActive = (val) => {
  return {
    type: "SET_ACTIVE",
    active: val,
  };
};

export const updateComment = (comment) => {
  return {
    type: "SET_COMMENT",
    comment: comment,
  };
};

export const updateEditComment = (comment) => {
  return {
    type: "SET_EDITCOMMENT",
    editComment: comment,
  };
};
