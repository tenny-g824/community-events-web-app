use ('app');

db.ithacaCommunityEngagement.drop();
db.createCollection('ithacaCommunityEngagement');

db.ithacaCommunityEngagement.insertMany([
    {
        name: "Community Clean-Up Day",
        // how to write price ($10) in dollars?
        dateAndTime: new Date("2025-05-15T09:00:00Z"),
        location: "Stewart Park, Ithaca, NY",
        description: "Volunteer with Ithaca Residents to clean and revitalize the local park. Join your fellow residents in a collaborative effort to clean and revitalize Stewart Park. This annual event encourages community involvement by promoting environmental stewardship and civic pride. Participants will work in teams to pick up litter, plant flowers, and restore walking trails. Supplies such as gloves and trash bags will be provided. Complimentary refreshments and a community barbecue will follow the clean-up.",
        numberOfAttendees: 85,
        price: "Free"
    },

    {
        name: "Neighborhood Potluck",
        dateAndTime: new Date("2025-06-10T12:00:00Z"),
        location: "Ithaca Commons Community Center, Ithaca, NY",
        description: "Neighbors share homemade dishes and connect over food. Bring your favorite dish and join us for a heartwarming potluck where neighbors gather to share homemade food, laughter, and stories. This event fosters community bonding, allowing residents to connect over diverse cuisines. Enjoy live acoustic music and kid-friendly activities throughout the day. Prizes will be awarded for the most creative dish.",
        numberOfAttendees: 46,
        price: "Free"
    },

    {
        name: "Local History Walk",
        dateAndTime: new Date("2025-05-20T14:00:00Z"),
        location: "Ithaca Commons, Downtown Ithaca, NY",
        description: "A guided tour through Ithaca’s rich historical landmarks. Bring your favorite dish and join us for a heartwarming potluck where neighbors gather to share homemade food, laughter, and stories. This event fosters community bonding, allowing residents to connect over diverse cuisines. Enjoy live acoustic music and kid-friendly activities throughout the day. Prizes will be awarded for the most creative dish.",
        numberOfAttendees: 37,
        price: "Free"
    },

    {
        name: "Community Garden Workshop",
        dateAndTime: new Date("2025-07-05T10:00:00Z"),
        location: "Cornell Botanic Gardens, Ithaca, NY",
        description: "Learn sustainable gardening practices and urban farming techniques. Learn the art of sustainable gardening at this hands-on workshop. Topics include composting, soil health, urban farming techniques, and how to grow your own food. Participants will leave with free seed packets and practical tips for maintaining a home garden. No prior experience required.",
        numberOfAttendees: 43,
        price: 10
    },

    {
        name: "Art in the Park",
        dateAndTime: new Date("2025-08-10T11:00:00Z"),
        location: "Buttermilk Falls State Park, Ithaca, NY",
        description: "An outdoor exhibition showcasing local artists and their work. Immerse yourself in creativity at this outdoor art festival featuring local artists, live painting sessions, and interactive art installations. Browse unique artwork available for purchase while enjoying live music and local food vendors. Activities for kids will be available throughout the day.",
        numberOfAttendees: 67,
        price: "Free"
    },

    {
        name: "Local Business Fair",
        dateAndTime: new Date("2025-09-01T09:30:00Z"),
        location: "Ithaca Commons, Ithaca, NY",
        description: "A networking event spotlighting small businesses and local entrepreneurs. Support local entrepreneurship by attending this business fair showcasing small businesses, startups, and innovative products. Connect with local entrepreneurs, discover unique goods, and participate in networking sessions. Workshops on business development and marketing strategies will be available.",
        numberOfAttendees: 111,
        price: "Free"
    },

    {
        name: "Volunteer Appreciation Day",
        dateAndTime: new Date("2025-10-15T16:00:00Z"),
        description: "Celebrating and recognizing the efforts of local volunteers. A celebration dedicated to recognizing the hard work and dedication of local volunteers. Enjoy a catered dinner, live entertainment, and personalized awards for outstanding contributions. All community members are welcome to show their support.",
        numberOfAttendees: 51,
        price: "Free"
    },

    {
        name: "Youth Mentoring Meetup",
        dateAndTime: new Date("2025-05-25T17:00:00Z"),
        location: "Ithaca Public Library, Ithaca, NY",
        description: "Connecting youth with mentors from various professions. This event brings together young individuals seeking guidance with professionals from various fields. Mentors will share insights about career development, goal setting, and leadership. Attendees will have the chance to build lasting connections and participate in group activities.",
        numberOfAttendees: 25,
        price: "Free"
    },

    {
        name: "Senior Tech Day",
        dateAndTime: new Date("2025-06-20T10:30:00Z"),
        location: "Ithaca Senior Center, Ithaca, NY",
        description: "A workshop designed to help seniors navigate modern technology. Designed to help seniors navigate the digital world, this workshop covers topics such as smartphone basics, internet safety, and using social media. Attendees will receive hands-on assistance from tech volunteers. Free refreshments and handouts included.",
        numberOfAttendees: 23,
        price: "Free"
    },

    {
        name: "Environmental Awareness Fair",
        dateAndTime: new Date("2025-07-15T08:30:00Z"),
        location: "Cornell University Campus, Ithaca, NY",
        description: "An event promoting sustainability and environmental conservation. An engaging event aimed at promoting sustainability and eco-friendly living. Attend workshops on reducing waste, conserving energy, and protecting natural resources. Local environmental organizations will be present with interactive booths and giveaways.",
        numberOfAttendees: 49,
        price: "Free"
    },

    {
        name: "Multicultural Festival",
        dateAndTime: new Date("2025-08-20T13:00:00Z"),
        location: "Ithaca Commons, Ithaca, NY",
        description: "A celebration of diverse cultures through food, music, and art. Celebrate diversity through a vibrant display of food, music, and art from around the world. Taste dishes from different cultures, enjoy live performances, and participate in cultural workshops. Fun activities for kids will be available.",
        numberOfAttendees: 84,
        price: "Free"
    },

    {
        name: "Health and Wellness Expo",
        dateAndTime: new Date("2025-09-10T10:00:00Z"),
        location: "Cornell University Conference Center, Ithaca, NY",
        description: "An expo featuring health screenings, fitness demos, and wellness talks. Explore wellness at this expo featuring health screenings, fitness demos, and wellness talks by healthcare professionals. Topics include mental health, nutrition, and stress management. Free samples and health resources available.",
        numberOfAttendees: 78,
        price: "Free"
    },

    {
        name: "Literacy Workshop",
        dateAndTime: new Date("2025-05-30T15:00:00Z"),
        location: "Ithaca Public Library, Ithaca, NY",
        description: "A workshop aimed at improving literacy skills for all age groups. Join us for an interactive literacy workshop aimed at enhancing reading and writing skills. Sessions are available for all age groups with fun, engaging activities. Free books and resources will be provided to participants.",
        numberOfAttendees: 22,
        price: "Free"

    },

    {
        name: "Community Theatre Night",
        dateAndTime: new Date("2025-06-05T19:00:00Z"),
        location: "Hangar Theatre, Ithaca, NY",
        description: "A performance by local actors showcasing original community-driven plays. Experience the magic of live theater with performances by talented local actors showcasing original, community-driven plays. The event aims to highlight the voices and stories of Ithaca residents, bringing humor, drama, and heartfelt moments to the stage. Stick around after the show for a meet-and-greet with the cast and crew. Snacks and beverages will be available for purchase.",
        numberOfAttendees: 58,
        price: 12
    },

    {
        name: "Neighborhood Block Party",
        dateAndTime: new Date("2025-07-25T16:00:00Z"),
        location: "Ithaca Commons, Ithaca, NY",
        description: "A festive block party fostering community bonding and fun. Experience the magic of live theater with performances by talented local actors showcasing original, community-driven plays. The event aims to highlight the voices and stories of Ithaca residents, bringing humor, drama, and heartfelt moments to the stage. Stick around after the show for a meet-and-greet with the cast and crew. Snacks and beverages will be available for purchase.",
        numberOfAttendees: 34,
        price: "Free"
    },

    {
        name: "Food Bank Drive",
        dateAndTime: new Date("2025-08-05T09:00:00Z"),
        location: "Ithaca Food Bank, Ithaca, NY",
        description: "A drive to collect food donations for local residents in need. Help fight hunger by participating in our annual Food Bank Drive. We are collecting non-perishable food items to support local families in need. Community members are encouraged to drop off donations and stay for refreshments and live music. Volunteers will be on-site to help sort and distribute items. Every contribution makes a difference!",
        numberOfAttendees: 75,
        price: "Free"
    },

    {
        name: "Blood Donation Camp",
        dateAndTime: new Date("2025-09-20T08:00:00Z"),
        location: "Ithaca Community Center, Ithaca, NY",
        description: "A free blood donation event to support local hospitals. Join us in saving lives by donating blood at our community blood donation camp. Medical professionals will ensure a safe and comfortable experience for all donors. Donors will receive a free wellness check-up and refreshments. Walk-ins are welcome, but appointments are encouraged to minimize wait times.",
        numberOfAttendees: 50,
        price: "Free"
    },

    {
        name: "Community Sports Day",
        dateAndTime: new Date("2025-10-05T10:00:00Z"),
        location: "Ithaca Recreation Center, Ithaca, NY",
        description: "A day filled with sports and recreational activities for all ages. Get ready for a fun-filled day of sports and recreational activities suitable for all ages. Participate in basketball, soccer, volleyball, and relay races. Professional coaches will offer mini-training sessions, and there will be prizes for competition winners. Healthy snacks and hydration stations will be provided. Come with friends and family for a day of fitness and fun!",
        numberOfAttendees: 120,
        price: "Free"
    },

    {
        name: "Town Hall Meeting",
        dateAndTime: new Date("2025-11-01T18:00:00Z"),
        location: "Tompkins County Courthouse, Ithaca, NY",
        description: "An open forum for residents to discuss local issues and future plans. Join the conversation at our quarterly Town Hall Meeting, where residents can discuss local issues, upcoming projects, and community initiatives. This is your opportunity to voice concerns, ask questions, and engage with local leaders. Refreshments will be available. All community members are encouraged to attend and participate.",
        numberOfAttendees: 60,
        price: "Free"
    },

    {
        name: "Cornell Winter Charity Gala",
        dateAndTime: new Date("2025-12-15T19:30:00Z"),
        location: "The Statler Hotel, 130 Statler Dr, Ithaca, NY",
        description: "A formal event to raise funds for local charities during the holiday season. Celebrate the season of giving at our elegant Winter Charity Gala. Enjoy a gourmet dinner, live music, and a silent auction with proceeds supporting local charities. Dress to impress and join us for an unforgettable evening of generosity and community spirit. Limited tickets available, so reserve yours early!",
        numberOfAttendees: 74,
        price: 25
    }
]);

// db.ithacaCommunityEngagement.find();
