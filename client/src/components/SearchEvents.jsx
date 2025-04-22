// search icon by the left of the search bar (an icon)

export default function SearchEvents() {
    return (
        <div className="mb-4 flex justify-center">
            <div className="relative w-4/5">
                <img
                    src="/search-icon.png"
                    alt="Search"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
                />
                <input
                    type="text"
                    placeholder="Search Your Events. . ."
                    className="w-full pl-11.5 pr-4 py-3 rounded-xl text-lg border border-gray-400 focus:outline-none"
                />
            </div>
        </div>
    );
}
