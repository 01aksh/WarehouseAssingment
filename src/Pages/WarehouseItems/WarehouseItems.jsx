import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { useSelector } from "react-redux";

const WarehouseItems = () => {
  const searchedData = useSelector((state) => state.searchWareHouse);
  return (
    <>
      {searchedData.length === 0 ? (
        <p className="w-100 fs-1 fw-bold text-light text-center mt-4">No Data Found</p>
      ) : (
        <div className="container">
          <div className="row">
            {searchedData.map((item) => {
              return <CardComponent item={item} key={item.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default WarehouseItems;
