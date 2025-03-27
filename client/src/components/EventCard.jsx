import React, { useState } from 'react';

export default function EventCard() {

    const [isEventModalOpen, setIsEventModalOpen] = useState(false);

    return (
        <div>
            <dialog open={isEventModalOpen}>
                <div className="flex flex-col fixed inset-0 bg-slate bg-opacity-40 backdrop-blur-md p-6 items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
                        <button aria-label="close"
                            className="absolute top-0 right-4 text-gray-800 px-79 py-9 text-5xl cursor-pointer"
                            onClick={() => setIsEventModalOpen(false)}
                        >
                            &times;
                        </button>
                        <img src="/community-clean-up-img.jpg" alt="Community Clean-up Day" className="w-full h-74 object-cover rounded-t-xl" />
                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-6"> Community Clean-Up Day</h2>
                            <p className="mb-4 text-slate-900"><strong> Join your fellow residents in a collaborative effort to clean and revitalize Stewart Park. This annual event encourages community involvement by promoting environmental stewardship and civic pride. Participants will work in teams to pick up litter, plant flowers, and restore walking trails. Supplies such as gloves and trash bags will be provided. Complimentary refreshments and a community barbecue will follow the clean-up.</strong></p>
                            <div className="space-y-3 text-slate-900">
                                <p><strong>Date:</strong> March 15, 2025</p>
                                <p><strong>Time:</strong> 9:00 AM</p>
                                <p><strong>Location:</strong> Stewart Park, Ithaca, NY</p>
                                <p><strong>Number of Attendees:</strong> 85</p>
                                <p><strong>Price:</strong> Free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>

            <div
                onClick={() => setIsEventModalOpen(true)}
                className="block bg-white p-4 rounded-xl shadow-lg text-left cursor-pointer"
            >
                <img src='/community-clean-up-img.jpg' alt="community clean-up day" className="w-full h-40 rounded-lg object-cover mb-4" />

                <div className="text-left space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800">Community Clean-Up Day</h3>
                    <p className="text-gray-600">March 15, 2025 | 9:00 AM</p>
                    <p className="text-gray-600">Location: Stewart Park, Ithaca, NY</p>
                    <p className="text-gray-600">Volunteer with Ithaca Residents to clean and revitalize the local park.</p>
                    <div className="mt-4">
                        <button className="bg-green-500 text-white py-2 px-4 rounded max-w-sm hover:bg-green-600 w-full cursor-pointer">Attending</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
