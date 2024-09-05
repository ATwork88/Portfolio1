import { FiHome, FiUser } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";

export default function Drawer({
  handleOpenSecondary,
  handleCloseSecondary,
  handlePrimarySelection,
}) {
  const handleIconClick = (iconIndex) => {
    handlePrimarySelection(iconIndex);
    if (iconIndex === 3) {
      handleOpenSecondary();
    } else {
      handleCloseSecondary();
    }
  };

  return (
    <div className="flex">
      <div className="fixed top-10 left-0 h-full w-16 bg-[#181818] text-white flex flex-col items-center py-4 shadow-lg z-40 border-r border-gray-600">
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
            <FaCode size={24} />
          </button>
        </nav>
      </div>
    </div>
  );
}
