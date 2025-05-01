import { useState } from 'react';
import axios from 'axios';

export default function EventCard({
    id,
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
    const [hasError, setHasError] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    function onToggleRsvp() {
        setHasError(undefined);
        setIsLoading(true);

        const endpoint = isAttending
            ? axios.post(`/api/events/${id}/cancel-rsvp`) // Cancel RSVP if already attending
            : axios.post(`/api/events/${id}/rsvp`); // RSVP if not attending

        endpoint
            .then(() => {
                setIsAttending(!isAttending);
                // same as: setIsAttending(isAttending ? false : true);
            })
            .catch((err) => {
                setHasError(err);
            })
            .finally(() => {
                setIsLoading(false);
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
                        // target="_blank" // this opens the source link in a new tab
                        // rel="noopener noreferrer" // security and performance when opening links in a new tab (target="_blank").
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
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            isAttending ? 'Not Attending' : 'Attending'
                        )}
                    </button>
                </div>

                {hasError && (
                    <p className="text-red-500 text-sm mt-2">
                        Error: Could not {isAttending ? 'Cancel RSVP' : 'RSVP'} to event. Try again.
                    </p>
                )}
            </div>
        </div>
    );
}



// another way to to toggle the RSVP using 'if-else' statement

    // function onToggleRsvp() {
    //     console.log("RSVP Button Clicked", onClick);
    //     setHasError(undefined);
    //     setIsLoading(true);

    //     if (isAttending) {
    //         console.log("Canceling RSVP...");
    //         axios.post(`/api/events/${id}/cancel-rsvp`) // Cancel RSVP if already attending
    //             .then(() => {
    //                 console.log("RSVP canceled successfully");
    //                 setIsAttending(false);
    //             })
    //             .catch((err) => {
    //                 console.error("Error canceling RSVP:", err);
    //                 setHasError(err);
    //             })
    //             .finally(() => {
    //                  setIsLoading(false);
    //             });
    //     } else {
    //         console.log("Submitting RSVP...");
    //         axios.post(`/api/events/${id}/rsvp`) // RSVP if not attending
    //             .then(() => {
    //                 console.log("RSVP submitted successfully");
    //                 setIsAttending(true);
    //             })
    //             .catch((err) => {
    //                 console.error("Error submitting RSVP:", err);
    //                 setHasError(err);
    //             })
    //             .finally(() => {
    //                  setIsLoading(false);
    //             });
    //     }
    // }
