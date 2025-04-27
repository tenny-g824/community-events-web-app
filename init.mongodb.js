use ('app');

db.events.drop();
db.createCollection('events');

db.events.insertMany([
    {
        name: "Community Clean-Up Day",
        imageUri: "/images/community-clean-up-img.jpg",
        category: "volunteer",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-05-15T13:00:00Z"), // 9:00 AM EST
        location: "Stewart Park, 1 James L Gibbs Dr.",
        summary: "Volunteer with Ithaca Residents to clean and revitalize the local park.",
        description: "Join your fellow residents to clean and revitalize Stewart Park. Participants will team up to pick up litter, plant flowers, and restore walking trails—with supplies like gloves and trash bags provided. After the clean-up, enjoy complimentary refreshments and a community barbecue to celebrate everyone’s hard work.",
        numberOfAttendees: 85,
        price: 0.00,
        sourceName: "iStockPhoto",
        sourceUrl: "https://www.istockphoto.com/photo/hispanic-woman-and-african-american-girls-help-with-community-cleanup-gm610977330-105040889",
    },

    {
        name: "Neighborhood Potluck",
        imageUri: "/images/neighborhood-potluck-img.jpg",
        category: "socials",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-01-10T16:00:00Z"), // 12:00 PM EST
        location: "Ithaca Commons Recreation Center",
        summary: "Neighbors share homemade dishes and connect over food on a cool day.",
        description: "Bring your favorite dish and join us for a heartwarming potluck where neighbors gather to share homemade food, laughter, and stories. This event fosters community bonding, allowing residents to connect over diverse cuisines. Enjoy live acoustic music. Prizes will be awarded for the most creative dish.",
        numberOfAttendees: 46,
        price: 0.00,
        sourceName: "iStockPhoto",
        sourceUrl: "https://www.istockphoto.com/photo/group-of-diverse-friends-enjoying-summer-party-together-gm935280904-255943012",
    },

    {
        name: "Local History Walk",
        imageUri: "/images/local-history-walk.jpg",
        category: "culturalArts",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-05-20T18:00:00Z"), // 2:00 PM EST
        location: "Ithaca Commons, Downtown Ithaca",
        summary: "A guided tour through Ithaca’s rich historical landmarks that shaped this town.",
        description: "Step back in time with a Local History Walk through Ithaca’s most iconic landmarks. This guided tour offers fascinating stories into the city’s rich past and cultural evolution. Perfect for history buffs and curious minds alike. Lace up your shoes and join your neighbors to appreciate Ithaca's heritage!",
        numberOfAttendees: 37,
        price: 0.00,
        sourceName: "Historic Ithaca",
        sourceUrl: "https://www.historicithaca.org/virtualviews",
    },

    {
        name: "Community Garden Workshop",
        imageUri: "/images/community-garden-workshop.jpg",
        category: "educationalInfo",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-07-05T14:00:00Z"), // 10:00 AM EST
        location: "Cornell Botanic Gardens",
        summary: "Learn sustainable gardening practices and urban farming techniques.",
        description: "Learn the art of sustainable gardening at this hands-on workshop. Topics include composting, soil health, urban farming techniques, and how to grow your own food. Participants will leave with free seed packets and practical tips for maintaining a home garden. No prior experience required.",
        numberOfAttendees: 43,
        price: 10.00,
        sourceName: "New Britain Museum of American Art",
        sourceUrl: "https://nbmaa.org/events/upcycling-art-gardening-workshop-with-nb-roots",
    },

    {
        name: "Art in the Park",
        imageUri: "/images/art-in-the-park-ppl-img.jpg",
        category: "culturalArts",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-10-05T15:00:00Z"), // 11:00 AM EST
        location: "Buttermilk Falls State Park",
        summary: "An outdoor exhibition showcasing local artists and their work.",
        description: "Immerse yourself in creativity at this outdoor art festival featuring local artists, live painting sessions, and interactive art installations. Browse unique artwork available for purchase while enjoying live music and local food vendors. Activities for kids will be available throughout the day.",
        numberOfAttendees: 67,
        price: 0.00,
        sourceName: "Put-in-Bay",
        sourceUrl: "https://www.visitputinbay.org/event/art-in-the-park/",
        // altSourceUrlOption: https://www.bouldercity.com/event/art-in-the-park-2024/
    },

    {
        name: "Local Business Fair",
        imageUri: "/images/local-business-fair.jpg",
        category: "socials",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-09-01T13:30:00Z"), // 9:30 AM EST
        location: "Ithaca Commons, Downtown Ithaca",
        summary: "A networking event spotlighting small businesses and local entrepreneurs.",
        description: "Support local entrepreneurship by attending this business fair showcasing small businesses, startups, and innovative products. Connect with local entrepreneurs, discover unique goods, and participate in networking sessions. Workshops on business development and marketing strategies will be available.",
        numberOfAttendees: 111,
        price: 0.00,
        sourceName: "Community Arts Partnership",
        sourceUrl: "https://www.artspartner.org/content/view/ithaca-artist-market.html"
    },

    {
        name: "Volunteer Appreciation Day",
        imageUri: "/images/volunteer-appreciation-day.png",
        category: "volunteer",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-04-20T20:00:00Z"), // 4:00 PM EST
        location: "Ithaca Community Center",
        summary: "Celebrating and recognizing the efforts of local volunteers.",
        description: "A celebration dedicated to recognizing the hard work and dedication of local volunteers. Enjoy a catered dinner, live entertainment, and personalized awards for outstanding contributions. All community members are welcome to show their support.",
        numberOfAttendees: 51,
        price: 0.00,
        sourceName: "National Day Calendar",
        sourceUrl: "https://www.nationaldaycalendar.com/national-day/volunteer-recognition-day-april-20"
    },

    {
        name: "Youth Mentoring Meetup",
        imageUri: "/images/youth-mentoring-meetup.jpg",
        category: "volunteer",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-03-25T21:00:00Z"), // 5:00 PM EST
        location: "Ithaca Public Library",
        summary: "Connecting youth with mentors from various professions.",
        description: "This event brings together young individuals seeking guidance with professionals from various fields. Mentors will share insights about career development, goal setting, and leadership. Attendees will have the chance to build lasting connections and participate in group activities.",
        numberOfAttendees: 25,
        price: 0.00,
        sourceName: "AfterSchool HQ",
        sourceUrl: "https://go.afterschoolhq.com/how-to-start-a-mentoring-program/"
    },

    {
        name: "Senior Tech Day",
        imageUri: "/images/senior-tech-day.jpg",
        category: "educationalInfo",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-06-20T13:15:00Z"), // 9:15 AM EST
        location: "Ithaca Senior Center",
        summary: "A workshop designed to help seniors navigate modern technology.",
        description: "Designed to help seniors navigate the digital world, this workshop covers topics such as smartphone basics, internet safety, and using social media. Attendees will receive hands-on assistance from tech volunteers. Free refreshments and handouts included.",
        numberOfAttendees: 23,
        price: 0.00,
        sourceName: "Tech Equity Miami, Senior Planet Center",
        sourceUrl: "https://www.techequitymiami.org/projects/senior-planet-center",
        // altSourceUrlOption: "https://www.huffpost.com/entry/helping-seniors-learn-new_b_7584758"
    },

    {
        name: "Environmental Awareness Fair",
        imageUri: "/images/environmental-awareness-fair.jpg",
        category: "educationalInfo",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-04-15T12:30:00Z"), // 8:30 AM EST
        location: "Cornell University Campus",
        summary: "An event promoting sustainability and environmental conservation.",
        description: "An engaging event aimed at promoting sustainability and eco-friendly living. Attend workshops on reducing waste, conserving energy, and protecting natural resources. Local environmental organizations will be present with interactive booths and giveaways.",
        numberOfAttendees: 49,
        price: 0.00,
        sourceName: "Roper-Browning (2024) | Environmental Awareness",
        sourceUrl: "https://www.linkedin.com/pulse/role-education-universities-promoting-environmental-roper-browning-eqntf/",
    },

    {
        name: "Multicultural Festival",
        imageUri: "/images/multicultural-festival.png",
        category: "culturalArts",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-08-20T17:00:00Z"), // 1:00 PM EST
        location: "Ithaca Commons, Downtown Ithaca",
        summary: "A celebration of diverse cultures through food, music, and the best of art.",
        description: "A celebration of diverse cultures through food, music, and art. Celebrate diversity through a vibrant display of food, music, and art from around the world. Taste dishes from different cultures, enjoy live performances, and participate in cultural workshops. Fun activities for kids will be available.",
        numberOfAttendees: 84,
        price: 0.00,
        sourceName: "Hickory",
        sourceUrl: "https://www.hickorync.gov/multicultural-festival-downtown-hickory"
    },

    {
        name: "Health and Wellness Expo",
        imageUri: "/images/health-and-wellness-expo.png",
        category: "healthRecreation",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-07-10T14:00:00Z"), // 10:00 AM EST
        location: "Cornell University Conference Center",
        summary: "An expo featuring health screenings, fitness demos, and wellness talks.",
        description: "Explore wellness at this expo featuring health screenings, fitness demos, and wellness talks by healthcare professionals. Topics include mental health, nutrition, and stress management. Free samples and health resources available.",
        numberOfAttendees: 78,
        price: 0.00,
        sourceName: "OpenAI ChatGPT",
        sourceUrl: "https://chatgpt.com/c/6808197e-7eb8-8009-8f54-6af0b7c259bf",
    },

    {
        name: "Literacy Workshop",
        imageUri: "/images/literacy-workshop-girl-reading.jpg",
        category: "educationalInfo",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-03-30T19:00:00Z"), // 3:00 PM EST
        location: "Ithaca Public Library",
        summary: "A workshop aimed at offering practical tools to improve literacy skills for all age groups.",
        description: "Join us for an interactive literacy workshop aimed at enhancing reading and writing skills. Sessions are available for all age groups with fun, engaging activities. Free books and resources will be provided to participants.",
        numberOfAttendees: 22,
        price: 0.00,
        sourceName: "Lexicon Reading Center",
        sourceUrl: "https://www.lexiconreadingcenter.org/reading-and-writing-relationships-an-overview/",
        // altSourceUrloption: https://www.english-efl.com/methodology/relationship-reading-writing/
    },

    {
        name: "Community Theatre Night",
        imageUri: "/images/community-theatre-night.jpg",
        category: "culturalArts",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-12-18T23:00:00Z"), // 7:00 PM EST
        location: "Hangar Theatre",
        summary: "A performance by local actors showcasing original community-driven plays.",
        description: "Experience the magic of live theater with performances by talented local actors showcasing original, community-driven plays. The event aims to highlight the voices and stories of Ithaca residents, bringing humor, drama, and heartfelt moments to the stage. Snacks and beverages will be available for purchase.",
        numberOfAttendees: 58,
        price: 12.00,
        sourceName: "It's Not About Me.tv",
        sourceUrl: "https://itsnotaboutme.tv/news/theatre-a-little-night-music/"
    },

    {
        name: "Neighborhood Block Party",
        imageUri: "/images/neighborhood-block-party.jpg",
        category: "socials",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-06-29T20:00:00Z"), // 4:00 PM EST
        location: "Ithaca Commons, Downtown Ithaca",
        summary: "A festive block party fostering community bonding, local vendors, and fun outdoors.",
        description: "Join us for a lively Neighborhood Block Party filled with music, games, and great company! Connect with fellow block members and enjoy local food and entertainment. Whether you're new to the neighborhood or a longtime resident, there's something for everyone. Don't miss out on the spirit of community!",
        numberOfAttendees: 34,
        price: 0.00,
        sourceName: "Our Happy Hive",
        sourceUrl: "https://ourhappyhive.com/how-to-plan-and-organize-a-block-party-that-rocks/"
    },

    {
        name: "Food Bank Drive",
        imageUri: "/images/food-bank-drive.jpg",
        category: "volunteer",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-08-13T13:00:00Z"), // 9:00 AM EST
        location: "Ithaca Food Bank",
        summary: "A drive to collect food donations and fight hunger for local residents in need.",
        description: "Help fight hunger by participating in our annual Food Bank Drive. We are collecting non-perishable food items to support local families in need. Community members are encouraged to drop off donations and stay for refreshments and live music. Volunteers will be on-site to help sort and distribute items. Make a difference!",
        numberOfAttendees: 75,
        price: 0.00,
        sourceName: "Wings Over The Rockies",
        sourceUrl: "https://wingsmuseum.org/events/food-drive/"
    },

    {
        name: "Blood Donation Camp",
        imageUri: "/images/blood-donation-camp.jpg",
        category: "healthRecreation",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-09-20T12:00:00Z"), // 8:00 AM EST
        location: "Ithaca Commons Community Center",
        summary: "A free blood donation event to support local hospitals and provide free check-ups.",
        description: "Join us in saving lives by donating blood at our community blood donation camp. Medical professionals will ensure a safe and comfortable experience for all donors. Donors will receive a free wellness check-up and refreshments. Walk-ins are welcome, but appointments are encouraged to minimize wait times.",
        numberOfAttendees: 50,
        price: 0.00,
        sourceName: "The Baton Rouge Clinic",
        sourceUrl: "https://batonrougeclinic.com/news-education/10-reasons-to-donate-blood/"
    },

    {
        name: "Community Sports Day",
        imageUri: "/images/community-sports-day.jpg",
        category: "healthRecreation",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-11-15T14:00:00Z"), // 10:00 AM EST
        location: "Greater Ithaca Activities Center (GIAC)",
        summary: "A day filled with sports, never-ending fun, and recreational activities for all ages.",
        description: "Get ready for a fun-filled day of sports and recreational activities suitable for all ages. Participate in basketball, soccer, volleyball, and relay races. Professional coaches will offer mini-training sessions, and there will be prizes for competition winners. Healthy snacks and hydration stations will be provided!",
        numberOfAttendees: 120,
        price: 0.00,
        sourceName: "Excel Activity Group",
        sourceUrl: "https://excelactivitygroup.co.uk/old-school-sports-day/"
    },

    {
        name: "Town Hall Meeting",
        imageUri: "/images/town-hall-meeting.jpg",
        category: "educationalInfo",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-11-01T22:00:00Z"), // 6:00 PM EST
        location: "Tompkins County Courthouse",
        summary: "An open forum for residents to discuss local issues and future plans.",
        description: "Join the conversation at our quarterly Town Hall Meeting, where residents can discuss local issues, upcoming projects, and community initiatives. This is your opportunity to voice concerns, ask questions, and engage with local leaders. Refreshments will be available. All community members are encouraged to attend.",
        numberOfAttendees: 60,
        price: 0.00,
        sourceName: "Daily Democrat",
        sourceUrl: "https://www.dailydemocrat.com/2025/02/22/voters-told-to-resist-president-trump-at-town-hall/",
        // altSourceUrloption: https://www.nytimes.com/2017/02/21/us/politics/town-hall-protests-obamacare.html
    },

    {
        name: "Cornell Winter Charity Gala",
        imageUri: "/images/cornell-winter-charity-gala.jpg",
        category: "socials",
        // Subtract 4 hours from the UTC time to get EST time / Add 4 hours to EST time to convert to UTC time
        dateAndTime: new Date("2025-12-15T23:30:00Z"), // 7:30 PM
        location: "The Statler Hotel, 130 Statler Dr.",
        summary: "A formal event to raise funds for local charities during the holiday season.",
        description: "Celebrate the season of giving at our elegant Winter Charity Gala. Enjoy a gourmet dinner, live music, and a silent auction with proceeds supporting local charities. Dress to impress and join us for an unforgettable evening of generosity and community spirit. Limited tickets available, so reserve yours early!",
        numberOfAttendees: 74,
        price: 25.00,
        sourceName: "StockCake",
        sourceUrl: "https://stockcake.com/i/winter-gala-event_307369_727156"
    }
]);

db.events.find();

db.events.createIndex(
    {
        name: "text",
        summary: "text",
        description: "text",
        location: "text",
    }
)
