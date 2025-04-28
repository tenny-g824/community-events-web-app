import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import SearchEvents from './components/SearchEvents';
import Chip from './components/Chip';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import LoadingCard from './components/LoadingCard';
import ErrorAlert from './components/ErrorAlert';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(undefined);
  const [chosenEvent, setChosenEvent] = useState(undefined);
  const [currentFilter, setCurrentFilter] = useState(undefined);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch] = useDebounce(searchInput, 500);

  function getEventData() {
    setIsLoading(true);
    setHasError(undefined);

    axios.get('/api/events', {
      params: debouncedSearch && currentFilter
        ? { q: debouncedSearch, category: currentFilter }
        : debouncedSearch
          ? { q: debouncedSearch }
          : currentFilter
            ? { category: currentFilter }
            : undefined
    })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        setHasError(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  };

  useEffect(() => {
    // request event JSON data from the server
    getEventData(currentFilter);
    console.log("Searched Term", debouncedSearch); // Debugging
    console.log("Get Events with Current Filter", currentFilter); // Debugging
  }, [debouncedSearch, currentFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-sky-100 p-8">
      {hasError ? (
        <ErrorAlert
          message={"Error loading events. Please check internet connection and refresh the page to try again"}
          onRetry={() => {
            getEventData(); // After the Error Alert, Retry fetching the event data
          }}
        />
      ) : (
        <>
          <div className="bg-white/80 rounded-lg shadow-md p-8 mb-10 border border-gray-300">
            <h1 className="text-5xl font-extrabold text-left text-green-700 mb-10 tracking-tight drop-shadow-md">
              Ithaca Community Engagement Events
            </h1>

            <SearchEvents value={searchInput} onChange={setSearchInput} />
          </div>


          {/* delete this <div className="rounded-xl bg-gray-100 border border-gray-300 px-5 py-6 mb-8 shadow-sm">
            <header className="mb-3">
              <h2 className="text-gray-700 font-bold text-lg">
                Previous Searches
              </h2>
            </header>
            <ul className="space-y-1 list-inside list-decimal text-gray-900">
              {searchHistory.map((term, i) => (
                <li key={i} className="pl-2">
                  {term || "Empty Search"}
                </li>
              ))}
            </ul>
          </div> */}

          <div className="my-12"></div>

          <div className="flex gap-x-3">
            {[
              { label: "Volunteer & Service", value: "volunteer" },
              { label: "Cultural & Arts", value: "culturalArts" },
              { label: "Educational & Informative", value: "educationalInfo" },
              { label: "Social & Networking", value: "socials" },
              { label: "Health & Recreation", value: "healthRecreation" },
            ].map(({ label, value }) => (
              <Chip
                key={value}
                category={label}
                isActive={currentFilter === value}
                onClickChip={() => {
                  // If the filter is already selected and the user clicks it again, remove the filter. Otherwise, apply the filter.
                  const newFilter = currentFilter === value ? undefined : value;
                  console.log("Selected Filter:", newFilter); // Debugging
                  setCurrentFilter(newFilter);
                }}
              />
            ))}
          </div>

          <div className="my-6"></div>

          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          )}

          {!isLoading && !hasError && (
            <div className="flex space-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard
                  key={event._id}
                  id={event._id}
                  name={event.name}
                  imageUri={event.imageUri}
                  dateAndTime={event.dateAndTime}
                  location={event.location}
                  summary={event.summary}
                  sourceName={event.sourceName}
                  sourceUrl={event.sourceUrl}
                  onClick={() => setChosenEvent(event)}
                />
              ))}
            </div>
          )}

          <EventModal
            event={chosenEvent}
            onModalClose={() => setChosenEvent(undefined)}
          />
        </>
      )}
    </div>
  );
}

// another way use `axios.get` in `useEffect` in `Home.jsx`
// useEffect(() => {
  //   const getEventData = (category) => {
  //     console.log("Current Filter before API call:", currentFilter);
  //     setIsLoading(true);
  //     setHasError(null);

  //     axios.get('/api/events', {
  //       params: category ? { category } : undefined,
  //     })
  //       .then((response) => {
  //         console.log("API Response:", response.data); // Debugging; delete this
  //         setEvents(response.data);
  //       })
  //       .catch((err) => {
  //         console.error("API Error:", err); // Debugging; delete this
  //         setHasError(err);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       })
  //   };

  //   getEventData(currentFilter);
  //   console.log("Current Filter", currentFilter);
  // }, [currentFilter]);
