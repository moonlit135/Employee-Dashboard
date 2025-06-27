import { BiExport } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
     
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
        Employee Data
      </h1>

      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-sm">
          + Add Employee
        </button>
        <button className="text-blue-600 text-2xl">
          <BiExport />
        </button>
      </div>
    </div>
  );
}


