import { siteMedia } from "@/lib/site-media";

export type FleetAmenityId =
  | "climate"
  | "restroom"
  | "overhead"
  | "wifi"
  | "outlets"
  | "recline"
  | "usb";

export type FleetVehicle = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  capacity: string;
  description: string;
  amenities: FleetAmenityId[];
};

const largeCoachAmenities: FleetAmenityId[] = [
  "climate",
  "restroom",
  "overhead",
  "wifi",
  "outlets",
  "recline",
];

export const fleet: FleetVehicle[] = [
  {
    id: "motor-coach",
    name: "Large Coach",
    image: siteMedia.fleet.motorcoachMaroon,
    imageAlt: "Go Coach large motorcoach parked and ready for group travel",
    capacity: "52-56 passengers",
    description:
      "Spacious and comfortable transportation for large groups, with plenty of seating and luggage space.",
    amenities: largeCoachAmenities,
    gallery: [
      {
        src: siteMedia.fleet.seatsAisle,
        alt: "Reclining seats in the large coach cabin",
      },
      {
        src: siteMedia.fleet.restroom,
        alt: "Onboard restroom on the large coach",
      },
      {
        src: siteMedia.fleet.coachEntry,
        alt: "Large coach driver area and passenger entry",
      },
    ],
  },
  {
    id: "mini-coach",
    name: "Full-Size Coach",
    image: siteMedia.fleet.motorCoach,
    imageAlt: "Go Coach full-size charter coach",
    capacity: "36-56 passengers",
    description:
      "A comfortable choice for medium to large groups, with ample space for passengers and luggage.",
    amenities: largeCoachAmenities,
    gallery: [
      {
        src: siteMedia.fleet.seatsAisleAlt,
        alt: "Full-size coach passenger seating",
      },
      {
        src: siteMedia.fleet.seatsCupHolder,
        alt: "Reclining seats with cup holders",
      },
      {
        src: siteMedia.fleet.restroomAlt,
        alt: "Onboard restroom on the full-size coach",
      },
    ],
  },
  {
    id: "ford-transit",
    name: "Mini Bus",
    image: siteMedia.fleet.fordTransit,
    imageAlt: "Go Coach mini bus photographed outdoors",
    capacity: "Up to 20 passengers",
    description:
      "A convenient choice for smaller groups, ideal for local trips, events, and short group outings.",
    amenities: ["climate", "usb", "overhead", "recline"],
    gallery: [
      {
        src: siteMedia.fleet.seatsClose,
        alt: "Mini bus reclining leather seats",
      },
      {
        src: siteMedia.fleet.miniCabin,
        alt: "Mini bus cabin seating",
      },
      {
        src: siteMedia.fleet.miniDoor,
        alt: "Go Coach driver beside the mini bus",
      },
    ],
  },
];
