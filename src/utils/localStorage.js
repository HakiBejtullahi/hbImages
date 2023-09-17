const setFromLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};
const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export { setFromLocalStorage, getFromLocalStorage };
