import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Welcome from "./components/Welcome.jsx";
import EmployeePage from "./components/EmployeePage.jsx";
import { useState } from "react";
import { MdPerson } from "react-icons/md";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden relative">
        
        <div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 flex items-center gap-3 px-4 py-3 border-b shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white bg-blue-600 px-3 py-1 rounded"
          >
            ☰
          </button>
          <div className="flex items-center gap-2 text-gray-700 text-lg font-semibold">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <MdPerson className="text-gray-600 text-sm" />
            </div>
            <span>ABC Company</span>
          </div>
        </div>

        
        <div
          className={`fixed z-40 md:relative md:translate-x-0 transition-transform duration-300
                      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

       
        <div
          className={`flex-1 bg-gray-50 overflow-y-auto min-h-screen 
                      pt-16 px-4 md:pt-4 transition-all duration-300`}
        >
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/employee-data" element={<EmployeePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
