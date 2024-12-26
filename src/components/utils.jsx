export const getPostStatus = (createdDate) => {
  const created = new Date(createdDate);
  const now = new Date();

  const timeDifference = now - created;

  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (dayDifference === 0) {
    return "New Post";
  } else {
    return `${dayDifference} day${dayDifference > 1 ? "s" : ""} ago`;
  }
};
