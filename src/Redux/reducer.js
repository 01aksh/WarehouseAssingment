const initialState = {
  data: [],
  filteredData: [],
  filteredCluster: [],
  filteredSpace: [],
  searchWareHouse: [],
  editedData: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_DATA":
      const { filterCriterion, data } = action.payload;
      const filteredData = data.filter((item) => {
        return item.city === filterCriterion;
      });
      return {
        ...state,
        filteredData,
      };

    case "FILTER_CLUSTER":

      const { filterclusterdata, clusterdata } = action.payload;

      const filteredCluster = clusterdata.filter((item) => {
        return item.cluster === filterclusterdata;
      });
      console.log(state, filteredCluster);
      return {
        ...state,
        filteredCluster: filteredCluster,
      };

    case "FILTER_SPACE":

      const { filterspacedata, spacedata } = action.payload;

      const filteredSpace = spacedata.filter((item) => {
        return item.type === filterspacedata;
      });
      console.log(filteredSpace);
      return {
        ...state,
        filteredSpace: filteredSpace,
      };

    case "SEARCH_WAREHOUSE":

      const { searchData, wareData } = action.payload;

      const searchWareHouse = wareData.filter((item) => {
        return item.name === searchData;
      });
      console.log(state, searchWareHouse);
      return {
        ...state,
        searchWareHouse,
      };

    case "EDIT_WAREHOUSE_DETAILS":
      const { editedData } = action.payload;
      console.log(editedData);
      return {
        ...state,
        editedData,
      };

    default:
      return state;
  }
};

export default dataReducer;
