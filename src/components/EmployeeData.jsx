import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiFilter, FiCalendar, FiEdit, FiTrash } from "react-icons/fi";


const employees = [
  {
    id: 1,
    badge: "234567",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "60123456789",
    img: "/assets/user1.jpg",
  },
  {
    id: 2,
    badge: "364158",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "60134567890",
    img: "/assets/user1.jpg",
  },
  {
    id: 3,
    badge: "345678",
    name: "Michael Johnson",
    email: "michael.john@example.com",
    phone: "60145678901",
    img: "/assets/user1.jpg",
  },
];


const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => {
  const isEmpty = !value || value === "";
  return (
    <div
      onClick={onClick}
      ref={ref}
      className="relative w-full sm:w-36 border px-3 py-2 rounded-md text-sm flex items-center justify-between cursor-pointer"
    >
      <span className={`text-sm ${isEmpty ? "text-gray-400" : "text-gray-700"}`}>
        {isEmpty ? placeholder : value}
      </span>
      <FiCalendar className="text-gray-500 ml-2" />
    </div>
  );
});

export default function EmployeeTable() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="p-4">
    
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FiFilter className="text-gray-600" />
          <span className="font-medium">Filter By Date:</span>
        </div>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInput placeholder="Start Date" />}
          dateFormat="dd-MM-yyyy"
          isClearable
        />
        <span className="font-bold text-gray-600">–</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          customInput={<CustomInput placeholder="End Date" />}
          dateFormat="dd-MM-yyyy"
          isClearable
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-200 px-4 py-2 rounded text-center">
          Total Subsidy Used: MYR 30
        </div>
        <div className="bg-gray-200 px-4 py-2 rounded text-center">
          Total Subsidy Lapsed: MYR 0
        </div>
        <div className="bg-gray-200 px-4 py-2 rounded text-center">
          Total Topup Amount: MYR 120
        </div>
      </div>

      
      <div className="overflow-x-auto bg-white rounded-md shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left">Face ID</th>
              <th className="p-3 text-left">Badge No.</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Mobile No.</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <img
                    src={emp.img}
                    alt="face"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </td>
                <td className="p-3">{emp.badge}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3">{emp.phone}</td>
                <td className="p-3 flex gap-2">
                  <FiEdit className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                  <FiTrash className="text-gray-600 hover:text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
