import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar/SearchBar";
import {
  filterData,
  filteredCluster,
  filteredSpace,
  searchWarehouse,
} from "../Redux/action";
import waredata from "../Util/warehouse.json";
const Navbar = () => {
  const [warehouse, setWarehouse] = useState("");
  const [disabled, setdisabled] = useState(true);

  const navigate = useNavigate();

  // const data = useSelector((state) => state.data);
  const dataFilter = useSelector((state) => state.filteredData);
  const clusterData = useSelector((state) => state.filteredCluster);
  const spaceData = useSelector((state) => state.filteredSpace);
  const searchedData = useSelector((state) => state.searchWareHouse);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setWarehouse(e.target.value);
    setdisabled(false);
  };

  const onStockArea = () => {
    navigate("/");
  };

  const onSearch = (warehousename) => {
    dispatch(searchWarehouse(warehousename, waredata));
    console.log(searchedData);
    navigate("/warehouseitems", {
      state: {
        name: warehouse,
        searchData: searchedData,
      },
    });
    setWarehouse("");
  };

  const onCityClick = async (cityname) => {
    dispatch(filterData(cityname, waredata));
    console.log(dataFilter);

    navigate("/city", {
      state: {
        city: cityname,
        filterdata: dataFilter,
      },
    });
  };
  const onClusterClick = (clustername) => {
    dispatch(filteredCluster(clustername, waredata));
    console.log(clusterData);

    navigate("/cluster", {
      state: {
        cluster: clustername,
        filteredCluster: clusterData,
      },
    });
  };
  const onSpaceClick = (type) => {
    dispatch(filteredSpace(type, waredata));
    console.log(spaceData);
    navigate("/spaceavailable", {
      state: {
        type: type,
        filteredSpace: spaceData,
      },
    });
  };

  return (
    <div className="topnav mb-4 ">
      <div className="dropdown">
        <button className="dropbtn text-danger fw-bold " onClick={onStockArea}>
          STOCKAREA
        </button>
      </div>
      <div className="dropdown">
        <button className="dropbtn">City</button>
        <div className="dropdown-content">
          <button className="dropbtn" onClick={() => onCityClick("Chennai")}>
            Chennai
          </button>
          <button className="dropbtn" onClick={() => onCityClick("Bangalore")}>
            Bangalore
          </button>
          <button className="dropbtn" onClick={() => onCityClick("Delhi")}>
            Delhi
          </button>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Cluster</button>
        <div className="dropdown-content">
          <button
            className="dropbtn"
            onClick={() => onClusterClick("cluster-a-21")}
          >
            Cluster-a-21
          </button>
          <button
            className="dropbtn"
            onClick={() => onClusterClick("cluster-a-1")}
          >
            Cluster-a-1
          </button>
          <button
            className="dropbtn"
            onClick={() => onClusterClick("cluster-a-32")}
          >
            Cluster-a-32
          </button>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Space</button>
        <div className="dropdown-content">
          <button
            className="dropbtn"
            onClick={() => onSpaceClick("Leasable Space")}
          >
            Leasable Space
          </button>

          <button
            className="dropbtn"
            onClick={() => onSpaceClick("Warehouse Service")}
          >
            WarehouseService
          </button>
        </div>
      </div>

      <div className="search-container">
        <SearchBar
          placeholder="Search By Warehouse Name"
          value={warehouse}
          onClick={() => onSearch(warehouse)}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    </div>
   
  );
};

export default Navbar;
