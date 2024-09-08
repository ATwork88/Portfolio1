import { useState } from "react";
import { FiInfo, FiSettings } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbPackages } from "react-icons/tb";

export default function InstafiredPage() {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div>
            <h3 className="text-2xl">Instafired</h3>
            <p className="mt-4">
              Instafired is an automated process designed to send daily messages
              to friends on Instagram at a specific time, every day. It takes
              the hassle out of manual messaging by allowing you to schedule
              personalized messages in advance, ensuring consistent
              communication without the need to remember or manually send them.
            </p>

            <h3 className="text-2xl mt-4">Inspiration</h3>
            <p className="mt-4">
              It all started when a friend of mine got fired, and I couldn’t
              resist asking him, “How’s that unemployment life?” every single
              day. It became our little inside joke, and I thought, why not take
              it up a notch? So, I built Instafired – a cheeky automation that
              sends him the same question at 6 a.m. every morning. Because if
              there’s one thing better than friendship, it’s relentless,
              automated mockery!
            </p>
            <h3 className="text-2xl mt-4">Built With</h3>
            <div class="flex flex-wrap gap-2 mt-4">
              <img
                src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                alt="Python Badge"
              />
              <img
                src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"
                alt="Google Cloud Badge"
              />
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="Git Badge"
              />
              <img
                src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                alt="Instagram Badge"
              />
            </div>
          </div>
        );
      case "dependencies":
        return (
          <div>
            <div class="dependency-list">
              {/* Instagrapi Dependency */}
              <a
                href="https://github.com/subzeroid/instagrapi"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center p-3 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer">
                  {/* GitHub Icon */}
                  <FaGithub className="text-white w-8 h-8 mr-3" />
                  {/* Dependency Details */}
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Instagrapi</span>
                    <span className="text-gray-400 text-xs">
                      subzeroid/instagrapi
                    </span>
                  </div>
                </div>
              </a>
              {/* Google Cloud Dependency */}
              <a
                href="https://cloud.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center p-3 rounded-lg mb-2 hover:bg-gray-700 cursor-pointer">
                  <FcGoogle className="w-8 h-8 mr-3" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">
                      Google Cloud
                    </span>
                    <span className="text-gray-400 text-xs">
                      cloud.google.com
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-white p-8">
      <div className="flex items-start mb-4">
        {/* Project Icon */}
        <div className="flex-shrink-0 mr-4">
          <img
            src="/instagram.png"
            alt="Instagram Logo"
            className="w-[7em] h-[7em]"
          />
        </div>

        {/* Project Information */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-semibold">Instafired</h2>
          </div>

          {/* Project Description */}
          <p className="mb-4">
            Automated your messages to friends on Instagram.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <a
              href="https://github.com/teresalin/insta-fired"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 h-6 rounded-sm"
            >
              GitHub
            </a>
            <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 h-6 rounded-sm">
              Install
            </button>
          </div>
        </div>
      </div>

      {/* Project Tabs */}
      <div className="flex space-x-4 border-b border-gray-600 mb-4">
        <button
          onClick={() => handleTabClick("details")}
          className={`flex items-center px-4 py-2 ${
            activeTab === "details"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
        >
          <FiInfo className="mr-2" />
          Details
        </button>
        <button
          onClick={() => handleTabClick("dependencies")}
          className={`flex items-center px-4 py-2 ${
            activeTab === "dependencies"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
        >
          <TbPackages className="mr-2" />
          Dependencies
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
