// search icon by the right of the search bar

export default function SearchEvent() {
    return (
        <div className="mb-4 flex justify-center">
            <div className="relative w-4/5">
                <input
                    type="text"
                    placeholder="Search Your Events. . ."
                    className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-400 focus:outline-none"
                />
                <img
                    src="/search-icon.png"
                    alt="Search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
                />
            </div>
        </div>
    );
}


// search icon by the left of the search bar

// export default function SearchEvent() {
//     return (
//         <div className="mb-4 flex justify-center">
//             <div className="relative w-4/5">
//                 <img
//                     src="/search-icon.png"
//                     alt="Search"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Search Your Events. . ."
//                     className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-400 focus:outline-none"
//                 />
//             </div>
//         </div>
//     );
// }
