import { useEffect } from "react";

export default function HomePage() {
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "Q") {
      alert("Ctrl + Shift + 1 detected!");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
      <img
        src="/jiggly.png"
        alt="Centered Logo"
        className="w-40 h-40 mb-8 opacity-25"
      />

      <div className="space-y-4">
        <p className="text-sm">
          Who Am I <kbd className="bg-gray-700 px-2 py-1 rounded">Teresa</kbd> +{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Lin</kbd>
        </p>
        <p className="text-sm">
          Where Am I From{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Taipei</kbd> +{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Taiwan</kbd>
        </p>
        <p className="text-sm">
          What I Do{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Front End</kbd> +{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Back End</kbd>
        </p>
        <p className="text-sm">
          What I Do For Fun{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Gaming</kbd> +{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Lifting</kbd>
        </p>
        <p className="text-sm">
          My Projects <kbd className="bg-gray-700 px-2 py-1 rounded">Ctrl</kbd>{" "}
          + <kbd className="bg-gray-700 px-2 py-1 rounded">Shift</kbd> +{" "}
          <kbd className="bg-gray-700 px-2 py-1 rounded">Q</kbd>
        </p>
      </div>
    </div>
  );
}
