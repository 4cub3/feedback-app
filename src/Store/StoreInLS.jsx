const useStoreLS = () => {
  const storeInLS = (item) => {
    let Store;
    if (localStorage.getItem("Store") === null) {
      Store = [];
    } else {
      Store = JSON.parse(localStorage.getItem("Store"));
    }
    Store.push(item);
    localStorage.setItem("Store", JSON.stringify(Store));
    return;
  };
  const storedItem = JSON.parse(localStorage.getItem("Store"));
  return [storedItem, storeInLS];
};

export default useStoreLS;
