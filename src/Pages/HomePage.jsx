import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, requestUsers } from "../Redux/action";

const HomePage = () => {
  // const data = useSelector((state) => state.data);
  // const dataFilter = useSelector((state) => state.filteredData);
  // const dispatch = useDispatch();


  // const handleFilter = () => {
  //   dispatch(filterData("Indore", data));
  //   console.log(dataFilter);
  // };
  return (
    <div className="w-100 fs-1 fw-bold text-light text-center mt-4">
      Welcome To StockArea
      {/* <button onClick={handleFilter}>Filter Data</button> */}

    </div>
  );
};

export default HomePage;
