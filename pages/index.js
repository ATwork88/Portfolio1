// pages/index.js
import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Drawer from "../components/Drawer";
import SecondaryDrawer from "../components/SecondaryDrawer";

export default function Home() {
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false); // State to handle secondary drawer

  // Function to handle the opening of the secondary drawer
  const handleOpenSecondaryDrawer = () => {
    setIsSecondaryOpen(true);
  };

  // Function to handle closing of the secondary drawer
  const handleCloseSecondaryDrawer = () => {
    setIsSecondaryOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#252526]">
      <TopNavbar />
      <Drawer
        handleOpenSecondary={handleOpenSecondaryDrawer}
        handleCloseSecondary={handleCloseSecondaryDrawer}
      />
      {/* Secondary Drawer */}
      <SecondaryDrawer
        isOpen={isSecondaryOpen}
        onClose={handleCloseSecondaryDrawer}
      />
      {/* Main Content */}
      <main
        className={`pt-16 p-8 ml-16 transition-all duration-300 ${
          isSecondaryOpen ? "ml-80" : ""
        }`}
      >
        <h1 className="text-4xl font-bold text-white">
          Welcome to My Personal Website
        </h1>
        <p className="mt-4 text-white">
          This site is styled to look like VSCode!
        </p>
      </main>
    </div>
  );
}
