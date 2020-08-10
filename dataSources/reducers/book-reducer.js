
const getProductReducer = book => {
  const {
    title,
    author,
  } = book;

  return {
    title,
    author,
};


module.exports = { getBookReducer };
