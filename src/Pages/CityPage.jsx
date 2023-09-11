import React from "react";
import { useLocation, useNavigate } from "react-router";
import data from "../Util/warehouse.json";
import CardComponent from "../Components/CardComponent/CardComponent";
const CityPage = () => {
  const navigate = useNavigate();
  // console.log(data);

  const location = useLocation();
  console.log(location);

  const items = location.state.filterdata;
  console.log(items);
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          return <CardComponent item={item}/>;
        })}
      </div>
    </div>
  );
};

export default CityPage;
