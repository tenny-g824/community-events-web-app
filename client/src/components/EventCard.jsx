// import { useState } from 'react';
// import axios from 'axios';

// export default function EventCard({
//     name,
//     imageUri,
//     dateAndTime,
//     location,
//     summary,
//     sourceName,
//     sourceUrl,
//     onClick,
// }) {
//     const [isAttending, setIsAttending] = useState(false);
//     // const [hasError, setHasError] = useState(undefined);

//     // function handleRsvpClick() {
//     //     onToggleRsvp(isAttending); // Send the request
//     //     setIsAttending(!isAttending); // Flip local state (remember RSVP until refresh)
//     // }

//     // function rsvpToEvent() {
//     //     // setHasError(undefined);

//     //     axios.post(`/api/events/${name}/rsvp`)
//     //         .then(() => {
//     //             setIsAttending(true);
//     //         })
//     //         // .catch((err) => {
//     //         //     setHasError(err);
//     //         // })
//     //         // .finally(() => {
//     //         //     setIsLoading(false);
//     //         // })
//     // };

//     // function cancelRsvp() {
//     //     // setHasError(undefined);

//     //     axios.post(`/api/events/${name}/cancel-rsvp`)
//     //         .then(() => {
//     //             setIsAttending(false);
//     //         })
//     //         // .catch((err) => {
//     //         //     setHasError(err);
//     //         // })
//     //         // .finally(() => {
//     //         //     setIsLoading(false);
//     //         // })
//     // };

//     function onToggleRsvp() {
//         const request = isAttending
//             ? axios.post(`/api/events/${name}/cancel-rsvp`) // Cancel RSVP if already attending
//             : axios.post(`/api/events/${name}/rsvp`); // RSVP if not attending

//         request
//             .then(() => {
//                 setIsAttending(!isAttending); // Ternary logic: true becomes false, false becomes true
//                 // same as: setIsAttending(isAttending ? false : true);
//             })
//             // .catch((err) => {
//             //     setHasError(err);
//             // })
//             // .finally(() => {
//             //     setIsLoading(false);
//             // })
//     }

//     return (
//         <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
//             <button
//                 className="cursor-pointer w-full"
//                 onClick={onClick}
//             >
//                 <img
//                     src={imageUri}
//                     alt={name}
//                     className="w-full h-48 rounded-t-lg object-cover mb-4"
//                 />
//             </button>

//             {sourceName && sourceUrl && (
//                 <p className="text-xs text-gray-500 ml-4">
//                     Image Source:{' '}
//                     <a
//                         href={sourceUrl}
//                         // target="_blank"
//                         // rel="noopener noreferrer"
//                         className="text-blue-500 hover:underline"
//                     >
//                         {sourceName}
//                     </a>
//                 </p>
//             )}

//             <div className="text-left space-y-2 p-4 pt-4">
//                 <button
//                     className="text-xl font-semibold text-gray-800 cursor-pointer"
//                     onClick={onClick}
//                 >
//                     <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//                 </button>

//                 <p className="text-gray-600">
//                     {new Date(dateAndTime).toLocaleDateString('en-US', {
//                         month: 'long',
//                         day: 'numeric',
//                         year: 'numeric',
//                     })}{' | '}
//                     {new Date(dateAndTime).toLocaleTimeString([], {
//                         hour: 'numeric',
//                         minute: '2-digit',
//                         hour12: true,
//                     })}
//                 </p>
//                 <p className="text-gray-600">Location: {location}</p>
//                 <p className="text-gray-600">{summary}</p>

//                 <div className="mt-auto pt-4"> {/* or mt-4 */}
//                     {/* <button
//                         className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full cursor-pointer"
//                     >
//                         Attending
//                     </button> */}

//                     {/* {isAttending ? (
//                         <button
//                             onClick={cancelRsvp}
//                             className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
//                         >
//                             Not Attending
//                         </button>
//                     ) : (
//                         <button
//                             onClick={rsvpToEvent}
//                             className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
//                         >
//                             Attending
//                         </button>
//                     )} */}
//                     <button
//                         onClick={onToggleRsvp}
//                         className={`py-2 px-4 rounded w-full cursor-pointer ${
//                             isAttending
//                                 ? 'bg-red-500 text-white hover:bg-red-600'
//                                 : 'bg-green-500 text-white hover:bg-green-600'
//                         }`}
//                     >
//                         {isAttending ? 'Cancel RSVP' : 'RSVP'}
//                     </button>
//                 </div>

//                 {/* {hasError && (
//                     <p className="text-red-500 text-sm mt-2">
//                         Error: Could not {isAttending ? 'Not Attending' : 'Attending'} to event. Try again.
//                     </p>
//                 )} */}
//             </div>
//         </div>
//     );
// }


import { useState } from 'react';
import axios from 'axios';

export default function EventCard({
    name,
    imageUri,
    dateAndTime,
    location,
    summary,
    sourceName,
    sourceUrl,
    onClick,
}) {
    const [isAttending, setIsAttending] = useState(false);

    function onToggleRsvp() {
        const endpoint = isAttending
            ? axios.post(`/api/events/${name}/cancel-rsvp`) // Cancel RSVP if already attending
            : axios.post(`/api/events/${name}/rsvp`); // RSVP if not attending

        endpoint
            .then(() => {
                setIsAttending(!isAttending); // Ternary logic: true becomes false, false becomes true
                // same as: setIsAttending(isAttending ? false : true);
            })
    }

    return (
        <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <button
                className="cursor-pointer w-full"
                onClick={onClick}
            >
                <img
                    src={imageUri}
                    alt={name}
                    className="w-full h-48 rounded-t-lg object-cover mb-4"
                />
            </button>

            {sourceName && sourceUrl && (
                <p className="text-xs text-gray-500 ml-4">
                    Image Source:{' '}
                    <a
                        href={sourceUrl}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {sourceName}
                    </a>
                </p>
            )}

            <div className="text-left space-y-2 p-4 pt-4">
                <button
                    className="text-xl font-semibold text-gray-800 cursor-pointer"
                    onClick={onClick}
                >
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                </button>

                <p className="text-gray-600">
                    {new Date(dateAndTime).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}{' | '}
                    {new Date(dateAndTime).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </p>
                <p className="text-gray-600">Location: {location}</p>
                <p className="text-gray-600">{summary}</p>

                <div className="mt-auto pt-4"> {/* or mt-4 */}
                    <button
                        onClick={onToggleRsvp}
                        className={`py-2 px-4 rounded w-full cursor-pointer ${
                            isAttending
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                    >
                        {isAttending ? 'Not Attending' : 'Attending'}
                    </button>
                </div>
            </div>
        </div>
    );
}
