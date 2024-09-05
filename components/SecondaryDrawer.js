import { useState } from "react";
import { FiAlignLeft, FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function SecondaryDrawer({ isOpen, handleSecondarySelection }) {
  const [isProjectOpen, setIsProjectOpen] = useState(true);

  const toggleProject = () => {
    setIsProjectOpen(!isProjectOpen);
  };

  return (
    <div
      className={`fixed top-10 left-16 h-[calc(100%-2.5rem)] w-64 bg-[#181818] text-white shadow-md border-r border-gray-600 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
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

          {isProjectOpen && (
            <ul className="pl-6 space-y-2">
              <li
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleSecondarySelection("instafired")}
              >
                <FiAlignLeft />
                <span>instafired</span>
              </li>
              <li
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleSecondarySelection("A Plus")}
              >
                <FiAlignLeft />
                <span>A Plus</span>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
