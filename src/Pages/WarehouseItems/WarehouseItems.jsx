import React from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { useSelector } from "react-redux";

const WarehouseItems = () => {
  const searchedData = useSelector((state) => state.searchWareHouse);

  return (
    <>
      <div className="container">
        <div className="row">
          {searchedData.map((item) => {
            return <CardComponent item={item}  key={item.id}/>;
          })}
        </div>
      </div>
    </>
  );
};

export default WarehouseItems;
