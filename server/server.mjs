import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

// log every request to the console
app.use((req, res, next) => {
  console.log('>', req.method, req.path);
  next();
});

// --- Change nothing above this line ---


// Connect to MongoDB
const client = new MongoClient('mongodb://localhost:27017');
const conn = await client.connect();
const db = conn.db('app');

/*
This GET endpoint from OpenAI ChatGPT correctly gets all events from the MongoDB 'events' collection without applying any filters. It uses MongoDB's .find().toArray() method directly to fetch all the documents. A 200 status code is then returned along with the full array of events. It also assumes the database connection `db` has already been properly initialized (which it has).
*/
app.get('/api/events', async (req, res) => {
  const events = await db.collection('events').find().toArray()
  res.status(200).json(events);
});

/*
This GET endpoint from OpenAI ChatGPT gets a single event by its MongoDB ObjectId. The code first checks if the ID is valid using ObjectId.isValid(), then queries the 'events' collection to find a matching document using findOne(). A 200 status is returned with the event data if it is found, else it returns a 404 if the event is not found or does not exist.
*/
app.get('/api/events/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const event = await db.collection('events').findOne({ _id: new ObjectId(id) });

    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).send();
    }
  } else {
    res.status(404).send();
  }
});

/*
This GET endpoint from OpenAI ChatGPT correctly filters events based on a 'category' query parameter using MongoDB's .find().toArray(). It creates a search filter from the request data, and applies the category filter only when the query parameter exists to retrieve only matching events. A 200 OK response is returned if events are found, else a 404 status code is returned if no events match the category.
*/
app.get('/api/events', async (req, res) => {
  const eventCategory = req.query.category;

  let filteredEvents = {};
  if (eventCategory) {
    filteredEvents.category = eventCategory;
  }

  const events = await db.collection('events')
    .find(filteredEvents)
    .toArray();

  if (events.length > 0) {
    res.status(200).json(events);
  } else {
    res.status(404).send();
  }
});

/*
This POST endpoint from OpenAI ChatGPT correctly creates a new event by inserting the request body into the 'events' collection. It checks that required fields like name and category are present before inserting. I updated the original 400 error response from ChatGPT to return a 404 status code instead, based on the coding exercises practiced in class. If valid, the event is inserted using insertOne(), and the newly created document is returned with a 201 Created status.
*/
app.post('/api/events', async (req, res) => {
  const newCommunityEvent = req.body;

  if (!newCommunityEvent || !newCommunityEvent.name || !newCommunityEvent.category) {
    res.status(404).send();
  }

  const createStatus = await db.collection('events').insertOne(newCommunityEvent);
  const createdEvent = await db.collection('events').findOne({ _id: createStatus.insertedId });
  // const createdEvent = { ...newCommunityEvent, _id: createStatus.insertedId };
  res.status(201).json(createdEvent);
});

/*
This PUT endpoint from OpenAI ChatGPT fully replaces an event document using its ObjectId; however Gen AI checks if the `updateEvent` object exists and if it includes both the name and category which is unnecessary since we can already assume that a valid JSON object will be sent in the request body. The code then correctly validates the ID, and the existing document is replaced using updateOne() and removes the `_id` field, which prevents MongoDB update errors. A 200 status code returns the updated document if successful, else a 404 status code is returned if no document is matched.
*/
app.put('/api/events/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const updateEvent = req.body;

    delete updateEvent._id; // Remove _id field from the request body

    // replace the event
    const replaceStatus = await db.collection('events').replaceOne(
      { _id: id },
      updateEvent
    );

    if (replaceStatus.modifiedCount > 0) {
      const replacedEvent = await db.collection('events').findOne({ _id: id });
      res.status(200).json(replacedEvent);
    } else {
      res.status(404).send();
    }
  } else {
    res.status(404).send();
  }
});

/*
This PATCH endpoint from OpenAI ChatGPT partially updates an event by modifying only the specified fields; however Gen AI checks for the request body and whether partiallyUpdateEvent is empty which is unnecessary as a valid JSON object is already assumed to be sent in the request body. It validates the event ID and makes sure that that there's at least one field to update/modify before applying changes using MongoDB’s $set operator with updateOne(). It checks whether the update modified any document and returns the updated document with a 200 status code if successful. A 404 status code is returned if there is missing data or invalid ID.
*/
app.patch('/api/events/:id', async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const id = new ObjectId(req.params.id);
    const partiallyUpdateEvent = req.body;

    // Partially update the event
    const modifyStatus = await db.collection('events').updateOne(
      { _id: id },
      { $set: partiallyUpdateEvent }
    );

    if (modifyStatus.modifiedCount > 0) {
      const modifiedEvent = await db.collection('events').findOne({ _id: id });
      res.status(200).json(modifiedEvent);
    } else {
      res.status(404).send();
    }
  } else {
    res.status(404).send();
  }
});

/*
This DELETE endpoint from OpenAI ChatGPT correctly removes an event based on its Mongo ObjectId. It makes sure that the ID is valid and a matching document exists before attempting deletion with MongoDB's deleteOne(). A 204 status is returned if deletion is successful. Else, a 404 status code is returned if the event does not exist or has already been removed.
*/
app.delete('/api/events/:id', async (req, res) => {
  const id = req.params.id;
  if (ObjectId.isValid(id)) {
    const deleteEvent = await db.collection('events').deleteOne({ _id: new ObjectId(id) });

    if (deleteEvent.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  } else {
    res.status(404).send();
  }
});

/*
This POST endpoint from OpenAI ChatGPT correctly confirms an RSVP by incrementing the numberOfAttendees by 1 for a valid event ID, triggering an RSVP action. However, Gen AI uses $addToSet to add req.body.userId to the rsvps array which is unnecessary, as the requirements of the code only focuses on updating the total count, not individual RSVPs. The $inc operator in updateOne() is correctly used to increase the count, and the event ID is validated before checking if the update actually modified any document. A 200 status code is returned if the RSVP confirmation is successful, else a 404 status code is sent.
*/
app.post('/api/events/:id/rsvp', async (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    const eventId = new ObjectId(id);
    const rsvpConfirmation = await db.collection('events').updateOne(
      { _id: eventId },
      { $inc: { numberOfAttendees: 1 } }
    );

    if (rsvpConfirmation.modifiedCount > 0) {
      res.status(200).json({ message: 'RSVP Confirmed' });
    } else {
      res.status(404).json({ message: 'Failed to confirm RSVP' });
    }
  } else {
    res.status(404).send();
  }
});

/*
This DELETE endpoint from OpenAI ChatGPT correctly cancels an existing RSVP by decrementing the numberOfAttendees by 1 when given a valid event ID. However, Gen AI checks and removes the specified userId from the rsvps array if it exists which is unnecessary as the assignment only requires updating the numberOfAttendees count. The code uses the $inc operator in updateOne() with `$inc: -1` to update the count, validates the ObjectId, and checks modifiedCount to return a 200 status code on success with a message or a 404 with a message on failure.
*/
app.delete('/api/events/:id/rsvp', async (req, res) => {
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    const eventId = new ObjectId(id);
    const rsvpCancellation = await db.collection('events').updateOne(
      { _id: eventId },
      { $inc: { numberOfAttendees: -1 } }
    );

    if (rsvpCancellation.modifiedCount > 0) {
      return res.status(200).json({ message: 'RSVP Successfully Canceled' });
    } else {
      return res.status(404).json({ message: 'RSVP Not Found or Already Canceled' });
    }
  } else {
    return res.status(404).send();
  }
});

// --- Change nothing below this line ---

// 404 - not found
app.use((req, res, next) => {
  res.status(404).json({ message: 'resource ' + req.url + ' not found' });
});

// 500 - Any server error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send()
});

// start server on port
const server = app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`error: port ${port} is already in use!`, 'kill this server! (control + c)');
    process.exit(1);
  } else {
    console.error('Server error:', error);
  }
});
