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
    navigate("/warehouseitems", {
      state: {
        name: warehouse,
      },
    });
    setWarehouse("");
  };

  const onCityClick = (cityname) => {
    dispatch(filterData(cityname, waredata));
    navigate("/city", {
      state: {
        city: cityname,
      },
    });
  };
  const onClusterClick = (clustername) => {
    dispatch(filteredCluster(clustername, waredata));

    navigate("/cluster", {
      state: {
        cluster: clustername,
      },
    });
  };
  const onSpaceClick = (type) => {
    dispatch(filteredSpace(type, waredata));
    navigate("/spaceavailable", {
      state: {
        type: type,
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
