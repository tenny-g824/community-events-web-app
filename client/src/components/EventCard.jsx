export default function EventCard({
    name,
    imageUri,
    dateAndTime,
    location,
    summary,
    onClick,
}) {
    return (
        <div
            className="cursor-pointer bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
            onClick={onClick}
        >
            <img
                src={imageUri}
                alt={name}
                className="w-full h-48 rounded-t-lg object-cover mb-4"
            />
            <div className="text-left space-y-2 p-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
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
                        className="bg-green-500 text-white py-2 px-4 rounded max-w-sm hover:bg-green-600 w-full cursor-pointer"
                    >
                        Attending
                    </button>
                </div>
            </div>
        </div>
    );
}
