import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import TestLayout from "./TestLayout";
import LitterDetection from "./pages/projects/LitterDetection";
import LitterMapping from "./pages/projects/LitterMapping";
import RovEstimation from "./pages/projects/RovEstimation";
import College from "./pages/college/College";
import About from "./pages/about/About";
import Homepage from "./pages/homepage/Homepage";
import WebPortfolio from "./pages/projects/WebPortfolio";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/web-portfolio" element={<TestLayout />}>
          <Route index element={<Homepage />}/>
          <Route path="about" element={<About />}/>
          <Route path="college" element={<College />}/>
          <Route path="litter-detection" element={<LitterDetection />}/>
          <Route path="litter-mapping" element={<LitterMapping />}/>
          <Route path="rov-estimation" element={<RovEstimation />}/>
          <Route path="webportfolio" element={<WebPortfolio />}/>
      </Route>
    )
  );   

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;