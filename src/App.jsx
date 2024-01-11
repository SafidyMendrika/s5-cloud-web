import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackOfficeLayout from "./layouts/BackOfficeLayout";
import FrontOfficeLayout from "./layouts/FrontOfficeLayout";

const BackOfficeRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
  </Routes>
);

const FrontOfficeRoutes = () => (
  <Routes>
    <Route path="/home" element={<h1>Home</h1>} />
  </Routes>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/back-office/*"
        element={
          <BackOfficeLayout>
            <BackOfficeRoutes />
          </BackOfficeLayout>
        }
      />
      <Route
        path="/front-office/*"
        element={
          <FrontOfficeLayout>
            <FrontOfficeRoutes />
          </FrontOfficeLayout>
        }
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
