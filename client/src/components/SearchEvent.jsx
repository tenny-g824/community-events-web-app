import React from 'react';

export default function SearchEvent() {
    return (
        <div className="mb-4 flex justify-center">
            <input
                type="text"
                placeholder="Search Your Events. . ."
                className="w-4/5 p-3 rounded-xl border border-gray-400 focus:outline-none"
            />
        </div>
    );
}
