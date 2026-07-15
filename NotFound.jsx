import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 px-5">
      <h1 className="text-9xl font-extrabold text-red-500">
        404
      </h1>

      <h2 className="mt-4 text-4xl font-bold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-center text-gray-600">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}
