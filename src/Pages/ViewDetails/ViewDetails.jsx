import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { editWarehouseDetails } from "../../Redux/action";

const ViewDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const [warehouseDetails, setWarehouseDetails] = useState({
    warehouseName: location.state.item.name,
    city: location.state.item.city,
    cluster: location.state.item.cluster,
    code: location.state.item.code,
    type: location.state.item.type,
    spaceAvailable: location.state.item.space_available,
  });

  const editedData = useSelector((state) => state.editedData);

  const handleWarehouseDetails = (e) => {
    setWarehouseDetails({
      ...warehouseDetails,
      [e.target.name]: e.target.value,
    });
  };
  const onEditClick = () => {
    setEdit(true);
  };
  const onSaveClick = () => {
    dispatch(editWarehouseDetails(warehouseDetails));

    alert("Details Saved SuccessFully");
    setEdit(false);
  };
  const onCancel = () => {
    setEdit(false);
  };
  return (
    <>
      <div className="w-100 d-flex flex-row justify-content-center">
        <div className=" w-75 mt-4 p-4 form-control shadow">
          <div className=" text-center px-4 ">
            <h3>Details Of {location.state.item.name}</h3>
          </div>
          <div className="d-flex flex-row justify-content-end mb-4">
            {edit ? (
              <button
                type="button"
                className="btn btn-primary ms-4"
                onClick={onSaveClick}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary ms-4"
                onClick={onEditClick}
              >
                Edit
              </button>
            )}
            <button
              type="button"
              className="btn btn-primary ms-4"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
          <div className="d-flex flex-column ">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <p className="fs-4 fw-medium">WareHouse Name:</p>
              {edit ? (
                <input
                  type="text"
                  className="form-control w-50 ms-2 fs-4 mb-2"
                  value={warehouseDetails.warehouseName}
                  name="warehouseName"
                  onChange={handleWarehouseDetails}
                />
              ) : (
                <p className="fs-4 fw-normal ms-2">
                  {warehouseDetails.warehouseName}
                </p>
              )}
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center">
              <p className="fs-4 fw-medium">Code:</p>
              <p className="fs-4 fw-normal ms-2 readonly">
                {warehouseDetails.code}
              </p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <p className="fs-4 fw-medium">City:</p>
              {edit ? (
                <input
                  type="text"
                  className="form-control w-50 ms-2 fs-4 mb-2"
                  value={warehouseDetails.city}
                  name="city"
                  onChange={handleWarehouseDetails}
                />
              ) : (
                <p className="fs-4 fw-normal ms-2">{warehouseDetails.city}</p>
              )}
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <p className="fs-4 fw-medium">Cluster:</p>
              {edit ? (
                <input
                  type="text"
                  className="form-control w-50 ms-2 fs-4 mb-2"
                  value={warehouseDetails.cluster}
                  name="cluster"
                  onChange={handleWarehouseDetails}
                />
              ) : (
                <p className="fs-4 fw-normal ms-2">
                  {warehouseDetails.cluster}
                </p>
              )}
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <p className="fs-4 fw-medium">Space Type:</p>
              {edit ? (
                <input
                  type="text"
                  className="form-control w-50 ms-2 fs-4 mb-2"
                  value={warehouseDetails.type}
                />
              ) : (
                <p className="fs-4 fw-normal ms-2">{warehouseDetails.type}</p>
              )}
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <p className="fs-4 fw-medium">Space Available:</p>
              {edit ? (
                <input
                  type="text"
                  className="form-control w-50 ms-2 fs-4 mb-2"
                  value={warehouseDetails.spaceAvailable}
                  name="spaceAvailable"
                  onChange={handleWarehouseDetails}
                />
              ) : (
                <p className="fs-4 fw-normal ms-2">
                  {warehouseDetails.spaceAvailable}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
