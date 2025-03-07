import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SpotPage from "./pages/SpotPage";
import ContractPage from "./pages/ContractPage";
import NavBar from "./components/NavBar";
function App() {
  const brandName = "Hoptrans Logistics- Maršrutų skaičiouklė";
  return(
    
    <BrowserRouter>
    <div>
      <NavBar header={brandName}
      />
    </div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/spot" element={<SpotPage />} />
        <Route path="/contract" element={<ContractPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;