import { useState } from "react";
import { FiInfo, FiSettings } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbPackages } from "react-icons/tb";

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
            <p className="mt-4">
              A comprehensive and user-friendly web app designed to streamline
              and enhance the management of cram schools. The app provides
              robust tools for handling all aspects of school administration,
              from managing teacher profiles and student enrollments to
              organizing class schedules and tracking attendance. With features
              like automated homework and assignment management, you can easily
              assign tasks, monitor submissions, and provide feedback, all in
              one place. The integrated billing and payment system simplifies
              the invoicing process, allowing you to generate invoices and
              manage payments efficiently. Additionally, the app offers a
              powerful attendance tracking feature to ensure accurate and
              up-to-date records of student participation. This all-in-one
              solution is perfect for cram schools looking to improve
              operational efficiency, communication, and the overall learning
              experience.
            </p>

            <h3 className="text-2xl mt-4">Inspiration</h3>
            <p className="mt-4">
              This web app was born out of necessity—and my absolute hatred for
              Excel! My dad runs a cram school and has been doing everything the
              old-school way with pen and paper. Picture this: he spends half
              his day buried in stacks of paper, painstakingly tracking each
              student's attendance and manually calculating invoices. When he
              asked me to create an Excel sheet to help, I knew there had to be
              a better way (because I'd rather do anything than deal with
              Excel). So, instead of suffering through spreadsheet hell, I
              decided to sacrifice my free time to build this web app.
            </p>

            <h3 className="text-2xl mt-4">Built With</h3>
            {/* Updated Flexbox Container for Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
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
      case "features":
        return (
          <div>
            <div className="feature-list">
              <ul className="list-disc pl-5">
                <li className="text-white">Teacher Management</li>
                <li className="text-white">Student Enrollment Management</li>
                <li className="text-white">Class Scheduling and Management</li>
                <li className="text-white">
                  Homework and Assignments Management
                </li>
                <li className="text-white">Billing and Payments</li>
              </ul>
            </div>
          </div>
        );
      case "dependencies":
        return (
          <div>
            <div className="dependency-list">
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
          </div>

          {/* Project Description */}
          <p className="mb-4">
            Manage your cram school with ease by automating student records,
            schedules, and attendance.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <a
              href="https://github.com/teresalin/aplus-tj"
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
          onClick={() => handleTabClick("features")}
          className={`flex items-center px-4 py-2 ${
            activeTab === "features"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-400"
          }`}
        >
          <FiSettings className="mr-2" />
          Features
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
