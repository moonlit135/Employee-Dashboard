import {
  FaUsers,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [isEmployeesOpen, setEmployeesOpen] = useState(true);
  const [isMerchantsOpen, setMerchantsOpen] = useState(true);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      
      <div
        className={`fixed sm:static top-0 left-0 h-screen z-40 bg-white border-r p-4 transition-transform duration-300 w-64 flex flex-col justify-between
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
      >
        <div>
          
          <div className="hidden sm:flex items-center gap-2 text-lg font-semibold mb-6 text-gray-700">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <MdPerson className="text-gray-600 text-sm" />
            </div>
            <span>ABC Company</span>
          </div>

          <hr className="my-4 border-t border-gray-300" />

          <nav>
           
            <div
              onClick={() => setEmployeesOpen(!isEmployeesOpen)}
              className={`mt-4 flex items-center gap-2 text-sm font-medium px-2 py-2 rounded-md cursor-pointer 
                ${
                  isActive("/employee-data") || isActive("/employee-status")
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
            >
              <FaUsers />
              <span>Employees</span>
              <FaChevronDown
                className={`ml-auto transform transition-transform duration-200 ${
                  isEmployeesOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </div>

            {isEmployeesOpen && (
              <ul className="ml-6 mt-2 mb-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/employee-data"
                    className={`flex items-center gap-2 px-2 py-2 rounded-md ${
                      isActive("/employee-data")
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={() => setSidebarOpen(false)} 
                  >
                    <span>Employee Data</span>
                    <FaChevronRight className="ml-auto text-xs" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employee-status"
                    className={`flex items-center gap-2 px-2 py-2 rounded-md ${
                      isActive("/employee-status")
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={() => setSidebarOpen(false)} 
                  >
                    <span>Employee Status</span>
                  </Link>
                </li>
              </ul>
            )}

           
            <div
              className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-pointer mt-4"
              onClick={() => setMerchantsOpen(!isMerchantsOpen)}
            >
              <HiShoppingBag />
              <span>Merchants</span>
              <FaChevronDown
                className={`ml-auto transform transition-transform duration-200 ${
                  isMerchantsOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </div>

            {isMerchantsOpen && (
              <ul className="ml-6 mt-2 space-y-2 text-gray-700 text-sm">
                <li className="px-2 py-2 rounded-md hover:bg-purple-100 cursor-pointer">
                  Merchant List
                </li>
                <li className="px-2 py-2 rounded-md hover:bg-purple-100 cursor-pointer">
                  Merchant Status
                </li>
              </ul>
            )}
          </nav>
        </div>

        
        <button className="text-gray-600 text-sm flex items-center gap-2 mt-6 p-2">
          <FiLogOut className="text-base" />
          <span>Sign Out</span>
        </button>
      </div>
    </>
  );
}

