import SearchEvent from './components/SearchEvent';
import Chip from './components/Chip';
import EventCard from './components/EventCard';

export default function Home() {

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div /* className="bg-green-600" */>
        <h1 className="text-4xl font-bold mb-8 pl-8 text-slate-800">Ithaca Community Engagement Events</h1>

        <SearchEvent />
      </div>

      <div className="my-14"></div>

      {/* <div className="flex justify-center gap-x-3"> */}
      <div className="flex gap-x-3">
        <Chip
          category="Volunteer & Service"
          // onClickChip={() => ('/api/events?category={{"volunteer"}}')}
        />

        <Chip
          category="Cultural & Arts"
          // onClickChip={}
          // onClickChip={() => {
          //   console.log("Cultural & Arts")}
          // }
        />

        <Chip
          category="Educational & Informative"
          // onClickChip={() => {
          //   console.log("Educational and Informative")}
          // }
        />

        <Chip
          category="Social & Networking"
          // onClickChip={() => {
          //   console.log("Social & Networking")}
          // }
        />

        <Chip
          category="Health & Recreation"
          // onClickChip={() => {
          //   console.log("Health & Recreation")}
          // }
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
