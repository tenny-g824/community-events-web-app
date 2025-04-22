export default function ErrorAlert({ message, onRetry }) {
  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-red-600 text-white p-5 flex items-center justify-between shadow-md">
      <span className="text-base sm:text-lg font-semibold">{message}</span>
      <button
        onClick={onRetry}
        className="cursor-pointer bg-white text-red-600 px-5 py-3 rounded-md hover:bg-red-100 transition-colors duration-200 font-bold ml-6"
      >
        Try Again
      </button>
    </div>
  );
}
