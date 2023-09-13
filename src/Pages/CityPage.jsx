import React from "react";
import CardComponent from "../Components/CardComponent/CardComponent";
import { useSelector } from "react-redux";


const CityPage = () => {
  const dataFilter = useSelector((state) => state.filteredData);

  return (
    <div className="container">
      <div className="row">
        {dataFilter.map((item) => {
          return <CardComponent item={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default CityPage;
