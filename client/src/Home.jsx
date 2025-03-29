import React from 'react';
import SearchEvent from './components/SearchEvent';
import CategoryFilters from './components/CategoryFilters';
import EventCard from './components/EventCard';

export default function Home() {

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div /* className="bg-green-600" */>
        <h1 className="text-4xl font-bold mb-8 pl-8 text-slate-800">Ithaca Community Engagement Events</h1>

        <SearchEvent />
      </div>

      <div className="my-14"></div>

      <div className="flex">
        <CategoryFilters
          category="Volunteer & Service"
          onClickFilter={() => {
            console.log("Volunteer & Service")}
          }
        />

        <CategoryFilters
          category="Cultural & Arts"
          onClickFilter={() => {
            console.log("Cultural & Arts")}
          }
        />

        <CategoryFilters
          category="Educational & Informative"
          onClickFilter={() => {
            console.log("Educational and Informative")}
          }
        />

        <CategoryFilters
          category="Social & Networking"
          onClickFilter={() => {
            console.log("Social & Networking")}
          }
        />

        <CategoryFilters
          category="Health, Recreation & Charity"
          onClickFilter={() => {
            console.log("Health, Recreation & Charity")}
          }
        />
      </div>

      <div className="my-2"></div>

      <div className="flex space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

    </div>
  );
}
