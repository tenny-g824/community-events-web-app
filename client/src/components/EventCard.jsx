export default function EventCard({
    name,
    imageUri,
    dateAndTime,
    location,
    summary,
    sourceName,
    sourceUrl,
    onClick,
    // isAttending,
    // onToggleRsvp
}) {
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

                <div className="mt-auto pt-4">
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full cursor-pointer"
                    >
                        Attending
                    </button>

                    {/* <button
                        className={`py-2 px-4 rounded w-full cursor-pointer ${
                            isAttending
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-green-500 text-white hover:bg-green-600'
                        }`}
                        onClick={() => onToggleRsvp()}
                    >
                        {isAttending ? 'Not Attending' : 'Attending'}
                    </button> */}
                </div>
            </div>
        </div>
    );
}
