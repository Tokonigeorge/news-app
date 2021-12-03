export const cutstringlength = (string, num) => {
  return string?.length > num ? string.substring(0, num) + "..." : string;
};

export const convertDate = (date) => {
  const now = new Date(date);
  return now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
