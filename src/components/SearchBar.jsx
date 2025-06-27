import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      
      
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        <input
          type="text"
          placeholder="Search with Badge No. | Name | Email..."
          className="px-3 py-2 border rounded-md w-full sm:w-80 text-sm"
        />
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-sm">
          <FiSearch />
          <span>Search</span>
        </button>
      </div>

      
      <div className="flex justify-center md:justify-end">
        <span className="bg-gray-200 px-4 py-2 rounded text-sm text-gray-800">
          Total Employees: 3
        </span>
      </div>
    </div>
  );
}
