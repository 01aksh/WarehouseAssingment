import React from "react";
import { useLocation, useNavigate } from "react-router";
import data from "../Util/warehouse.json";
import CardComponent from "../Components/CardComponent/CardComponent";

const ClusterPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const items = location.state.filteredCluster;
  console.log(items);

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          return <CardComponent item={item} />;
        })}
      </div>
    </div>
  );
};

export default ClusterPage;
