import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Container/Navbar";
import CityPage from "./Pages/CityPage";
import ClusterPage from "./Pages/ClusterPage";
import HomePage from "./Pages/HomePage";
import SpacePage from "./Pages/SpacePage";
import WarehouseItems from "./Pages/WarehouseItems/WarehouseItems";
import ViewDetails from "./Pages/ViewDetails/ViewDetails";

function App() {
  return (
    <div className="w-100 min-vh-100 bg-dark bg-gradient ">
      <Router>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="/cluster" element={<ClusterPage />} />
          <Route path="/spaceavailable" element={<SpacePage />} />

          <Route path="/warehouseitems" element={<WarehouseItems />} />
          <Route path="/viewdetails" element={<ViewDetails />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
