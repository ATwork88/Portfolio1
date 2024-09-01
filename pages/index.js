import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Drawer from "../components/Drawer";
import SecondaryDrawer from "../components/SecondaryDrawer";
import HomePage from "../components/pages/HomePage";
import UserProfile from "../components/pages/UserProfile";
import ProjectPage from "../components/pages/ProjectPage";
import InstafiredPage from "../components/pages/InstafiredPage";
import APlusPage from "../components/pages/APlusPage";

export default function Home() {
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);
  const [selectedPrimary, setSelectedPrimary] = useState(null);
  const [selectedSecondary, setSelectedSecondary] = useState(null);

  const handleOpenSecondaryDrawer = () => {
    setIsSecondaryOpen(true);
  };

  const handleCloseSecondaryDrawer = () => {
    setIsSecondaryOpen(false);
  };

  const handlePrimarySelection = (iconIndex) => {
    setSelectedPrimary(iconIndex);
    setSelectedSecondary(null);
  };

  const handleSecondarySelection = (item) => {
    setSelectedSecondary(item);
  };

  // Function to determine the main content based on selections
  const renderMainContent = () => {
    if (selectedPrimary === 1) {
      return <HomePage />;
    } else if (selectedPrimary === 2) {
      return <UserProfile />;
    } else if (selectedPrimary === 3) {
      if (selectedSecondary === "instafired") {
        return <InstafiredPage />;
      } else if (selectedSecondary === "A Plus") {
        return <APlusPage />;
      }
      return <ProjectPage />;
    } else if (selectedPrimary === 4) {
      return <MessagesPage />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-[#252526]">
      <TopNavbar />
      <Drawer
        handleOpenSecondary={handleOpenSecondaryDrawer}
        handleCloseSecondary={handleCloseSecondaryDrawer}
        handlePrimarySelection={handlePrimarySelection}
      />
      <SecondaryDrawer
        isOpen={isSecondaryOpen}
        onClose={handleCloseSecondaryDrawer}
        handleSecondarySelection={handleSecondarySelection}
      />
      <main
        className={`pt-16 p-8 ml-16 transition-all duration-300 ${
          isSecondaryOpen ? "ml-80" : ""
        }`}
      >
        {renderMainContent()}
      </main>
    </div>
  );
}
