rooms = [
    {
        "id": 1,
        "image": "./assets/rooms/room-1.jpg",
        "name": "Standard Room",
        "description": "Our standard room offer comfortable accommodation with modern amenities. Each room is elegantly furnished and designed to provide a relaxing stay for our guests. Enjoy a restful night's sleep on a plush queen-sized bed, and wake up refreshed to start your day. The room features a private bathroom, complimentary toiletries, a flat-screen TV, and high-speed internet access.",
        "metadata": {
            "cost": "$100 per night",
            "size": "300 sq ft",
            "theme": "Contemporary",
            "rating": "4.5/5"
        }
    },
    {
        "id": 2,
        "image": "./assets/rooms/room-2.jpg",
        "name": "Deluxe Room",
        "description": "Indulge in luxury with our deluxe rooms, designed for those seeking extra comfort and space. These spacious rooms feature a king-sized bed with premium bedding, a separate sitting area, and large windows offering panoramic views of the city. Unwind in the marble bathroom with a deep soaking tub and luxury bath amenities. Guests staying in our deluxe rooms also enjoy access to exclusive amenities and personalized services.",
        "metadata": {
            "cost": "$150 per night",
            "size": "400 sq ft",
            "theme": "Luxury",
            "rating": "4.8/5"
        }
    },
    {
        "id": 3,
        "image": "./assets/rooms/room-3.jpg",
        "name": "Executive Suite",
        "description": "Experience the epitome of luxury in our executive suites, perfect for discerning travelers and those seeking a truly unforgettable stay. These expansive suites feature a separate bedroom, living room, and dining area, offering ample space for relaxation and entertainment. Enjoy stunning views from the private balcony and indulge in personalized services such as butler service, daily turndown service, and access to the executive lounge. Whether you're traveling for business or leisure, our executive suites redefine the concept of luxury accommodation.",
        "metadata": {
            "cost": "$300 per night",
            "size": "700 sq ft",
            "theme": "Opulence",
            "rating": "5/5"
        }
    },
    {
        "id": 4,
        "image": "./assets/rooms/room-4.jpg",
        "name": "Family Suite",
        "description": "Our family suites are ideal for families or groups traveling together, providing spacious accommodation and thoughtful amenities for a comfortable stay. These suites feature multiple bedrooms, a separate living area, and a fully-equipped kitchenette, allowing guests to enjoy the convenience of home while on vacation. Relax and unwind in the cozy atmosphere or explore nearby attractions knowing you have a comfortable retreat to return to at the end of the day.",
        "metadata": {
            "cost": "$250 per night",
            "size": "600 sq ft",
            "theme": "Family-friendly",
            "rating": "4.7/5"
        }
    },
    {
        "id": 5,
        "image": "./assets/rooms/room-5.jpg",
        "name": "Presidential Suite",
        "description": "Indulge in ultimate luxury and sophistication with our presidential suite, designed for VIP guests and those seeking the finest accommodation experience. This palatial suite features lavish furnishings, a grand living room, dining area, and a private study. The master bedroom boasts a king-sized bed with luxurious linens, while the marble bathroom offers a spa-like retreat with a Jacuzzi tub and separate rain shower. Guests staying in our presidential suite enjoy exclusive access to personalized services and amenities, ensuring a truly memorable stay.",
        "metadata": {
            "cost": "$500 per night",
            "size": "1200 sq ft",
            "theme": "Elegance",
            "rating": "5/5"
        }
    },
    {
        "id": 6,
        "image": "./assets/rooms/room-6.jpg",
        "name": "Honeymoon Suite",
        "description": "Celebrate your love and embark on a romantic getaway in our honeymoon suite, specially designed for couples seeking intimacy and luxury. This beautifully appointed suite features a king-sized canopy bed adorned with rose petals, a cozy fireplace, and a private balcony overlooking scenic views. Indulge in a romantic dinner for two prepared by our expert chefs, followed by a relaxing soak in the oversized Jacuzzi tub. Let us pamper you with our personalized services and create unforgettable memories together.",
        "metadata": {
            "cost": "$400 per night",
            "size": "900 sq ft",
            "theme": "Romantic",
            "rating": "4.9/5"
        }
    },
    {
        "id": 7,
        "image": "./assets/rooms/room-7.jpg",
        "name": "Penthouse Suite",
        "description": "Experience the height of luxury in our penthouse suite, offering unparalleled views and exquisite amenities for the discerning traveler. This expansive suite occupies the top floor of our hotel and features a private rooftop terrace, perfect for entertaining or enjoying a quiet moment overlooking the city skyline. The interiors are elegantly furnished with contemporary décor, and the master bedroom boasts a king-sized bed with plush bedding. Guests staying in our penthouse suite enjoy exclusive access to personalized services and VIP treatment throughout their stay.",
        "metadata": {
            "cost": "$800 per night",
            "size": "1500 sq ft",
            "theme": "Luxury Living",
            "rating": "5/5"
        }
    },
    {
        "id": 8,
        "image": "./assets/rooms/room-8.jpg",
        "name": "Accessible Room",
        "description": "Our accessible rooms are designed to cater to guests with special needs, ensuring a comfortable and hassle-free stay for all. These rooms feature wider doorways, grab bars in the bathroom, and roll-in showers for wheelchair accessibility. Enjoy the same luxurious amenities and thoughtful touches found in our other room categories, including comfortable bedding, a flat-screen TV, and complimentary toiletries. We are committed to providing an inclusive experience for all our guests.",
        "metadata": {
            "cost": "$120 per night",
            "size": "350 sq ft",
            "theme": "Accessibility",
            "rating": "4.6/5"
        }
    }
]


function navigateTo(url) {
    window.location.href = url;
}

function filterRoomId(id) {
    const room = rooms.find(room => room.id === id);

    return room || null;
}


function getIdFromUrl() {
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    let idValue = null;
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        if (key === 'id') {
            idValue = parseInt(decodeURIComponent(value), 10); // Parse value to integer
        }
    });
    return idValue;
}

function navigateToRooms() {
    window.location.href = './rooms.html';
}

function navigateToContactUs() {
    window.location.href = './contactus.html';
}

