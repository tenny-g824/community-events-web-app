export default function Chip({ category, onClickChip }) {
    return (
        <div className="mb-4">
            <button
                className="bg-blue-500 text-white rounded-full py-3 px-4 mr-3 cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-emerald-900 transition duration-300"
                onClick={onClickChip}
            >
                {category}
            </button>
        </div>
    );
}
