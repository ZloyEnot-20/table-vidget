export const setData = (action) => {
  return {
    type: "SET_DATA",
    payload: action,
  };
};
export const getData = (action) => {
  return {
    type: "GET_DATA",
    payload: action,
  };
};

export const sortItems = (action) => {
  return {
    type: "SORT_ITEMS",
    payload: action,
  };
};
export const sortPosition = (action) => {
  return {
    type: "SORT_POSITION",
    payload: action,
  };
};
export const changeStatus = (action) => {
  return {
    type: "CHANGE_STATUS",
    payload: action,
  };
};

export const filterByField = (action) => {
  return {
    type: "FILTER_BY_FIELD",
    payload: action,
  };
};
