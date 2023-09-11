import React from "react";

export const BASE_PATH = "/";

export const PATH_CITY = "/city";

export const PATH_CLUSTER = "/cluster";
export const PATH_SPACE_AVAILABLE = "/spaceavailable";

const CityPage = React.lazy(() => import("../src/Pages/CityPage"));

const routes = [
  {
    path: PATH_CITY,
    component: CityPage,
  },
];

export default routes;
