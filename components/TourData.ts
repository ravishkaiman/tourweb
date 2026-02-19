export interface Tour {
    id: string;
    category: string;
    title: string;
    duration: string;
    pax: string;
    image: string;
    description: string;
    whyChoose?: string;
    highlights: string[];
    itinerary: { time?: string; activity: string }[];
    includes: string[];
}

export const tours: Tour[] = [
    {
        id: 'sigiriya-day-tour',
        category: 'One Day Tours',
        title: "Sigiriya Day Tour",
        duration: "1 Day",
        pax: "Private",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_Lion_Rock%2C_Sigiriya%2C_Sri_Lanka.jpg/1280px-The_Lion_Rock%2C_Sigiriya%2C_Sri_Lanka.jpg",
        description: "Experience the best of Sri Lanka’s Cultural Triangle in a single day. Guided by an experienced chauffeur, you’ll enjoy a comfortable and private journey while visiting UNESCO World Heritage Sites and breathtaking landscapes. From ancient rock paintings to majestic wildlife, this tour has something for every traveler. Sigiriya's ancient engineering and hydraulic systems are considered some of the most advanced of their time.",
        whyChoose: "Our carefully planned Sigiriya Day Tour ensures you experience the best of Sri Lanka’s Cultural Triangle in a single day. Guided by an experienced chauffeur, you’ll enjoy a comfortable and private journey while visiting UNESCO World Heritage Sites and breathtaking landscapes.",
        highlights: [
            "Matale Hindu Temple – Colorful and intricately designed.",
            "Spice Garden – Learn about Sri Lanka’s world-famous spices.",
            "Dambulla Cave Temple – A UNESCO World Heritage Site with stunning cave paintings.",
            "Sigiriya Rock Fortress – Climb the legendary Lion Rock for breathtaking views.",
            "Evening Jeep Safari – Wildlife viewing at Minneriya, Kaudulla, or Hurulu Eco Park."
        ],
        itinerary: [
            { time: "06:30 AM", activity: "Pick up from Hotel (Kandy/Colombo)" },
            { activity: "Visit Matale Hindu Temple" },
            { activity: "Explore a traditional Spice Garden" },
            { activity: "Discover Dambulla Cave Temple" },
            { activity: "Climb Sigiriya Rock Fortress" },
            { activity: "Evening Safari (Minneriya / Kaudulla)" },
            { activity: "Return to Hotel" }
        ],
        includes: [
            "Hotel pickup and drop-off",
            "Transportation in a Private vehicle",
            "English speaking driver/guide",
            "Bottled water"
        ]
    },
    {
        id: 'polonnaruwa-day-tour',
        category: 'One Day Tours',
        title: "Polonnaruwa Day Tour",
        duration: "1 Day",
        pax: "Private",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Polonnaruwa-Royal_Palace%28js%29.jpg/1280px-Polonnaruwa-Royal_Palace%28js%29.jpg",
        description: "Explore the ancient city of Polonnaruwa, a UNESCO World Heritage Site. This tour offers a deep dive into Sri Lanka's history, showcasing the architectural brilliance of ancient kings. You'll visit the Royal Palace, sacred temples, and various ruins that stand as a testament to the island's rich cultural heritage.",
        whyChoose: "Are you up for seeing one of the most beautiful and rich cities in Sri Lanka? Our Polonnaruwa Day Tour is designed to give you a historical perspective of one of Sri Lanka’s ancient cities with expert guidance.",
        highlights: [
            "Royal Palace of King Parakramabahu – Majestic ruins of a seven-story palace.",
            "Gal Viharaya – World-famous rock-cut Buddha statues.",
            "Ancient Temples & Stupas – Lankathilaka, Rankot Vehera, Thuparama Gedige.",
            "Hindu Kovils – Shiva and Vishnu temples highlighting cultural diversity.",
            "Parakrama Samudra – A massive ancient man-made reservoir."
        ],
        itinerary: [
            { time: "Morning", activity: "Pick up from Hotel" },
            { activity: "Visit the Archaeological Museum" },
            { activity: "Explore the Royal Palace Complex" },
            { activity: "Visit the Sacred Quadrangle (Dalada Maluwa)" },
            { activity: "Marvel at Gal Viharaya Statues" },
            { activity: "Tour Ancient Monasteries and Kovils" },
            { activity: "Return to Hotel" }
        ],
        includes: [
            "Hotel pickup and drop-off",
            "Transportation in a Private vehicle",
            "English speaking driver/guide",
            "Bottled water"
        ]
    },
    {
        id: 'kandy-city-tour',
        category: 'One Day Tours',
        title: "Kandy City Tour",
        duration: "1 Day",
        pax: "Private",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sri_Lanka_-_029_-_Kandy_Temple_of_the_Tooth.jpg/1280px-Sri_Lanka_-_029_-_Kandy_Temple_of_the_Tooth.jpg",
        description: "Discover Kandy, the hill capital of Sri Lanka and a UNESCO World Heritage city. This comprehensive day tour covers the most significant religious, cultural, and natural attractions, including the sacred Temple of the Tooth Relic, the Royal Botanical Gardens, and scenic viewpoints.",
        whyChoose: "Want to explore world heritage Kandy? Our Kandy City Tour covers all the major attractions of the city with expert tour guides. From the sacred Temple of the Tooth to the lush Botanical Gardens, we ensure a seamless and enriching experience.",
        highlights: [
            "Temple of the Sacred Tooth Relic – A world-renowned Buddhist pilgrimage site.",
            "Royal Botanical Gardens – Walk through 4000+ species of plants.",
            "Bahiravakanda Big Buddha – A giant statue with panoramic city views.",
            "Kandy View Point – The perfect spot for photos of the lake and city.",
            "Cultural Experience – Visit the Gem Museum, Batik Factory, and Tea Museum."
        ],
        itinerary: [
            { time: "08:00 AM", activity: "Pick up from Hotel" },
            { activity: "Explore Udawattekele Sanctuary" },
            { activity: "Visit Bahiravakanda Big Buddha Statue" },
            { activity: "Discover Ceylon Tea Museum" },
            { activity: "Stroll through Royal Botanical Gardens" },
            { activity: "Visit Temple of the Sacred Tooth Relic" },
            { activity: "Enjoy a Kandyan Cultural Show" },
            { activity: "Sunset at Kandy View Point" }
        ],
        includes: [
            "Hotel pickup and drop-off",
            "Transportation in a Private vehicle",
            "English speaking driver/guide",
            "Bottled water"
        ]
    }
];
