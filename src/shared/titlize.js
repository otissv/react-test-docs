const titlize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.substr(1, str.length)}`
};

export default titlize;
