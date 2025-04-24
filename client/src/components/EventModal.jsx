export default function EventModal({ event, onModalClose }) {

    // If no event is provided, this function returns undefined and the modal will not render anything
    if (!event) {
        return undefined;
    }

    return (
        <div className="flex flex-col fixed inset-0 bg-slate bg-opacity-40 backdrop-blur-md p-6 items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full min-h-[700px] relative">
                <button aria-label="close"
                    onClick={onModalClose}
                    className="cursor-pointer absolute top-4 right-3 w-10 h-10"
                >
                    <img
                        // Source: Grey x-Icon by Flaticon
                        // Source URL: https://www.flaticon.com/free-icon/delete_11425359?term=x-icon&page=1&position=86&origin=search&related_id=11425359
                        src="/x-grey-icon.png"
                        alt="Close"
                    />
                </button>

                {/* <div className="w-full h-[400px]"> */}
                <div className="w-full h-[320px]">
                    <img
                        src={event.imageUri}
                        alt={event.name}
                        className="w-full h-100 object-cover rounded-t-xl"
                    />
                </div>

                <div className="p-8 mt-20 text-slate-900">
                    <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
                    <p className="mb-6 font-medium">{event.description}</p> {/* text-lg */}

                    <div className="space-y-2"> {/* text-lg */}
                        <p>
                            <strong>Date:</strong>{' '}
                            {new Date(event.dateAndTime).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </p>
                        <p>
                            <strong>Time:</strong>{' '}
                            {new Date(event.dateAndTime).toLocaleTimeString([], {
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
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
