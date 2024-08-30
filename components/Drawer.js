// components/Drawer.js
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

export default function Drawer({ handleOpenSecondary, handleCloseSecondary }) {
  // Function to handle icon clicks
  const handleIconClick = (iconIndex) => {
    if (iconIndex === 3) {
      // Open secondary drawer only if the third icon is clicked
      handleOpenSecondary();
    } else {
      // Close secondary drawer for any other icon
      handleCloseSecondary();
    }
  };

  return (
    <div className="flex">
      {/* Main Drawer */}
      <div
        className={`fixed top-10 left-0 h-full w-16 bg-[#181818] text-white flex flex-col items-center py-4 shadow-lg z-40 border-r border-[#2b2b2b]`} // Add right border classes here
      >
        <div className="mb-8">
          <span className="text-sm font-bold">VSCode</span>
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col space-y-6">
          <button
            onClick={() => handleIconClick(1)}
            className="p-2 rounded-md hover:bg-[#333]"
          >
            <FiHome size={24} />
          </button>
          <button
            onClick={() => handleIconClick(2)}
            className="p-2 rounded-md hover:bg-[#333]"
          >
            <FiUser size={24} />
          </button>
          <button
            onClick={() => handleIconClick(3)}
            className="p-2 rounded-md hover:bg-[#333]"
          >
            <FiFolder size={24} />
          </button>
          <button
            onClick={() => handleIconClick(4)}
            className="p-2 rounded-md hover:bg-[#333]"
          >
            <FiMail size={24} />
          </button>
        </nav>
      </div>
    </div>
  );
}
