import React from "react";

const VSCodeTab = ({ tabNames, children }) => {
  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white">
      {/* Tab Header */}
      <div className="flex items-center h-10 bg-[#181818] border-b border-[#252526]">
        {/* Render Tab Items Dynamically */}
        {tabNames.map((tabName, index) => (
          <div
            key={index}
            className={`flex items-center px-4 h-full ${
              index === 0 ? "bg-[#1e1e1e] border-t-2 border-[#0178d5]" : ""
            }`}
          >
            <span className="text-sm">{tabName}</span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default VSCodeTab;
