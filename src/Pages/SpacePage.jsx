import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "../Components/CardComponent/CardComponent";

const SpacePage = () => {
  // const navigate = useNavigate();
  const spaceData = useSelector((state) => state.filteredSpace);
  console.log(spaceData);


  return (
    <div className="container">
      <div className="row">
        {spaceData.map((item) => {
          return <CardComponent item={item}  key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default SpacePage;
