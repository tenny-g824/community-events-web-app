export default function EventModal2({ event, onModalClose }) {

    // If no event is provided, this function returns undefined and the modal will not render anything
    if (!event) {
        return undefined;
    }

    return (
        <div className="flex flex-col fixed inset-0 bg-slate bg-opacity-40 backdrop-blur-md p-6 items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full relative">
                <div className="absolute top-0 right-2 text-gray-800 px-75 py-6 w-40 h-40 text-5xl">
                    <button aria-label="close"
                        onClick={onModalClose}
                        className="cursor-pointer absolute top-0 right-0 text-gray-800 text-5xl"
                    >
                        <img
                            src="/x-grey-icon.png"
                            alt="Close"
                            // className="w-full h-full object-contain hover:opacity-80 transition duration-200"
                        />
                    </button>
                </div>
                <img
                    src={event.imageUri}
                    alt={event.name}
                    className="w-full h-74 object-cover rounded-t-xl"
                />
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6"> {event.name}</h2>
                    <p className="mb-4 text-slate-900"><strong> {event.description}</strong></p>
                    <div className="space-y-3 text-slate-900">
                        <p>
                            <strong>Date:</strong>{' '} {/* space before writing the time */}
                            {new Date(event.dateAndTime).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                        <p>
                            <strong>Time:</strong>{' '} {/* space before writing the time */}
                            {new Date(event.dateAndTime).toLocaleTimeString([], {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true
                            })}
                        </p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Number of Attendees:</strong> {event.numberOfAttendees}</p>
                        <p><strong>Price:</strong> ${event.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
