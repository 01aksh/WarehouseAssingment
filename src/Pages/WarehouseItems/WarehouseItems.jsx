import React from "react";
import data from "../../Util/warehouse.json";
import "./WarehouseItems.css";
import { useLocation, useNavigate } from "react-router-dom";
import CardComponent from "../../Components/CardComponent/CardComponent";

const WarehouseItems = () => {
  const navigate = useNavigate();
  console.log(data);

  const location = useLocation();
  console.log(location);

  const items = location.state.searchData;
  console.log(items);

  const onViewDetails = (name) => {
    navigate("/viewdetails", {
      state: {
        name: name,
      },
    });
  };
  return (
    <>
      
      <div className="container">
        <div className="row">
          {items.map((item) => {
            return <CardComponent item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WarehouseItems;
