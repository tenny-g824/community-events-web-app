export default function Chip({ category, isActive, onClickChip }) {
    return (
        <div>
            <button
                className={`cursor-pointer rounded-full py-3 px-4 mr-2 mb-2 text-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    isActive ? "bg-blue-700 text-white" : "bg-blue-200 text-blue-800 hover:bg-blue-300"
                }`}
                onClick={onClickChip}
                aria-pressed={isActive}
            >
                {category}
            </button>
        </div>
    );
}
