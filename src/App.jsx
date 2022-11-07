import React, { useEffect } from "react";
// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// react icons
import { FiSettings } from "react-icons/fi";
// popup components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Project Components
import { Navbar, Footer, Sidebar, ThemeSettings, LineChart } from "./components";

// Pages
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";

function App() {
  // activeMenu state
  const activeMenu = true;

  return (
    <div className="App">
      {/* React Router Dom's Routes system */}
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* ---------------------------------Common Elements-------------------------------------- */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            {/* ---------------------------------Tooltip Settings Component------------------------- */}
            {/* ToolTip settings component common in all the app */}
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
                // background will change dynamically when uer select a them inside this sidebar
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* --------------------------------------------------------------------------------------- */}
          {/* -----------------------------------Sidebar COmponent----------------------------------- */}
          {/* Sidebar Component - ONly visible if user clicks on the settings icon */}
          {activeMenu ? (
            // If is active we want to render the sidebar component
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            // If is not active we want to render 'another' sidebar component
            <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
          )}
          <div
            className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`
              // Using template instead the following code because we have code duplicates
              // activeMenu
              //   ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
              //   : "dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2"
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------- */}

          {/* -----------------------------------------Routes System--------------------------------- */}
          {/* Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />}/>
              <Route path="/ecommerce" element={<Ecommerce />}/>
              {/* Pages */}
              <Route path="/orders" element={<Orders />}/>
              <Route path="/employees" element={<Employees />}/>
              <Route path="/customers" element={<Customers />}/>
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />}/>
              <Route path="/editor" element={<Editor />}/>
              <Route path="/calendar" element={<Calendar />}/>
              <Route path="/color-picker" element={<ColorPicker />}/>
              {/* Charts */}
              <Route path="/line" element={<LineChart />}/>
              <Route path="/area" element={<Area />}/>
              <Route path="/bar" element={<Bar />}/>
              <Route path="/pie" element={<Pie />}/>
              <Route path="/financial" element={<Financial />}/>
              <Route path="/color-mapping" element={<ColorMapping />}/>
              <Route path="/pyramid" element={<Pyramid />}/>
              <Route path="/stacked" element={<Stacked />}/>
            </Routes>
          </div>
          {/* --------------------------------------------------------------------------------------- */}
        </div>
      </Router>
    </div>
  );
}

export default App;
