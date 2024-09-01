export default function APlusPage() {
  return (
    <div className="text-white p-4">
      {/* Project Header */}
      <div className="flex items-center space-x-4 mb-4">
        <h2 className="text-2xl font-semibold">A Plus</h2>
        <span className="bg-gray-800 text-green-500 px-2 py-1 rounded text-xs">
          5K installs
        </span>
        <span className="text-gray-400 text-sm">Last Updated: 2024-07-25</span>
      </div>

      {/* Project Description */}
      <p className="mb-4">
        A Plus is an educational platform for grading and assessment, providing
        tools for educators to manage their courses and students efficiently.
      </p>

      {/* Technologies Used */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
