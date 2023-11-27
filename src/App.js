import { useEffect, useRef, useState } from "react";
import { computeDropdownButtonPosition } from "./Utils";
import SVGDropdown from "./components/header/SVGDropdown";
import HomepageContent from "./HomepageContent";
import NavigationMenu from "./components/navmenu/NavigationMenu";
import Header from "./components/header/Header";
import ContentTest from "./ContentTest";
import BackgroundVideo from "./BackgroundVideo";
import {createBrowserRouter, Routes, Route, NavLink, createRoutesFromElements, RouterProvider} from "react-router-dom"
import TestLayout from "./TestLayout";
import LitterDetection from "./pages/projects/LitterDetection";
import Projects from "./Projects";
import LitterMapping from "./pages/projects/LitterMapping";
import RovEstimation from "./pages/projects/RovEstimation";
import College from "./pages/college/College";
import About from "./pages/about/About";
import TestDrop from "./TestDrop";

import Homepage from "./pages/homepage/Homepage";

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
          {/*
          <Route path="test" element={<TestDrop />}/> */}
      </Route>
    )
  );   

  // const handleResize = () =>{
  //   const isMonitorView = window.innerWidth > window.innerHeight;
  //   if(isMonitorViewLast.current ^ isMonitorView){
  //       setSVGViewBox(isMonitorView ? svgViewBoxMonitor : svgViewBoxMobile);
  //       isMonitorViewLast.current = isMonitorView;
  //   }
  //   computeDropdownButtonPosition();
  // };

  // useEffect(()=>{
  //   window.addEventListener("resize", handleResize);
  //   computeDropdownButtonPosition();
  //   return ()=>{
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


  return (
    // <>
    //   <BackgroundVideo />
    //   <Header svgViewbox={svgViewBox}/>
    //   <HomepageContent />
    // </>
    //------------------------------------------------
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;