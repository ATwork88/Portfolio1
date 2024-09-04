import { useState } from "react";
import { FiInfo, FiSettings } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function APlusPage() {
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
            <h3 className="text-2xl">A Plus</h3>
            <p className="mt-4">Lorem Ipsum</p>

            <h3 className="text-2xl mt-4">Inspiration</h3>
            <p className="mt-4">Lorem Ipsum</p>
            <h3 className="text-2xl mt-4">Built With</h3>
            <div class="flex space-x-2 mt-4">
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React Badge"
              />
              <img
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                alt="Next JS Badge"
              />
              <img
                src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                alt="Node.js Badge"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                alt="Typescript Badge"
              />

              <img
                src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
                alt="MUI Badge"
              />
              <img
                src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                alt="Docker Badge"
              />
              <img
                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="PostgreSQL Badge"
              />
              <img
                src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"
                alt="Google Cloud Badge"
              />
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="Git Badge"
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
    <div className="text-white p-4">
      <div className="flex items-start mb-4">
        {/* Project Icon */}
        <div className="flex-shrink-0 mr-4">
          <img src="/owl.png" alt="A Plus Logo" className="w-[7em] h-[7em]" />
        </div>

        {/* Project Information */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-semibold">A Plus</h2>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-800 text-green-500 px-2 py-1 rounded text-xs">
                10K installs
              </span>
              <span className="text-gray-400 text-sm">
                Last Updated: 2024-08-30
              </span>
            </div>
          </div>

          {/* Project Description */}
          <p className="mb-4">Lorem Ipsum</p>

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
          <FiSettings className="mr-2" />
          Dependencies
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}
