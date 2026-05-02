export interface Room {
  id: string;
  name: string;
  type: string;
  size: string;
  occupancy: string;
  price: string;
  thumbnail: string;
  video: string;
  images: string[];
  amenities: string[];
  description: string;
  washroomImages: string[];
  bedType: string;
  view: string;
}

export interface Floor {
  id: string;
  number: number;
  name: string;
  rooms: Room[];
}

export interface Property {
  id: string;
  name: string;
  location: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  mainVideo: string;
  gallery: string[];
  amenities: string[];
  landmarks: { name: string; distance: string }[];
  floors: Floor[];
}

export const properties: Property[] = [
  {
    id: "hotel-shivraj",
    name: "Hotel Shivraj",
    location: "Mall Road, Nainital",
    shortDescription: "Spellbinding views of Nainital lake and premium comfort.",
    description: "Located right on the Mall Road, Hotel Shivraj offers the perfect blend of heritage and modern luxury. Every room is designed to provide a panoramic view of the Naini Lake.",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070",
    mainVideo: "/videos/video1.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070"
    ],
    amenities: ["Free WiFi", "Parking", "Lake View", "Room Service", "Restaurant"],
    landmarks: [
      { name: "Naini Lake", distance: "0.1 km" },
      { name: "Mallital Bazaar", distance: "0.5 km" }
    ],
    floors: [
      {
        id: "f1",
        number: 1,
        name: "First Floor",
        rooms: [
          {
            id: "101",
            name: "Lake View Deluxe",
            type: "Deluxe",
            size: "350 sqft",
            occupancy: "2 Adults",
            price: "₹4,500",
            thumbnail: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070",
            video: "/videos/video3.mp4",
            images: [
              "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070",
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2070"
            ],
            amenities: ["AC", "Smart TV", "Mini Fridge", "King Bed"],
            description: "A spacious room with a direct view of the Naini Lake. Features modern interiors and a private balcony.",
            washroomImages: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2070"],
            bedType: "King Size",
            view: "Naini Lake View"
          },
          {
            id: "102",
            name: "Executive Suite",
            type: "Suite",
            size: "500 sqft",
            occupancy: "2 Adults + 1 Child",
            price: "₹6,500",
            thumbnail: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=2070",
            video: "/videos/video3.mp4",
            images: ["https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&q=80&w=2070"],
            amenities: ["AC", "Smart TV", "Work Desk", "Sofa"],
            description: "Perfect for business travelers or couples looking for extra space and luxury.",
            washroomImages: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=2070"],
            bedType: "King Size + Sofa Bed",
            view: "Mountain View"
          }
        ]
      },
      {
        id: "f2",
        number: 2,
        name: "Second Floor",
        rooms: [
          {
            id: "201",
            name: "Premium Family Suite",
            type: "Family",
            size: "700 sqft",
            occupancy: "4 Adults",
            price: "₹8,500",
            thumbnail: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=2070",
            video: "/videos/video3.mp4",
            images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=2070"],
            amenities: ["2 Bedrooms", "Living Room", "Dining Area"],
            description: "A huge suite designed for families. Includes two separate bedrooms and a shared living area.",
            washroomImages: ["https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=2070"],
            bedType: "2 Queen Size Beds",
            view: "Valley View"
          }
        ]
      }
    ]
  },
  {
    id: "swiss-hotel",
    name: "Swiss Hotel",
    location: "Near High Court, Nainital",
    shortDescription: "Colonial charm with modern amenities in a peaceful setting.",
    description: "A heritage property reflecting the colonial era, Swiss Hotel provides a serene atmosphere away from the hustle of the town.",
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
    mainVideo: "/videos/video2.mp4",
    gallery: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070"],
    amenities: ["Heritage Garden", "Fireplace", "Parking", "WiFi"],
    landmarks: [
      { name: "High Court", distance: "0.2 km" },
      { name: "Eco Cave Gardens", distance: "1.2 km" }
    ],
    floors: [
      {
        id: "s-f1",
        number: 1,
        name: "Heritage Wing",
        rooms: [
          {
            id: "h101",
            name: "Colonial Suite",
            type: "Heritage",
            size: "600 sqft",
            occupancy: "2 Adults",
            price: "₹7,500",
            thumbnail: "https://images.unsplash.com/photo-1560185127-6a44c1727a52?auto=format&fit=crop&q=80&w=2070",
            video: "/videos/video3.mp4",
            images: ["https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2070"],
            amenities: ["Fireplace", "Antique Furniture", "Garden Access"],
            description: "Experience the old-world charm with high ceilings, wooden floors, and a private fireplace.",
            washroomImages: ["https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=2070"],
            bedType: "Four Poster King Bed",
            view: "Garden View"
          }
        ]
      }
    ]
  }
];
