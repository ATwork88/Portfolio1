import { useState, useEffect } from "react";
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
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 to avoid SSR issues

  const handleOpenSecondaryDrawer = () => {
    if (window.innerWidth >= 768) {
      // Only open the secondary drawer if the window width is 768px or larger
      setIsSecondaryOpen(true);
    }
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

  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (selectedPrimary === 3) {
          // Only handle drawer visibility when the "Projects" tab is selected
          if (window.innerWidth < 768) {
            setIsSecondaryOpen(false); // Close the secondary drawer on small screens
          } else {
            setIsSecondaryOpen(true); // Reopen the secondary drawer on larger screens
          }
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [selectedPrimary]); // Dependency array includes selectedPrimary to trigger effect when it changes

  return (
    <div className="flex min-h-screen bg-[#252526]">
      <TopNavbar />
      <Drawer
        handleOpenSecondary={handleOpenSecondaryDrawer}
        handleCloseSecondary={handleCloseSecondaryDrawer}
        handlePrimarySelection={handlePrimarySelection}
      />
      {selectedPrimary === 3 && windowWidth >= 768 && (
        <SecondaryDrawer
          isOpen={isSecondaryOpen}
          onClose={handleCloseSecondaryDrawer}
          handleSecondarySelection={handleSecondarySelection}
        />
      )}
      <main
        className={`flex-grow p-8 pt-16 transition-all duration-300 ${
          selectedPrimary === 3 && isSecondaryOpen ? "ml-80" : "ml-16"
        }`}
      >
        {renderMainContent()}
      </main>
    </div>
  );
}
