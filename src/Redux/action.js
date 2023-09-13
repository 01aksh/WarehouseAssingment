export const FILTER_DATA = "FILTER_DATA";
export const FILTER_CLUSTER = "FILTER_CLUSTER";
export const FILTER_SPACE = "FILTER_SPACE";
export const SEARCH_WAREHOUSE = "SEARCH_WAREHOUSE";
export const EDIT_WAREHOUSE_DETAILS = "EDIT_WAREHOUSE_DETAILS";

export const filterData = (filterCriterion, data) => ({
  type: "FILTER_DATA",
  payload: {
    filterCriterion,
    data,
  },
});
export const filteredCluster = (filterclusterdata, clusterdata) => ({
  type: "FILTER_CLUSTER",
  payload: {
    filterclusterdata,
    clusterdata,
  },
});
export const filteredSpace = (filterspacedata, spacedata) => ({
  type: "FILTER_SPACE",
  payload: {
    filterspacedata,
    spacedata,
  },
});
export const searchWarehouse = (searchData, wareData) => ({
  type: "SEARCH_WAREHOUSE",
  payload: {
    searchData,
    wareData,
  },
});
export const editWarehouseDetails = (editedData) => ({
  type: "EDIT_WAREHOUSE_DETAILS",
  payload: {
    editedData,
  },
});
