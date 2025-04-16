# Documenting my Evaluation and API Design

The AI's (ChatGPT) design correctly included the correct HTTP methods, URIs, request bodies, response statuses, and response bodies for both the Event and RSVP endpoints. These are correct because the AI's design used GET for retrieving data, POST for creating resources, PUT for updating them, and DELETE for removal according to the documentation for CRUD operations. It also used a plural noun ("events") as its collection following a logical URI structure ('/api/events') and used path parameters for accessing specific items, which is consistent with best REST practices taught in lectures. However, it used the wrong URI syntax ('/api/events/{id}') and an incorrect filter format ('/api/events?category=Volunteer%26Service'), which I corrected to '/api/events/:id' and '/api/events?category={{"volunteer"}}' to match common RESTful practices and class coding exercises. Additionally, the AI did not provide examples of the request and response bodies, so I added clear `json` examples to improve the clarity of the API and demonstrate what is expected to be received and returned. My revisions makes sure that the API is both accurate and easier to understand.


## Event Endpoints

- **Get All Events**

  - Brief Description: Retrieves a list of all events.
  - CRUD Operation: Read (collection)
  - HTTP Method: GET
  - URI: `/api/events`
  - Query Parameters: None
  - Request Body (example request): None
  - Response Status: 200 OK
  - Response Body: JSON array of events

    Response Body Example:

      ```json
      [
        {
          "id": "abc123",
          "name": "Community Clean-Up Day",
          "category": "volunteer",
          "dateAndTime": "2025-05-15T09:00:00Z",
          "location": "Stewart Park, Ithaca, NY",
          "summary": "Volunteer with Ithaca Residents to clean and revitalize the local park.",
          "description": "Join your fellow residents in a collaborative effort to clean and revitalize Stewart Park. This annual event encourages community involvement by promoting environmental stewardship and civic pride. Participants will work in teams to pick up litter, plant flowers, and restore walking trails. Supplies such as gloves and trash bags will be provided. Complimentary refreshments and a community barbecue will follow the clean-up.",
          "numberOfAttendees": 85,
          "price": 0.00
        },
        ...
      ]
      ```

- **Get Event by ID**

  - Brief Description: Retrieves details of a specific event by its ID
  - CRUD Operation: Read (document)
  - HTTP Method: GET
  - URI: `/api/events/:id`
  - Query Parameters: None (the event ID is passed as a path parameter, not a query parameter)
  - Request Body: None
  - Response Status: 200 OK
  - Response Body: JSON event object

    Response Body Example:

      ```json
      {
        "id": "abc123",
        "name": "Community Clean-Up Day",
        "category": "volunteer",
        "dateAndTime": "2025-05-15T09:00:00Z",
        "location": "Stewart Park, Ithaca, NY",
        "summary": "Volunteer with Ithaca Residents to clean and revitalize the local park.",
        "description": "Join your fellow residents in a collaborative effort to clean and revitalize Stewart Park. This annual event encourages community involvement by promoting environmental stewardship and civic pride. Participants will work in teams to pick up litter, plant flowers, and restore walking trails. Supplies such as gloves and trash bags will be provided. Complimentary refreshments and a community barbecue will follow the clean-up.",
        "numberOfAttendees": 85,
        "price": 0.00
      }
      ```

- **Get All Events By a Specific Category**

  - CRUD Operation: Read (collection)
  - HTTP Method: GET
  - URI: `/api/events`
  - Query Parameters:
    - `category`: Filters events by a specific category (e.g. "Volunteer & Service", "Cultural & Arts").
  - Request Body (example request): GET `/api/events?category={{"volunteer"}}` following class practices (or, if using "Volunteer & Service" as the Category name, it would be GET `/api/events?category=Volunteer%20%26%20Service`, where `space` become `%20` and `&` becomes `%26`)
  - Response Status: 200 OK
  - Response Body: JSON array of events

    Response Body Example:

      ```json
      [
        {
          "id": "6efc6930",
          "name": "Food Bank Drive",
          "category": "volunteer",
          "dateAndTime": "2025-08-05T09:00:00Z",
          "location": "Ithaca Food Bank, Ithaca, NY",
          "summary": "A drive to collect food donations for local residents in need.",
          "description": "Help fight hunger by participating in our annual Food Bank Drive. We are collecting non-perishable food items to support local families in need. Community members are encouraged to drop off donations and stay for refreshments and live music. Volunteers will be on-site to help sort and distribute items. Every contribution makes a difference!",
          "numberOfAttendees": 75,
          "price": 0.00
        },
        ...
      ]
      ```

- **Create Event**

  - Brief Description: Creates a new event with the provided details
  - CRUD Operation: Create (document)
  - HTTP Method: POST
  - URI: `/api/events`
  - Query Parameter: None (data is sent in the request body, not as query parameters)
  - Request Body: JSON

    Request Body Example:

      ```json
      {
        "name": "Youth Mentoring Meetup",
        "category": "volunteer",
        "dateAndTime": "2025-05-25T17:00:00Z",
        "location": "Ithaca Public Library, Ithaca, NY",
        "summary": "Connecting youth with mentors from various professions.",
        "description": "This event brings together young individuals seeking guidance with professionals from various fields. Mentors will share insights about career development, goal setting, and leadership. Attendees will have the chance to build lasting connections and participate in group activities.",
        "numberOfAttendees": 25,
        "price": 0.00
      }
      ```

  - Response Status: 201 Created
  - Response Body: JSON of created event

    Response Body Example:

      ```json
      {
        "id": "bc90g7654",
        "name": "Youth Mentoring Meetup",
        "category": "volunteer",
        "dateAndTime": "2025-05-25T17:00:00Z",
        "location": "Ithaca Public Library, Ithaca, NY",
        "summary": "Connecting youth with mentors from various professions.",
        "description": "This event brings together young individuals seeking guidance with professionals from various fields. Mentors will share insights about career development, goal setting, and leadership. Attendees will have the chance to build lasting connections and participate in group activities.",
        "numberOfAttendees": 25,
        "price": 0.00
      }
      ```

- **Update (replace) Event**

  - Brief Description: Updates the details of an existing event by its ID
  - CRUD Operation: Update (replace doc)
  - HTTP Method: PUT
  - URI: `/api/events/:id`
  - Query Parameters: None (data is sent in the request body, and the event ID is passed as a path parameter)
  - Request Body: JSON

    Request Body Example:

      ```json
      {
        "name": "Neighborhood Block Party",
        "category": "socials",
        "dateAndTime": "2025-07-25T16:00:00Z",
        "location": "Ithaca Commons, Ithaca, NY",
        "summary": "A festive block party fostering community bonding and fun.",
        "description": "Experience the magic of live theater with performances by talented local actors showcasing original, community-driven plays. The event aims to highlight the voices and stories of Ithaca residents, bringing humor, drama, and heartfelt moments to the stage. Stick around after the show for a meet-and-greet with the cast and crew. Snacks and beverages will be available for purchase.",
        "numberOfAttendees": 34,
        "price": 0.00
      }
      ```

  - Response Status: 200 OK
  - Response Body: JSON returning updated (replaced) event

    Response Body Example:

      ```json
      {
        "id": "458jef4",
        "name": "Neighborhood Block Party",
        "category": "socials",
        "dateAndTime": "2025-07-25T16:00:00Z",
        "location": "Ithaca Commons, Ithaca, NY",
        "summary": "A festive block party fostering community bonding and fun.",
        "description": "Experience the magic of live theater with performances by talented local actors showcasing original, community-driven plays. The event aims to highlight the voices and stories of Ithaca residents, bringing humor, drama, and heartfelt moments to the stage. Stick around after the show for a meet-and-greet with the cast and crew. Snacks and beverages will be available for purchase.",
        "numberOfAttendees": 34,
        "price": 0.00
      }
      ```

- **Update (modify) Event**

  - Brief Description: Updates specific fields of an existing event without replacing the entire document.
  - CRUD Operation: Update (modify doc)
  - HTTP Method: PATCH
  - URI: `/api/events/:id`
  - Query Parameters: None (data is sent in the request body, and the event ID is passed as a path parameter)
  - Request Body: JSON

    Request Body Example:

      ```json
      {
        "numberOfAttendees": 100,
        "location": "Cascadilla Park, Ithaca, NY"
      }
      ```

  - Response Status: 200 OK
  - Response Body: JSON returning modified event

    Response Body Example:

      ```json
      {
        "id": "abc123",
        "name": "Community Clean-Up Day",
        "category": "volunteer",
        "dateAndTime": "2025-05-15T09:00:00Z",
        "location": "Cascadilla Park, Ithaca, NY",
        "summary": "Volunteer with Ithaca Residents to clean and revitalize the local park.",
        "description": "Join your fellow residents in a collaborative effort to clean and revitalize Stewart Park. This annual event encourages community involvement by promoting environmental stewardship and civic pride. Participants will work in teams to pick up litter, plant flowers, and restore walking trails. Supplies such as gloves and trash bags will be provided. Complimentary refreshments and a community barbecue will follow the clean-up.",
        "numberOfAttendees": 100,
        "price": 0.00
      }
      ```

- **Delete Event**

  - Brief Description: Deletes or Removes an event by its ID
  - CRUD Operation: Delete (document)
  - HTTP Method: DELETE
  - URI: `/api/events/:id`
  - Query Parameters: None (the event ID is passed as a path parameter)
  - Request Body: None
  - Response Status: 204 No Content
  - Response Body: None


## RSVP Endpoints

- **RSVP to Event**

  - Brief Description: Allows a user to RSVP to an event. If no user information is provided, the RSVP will be anonymous
  - CRUD Operation: Create (document)
  - HTTP Method: POST
  - URI: `/api/events/:id/rsvp`
  - Query Parameters: None (data is sent in the request body or not required)
  - Request Body: Optional user info. If no user info is provided, the RSVP will be anonymous.
  - Response Status: 200 OK
  - Response Body: JSON of Confirmation message

    Response Body Example:

      ```json
      {
        "message": "RSVP Confirmed",
        "eventId": "bc90g7654",
      }
      ```

- **Cancel RSVP**

  - Brief Description: Cancels or deletes a user's RSVP for an event
  - CRUD Operation: Delete (document)
  - HTTP Method: DELETE
  - URI: `/api/events/:id/rsvp`
  - Query Parameters: None (the event ID is passed as a path parameter)
  - Request Body: None
  - Response Status: 200 OK
  - Response Body: JSON of Confirmation message

    Response Body Example:

      ```json
      {
        "message": "RSVP Successfully Canceled"
      }
      ```
