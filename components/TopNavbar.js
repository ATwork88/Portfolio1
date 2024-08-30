// components/TopNavbar.js
export default function TopNavbar() {
    return (
      <div className="fixed top-0 left-0 right-0 h-10 bg-[#1E1E1E] text-white flex items-center px-4 shadow-sm z-50">
        {/* Logo or Title */}
        <div className="text-sm font-semibold">Toolkit Gallery</div>
  
        {/* Menu Options */}
        <div className="flex space-x-6 ml-6 text-xs">
          <button className="hover:text-gray-300">File</button>
          <button className="hover:text-gray-300">Edit</button>
          <button className="hover:text-gray-300">Selection</button>
          <button className="hover:text-gray-300">View</button>
          <button className="hover:text-gray-300">Go</button>
          <button className="hover:text-gray-300">Run</button>
          <button className="hover:text-gray-300">Terminal</button>
          <button className="hover:text-gray-300">Help</button>
        </div>
  
        {/* Spacer */}
        <div className="flex-1"></div>
  
        {/* Right Side Content (optional) */}
        <div className="flex items-center space-x-4">
          <span className="text-xs">User Info</span>
        </div>
      </div>
    );
  }
  