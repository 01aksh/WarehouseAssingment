import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../Components/CardComponent/CardComponent";

const ClusterPage = () => {
  
  const clusterData = useSelector((state) => state.filteredCluster);

  return (
    <div className="container">
      <div className="row">
        {clusterData.map((item) => {
          return <CardComponent item={item}  key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default ClusterPage;
