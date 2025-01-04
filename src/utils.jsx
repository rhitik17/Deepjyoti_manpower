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


export const slideFromLeft = {
  hidden: { opacity: 0, x: -300 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
