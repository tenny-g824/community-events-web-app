export default function LoadingCard() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="animate-pulse rounded-xl shadow-md p-4 space-y-4 bg-white">
        <div className="bg-gray-100 h-48 rounded-lg w-full"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}
