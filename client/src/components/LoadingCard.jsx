export default function LoadingCard() {
    return (
      <div className="animate-pulse space-y-4 p-4 w-full">
        <div className="bg-gray-300 h-40 rounded-lg w-full mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    );
}
