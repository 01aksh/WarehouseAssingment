import React from "react";
import { useNavigate } from "react-router";

const CardComponent = ({ item }) => {
  const navigate = useNavigate();

  const onViewDetails = (name) => {
    navigate("/viewdetails", {
      state: {
        item: item,
      },
    });
  };

  return (
    <div className=" col-3 m-2 ">
      <div className="card shadow h-100" key={item.id}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {item.city}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {item.code}
          </h6>

          <button
            type="button"
            className="btn btn-outline-primary "
            onClick={() => onViewDetails(item.name)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
