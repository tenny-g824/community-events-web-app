// search icon by the left of the search bar (an icon)

export default function SearchEvents() {
    return (
        <div className="mb-4 flex justify-center">
            <div className="relative w-4/5">
                <img
                    // Source: Search Icon by Freepik - Flaticon
                    // Source URL: https://www.flaticon.com/free-icon/loupe_751381?term=search&page=1&position=32&origin=tag&related_id=751381
                    src="/search-icon.png"
                    alt="Search"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
                />
                <input
                    type="text"
                    placeholder="Search Your Events. . ."
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-lg border border-gray-400 hover:border-blue-600 focus:outline focus:outline-blue-600 transition-colors duration-200"
                />
            </div>
        </div>
    );
}



// search icon by the right of the search bar (clickable icon)

// import { useState } from 'react';

// export default function SearchEvents2({ onSearch }) {
//     const [searchTerm, setSearchTerm] = useState('');

//     const onSearchClick = () => {
//         onSearch(searchTerm);
//     };

//     return (
//         <div className="mb-4 flex justify-center">
//             <div className="relative w-4/5">
//                 <input
//                     type="text"
//                     placeholder="Search Your Events. . ."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-11.5 pr-4 py-3 rounded-xl text-lg border border-gray-400 focus:outline-none"
//                 />
//                 <button
//                     onClick={onSearchClick}
//                     className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
//                 >
//                     <img
//                         src="/search-icon.png"
//                         alt="Search"
//                         className="w-7 h-7"
//                     />
//                 </button>
//             </div>
//         </div>
//     );
// }
