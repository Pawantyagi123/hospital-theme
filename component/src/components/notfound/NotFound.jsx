// NotFound.jsx
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/50 text-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-gray-400">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center mt-6 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" /> Go Back Home
        </Link>
      </div>
    </div>
  );
}
