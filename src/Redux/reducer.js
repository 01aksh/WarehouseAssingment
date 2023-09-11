import data from "../Util/warehouse.json";

const initialState = {
  data: data, // 
  filteredData: [], 
  filteredCluster: [],
  filteredSpace:[],
  searchWareHouse: [],
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
      console.log("ANOTHER_ACTION dispatched with payload:", action.payload);

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
      console.log("ANOTHER_ACTION dispatched with payload:", action.payload);

      const { filterspacedata, spacedata } = action.payload;

      const filteredSpace = spacedata.filter((item) => {
        return item.type === filterspacedata;
      });
      console.log(state, filteredSpace);
      return {
        ...state,
        filteredSpace,
      };
      
    case "SEARCH_WAREHOUSE":
      console.log("ANOTHER_ACTION dispatched with payload:", action.payload);

      const { searchData, wareData } = action.payload;

      const searchWareHouse = wareData.filter((item) => {
        return item.name === searchData;
      });
      console.log(state, searchWareHouse);
      return {
        ...state,
        searchWareHouse,
      };
    default:
      return state;
  }
};

export default dataReducer;
