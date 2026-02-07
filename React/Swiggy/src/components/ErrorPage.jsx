import { Link } from "react-router-dom";

const ErrorPage = ({ message }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        {/* Image */}
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/404.png"
          alt="Page not found"
          className="w-72 mx-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Uh-oh! Page not found
        </h1>
        <p>{message}</p>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved. Let’s get
          you back to good food 😋
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
