// components/SecondaryDrawer.js
import { useState } from "react";
import { FiFile, FiImage, FiChevronDown, FiChevronRight } from "react-icons/fi"; // Import arrow icons

export default function SecondaryDrawer({ isOpen, onClose }) {
  const [isProjectOpen, setIsProjectOpen] = useState(true); // State to handle collapse/expand

  const toggleProject = () => {
    setIsProjectOpen(!isProjectOpen); // Toggle the state
  };

  return (
    <div
      className={`fixed top-10 left-16 h-[calc(100%-2.5rem)] w-64 bg-[#181818] text-white shadow-md border-r border-[#2b2b2b] transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Secondary Drawer Content */}
      <div className="p-4">
        {/* Project Header */}
        <ul className="space-y-2 pl-2">
          <li
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleProject}
          >
            {isProjectOpen ? (
              <FiChevronDown className="text-white" />
            ) : (
              <FiChevronRight className="text-white" />
            )}
            <span>Project</span>
          </li>

          {/* Collapsible File List */}
          {isProjectOpen && (
            <ul className="pl-6 space-y-2">
              <li className="flex items-center space-x-2">
                <FiFile className="text-yellow-500" />
                <span>favicon.ico</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiImage className="text-purple-500" />
                <span>logo.png</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiImage className="text-purple-500" />
                <span>owl.png</span>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
