/**
 * Canonical paths for static assets under `public/media`.
 * Import from here instead of hard-coding URLs in components and data files.
 */
export const siteMedia = {
  brand: {
    logo: "/media/brand/logo.webp",
    logoOnDark: "/media/brand/logo-on-dark.webp",
    busIconWhite: "/media/brand/icon-bus-white.webp",
  },
  home: {
    heroGoCoachBuses: "/media/home/go-coach-buses-webp.webp",
    /** Homepage hero: Go Coach Prevost on open pavement */
    heroPrevostLot: "/media/home/hero-bus.webp",
    heroPrevostLotMobile: "/media/home/hero-bus-mobile.webp",
    heroBurgundyRoad: "/media/home/hero-burgundy-road.webp",
    heroCarousel: {
      team: "/media/home/hero-carousel-team.webp",
      fleet: "/media/home/hero-carousel-fleet.webp",
      group: "/media/home/IMG_6010.webp",
      prevost: "/media/home/IMG_6022.webp",
      interior: "/media/home/IMG_5718-HDR.webp",
      fleetLot: "/gallery/IMG_5710.webp",
      teamslot: "/media/home/hero-carousel-team.webp",
      fleetWide: "/media/home/hero-carousel-group.webp",
    },
    heroFleetWide: "/media/home/hero-fleet-wide.webp",
    heroFleet: "/media/home/hero-fleet.webp",
    heroCityscape: "/media/home/hero-cityscape.webp",
    commitmentFeature: "/media/home/commitment-feature.webp",
    edmontonCalgaryBackground: "/media/home/edmonton-calgary-background.webp",
    /** Blog index hero: Go Coach Prevost (use distinct filename to avoid stale CDN/browser cache) */
    blogHero: "/media/home/blog-hero-coach.webp",
    estimateShuttle: "/media/home/estimate-shuttle.webp",
    estimateRoadBus: "/media/home/estimate-road-bus-updated.png",
    estimateRoadBusMobile: "/media/home/estimate-road-bus-mobile.png",
  },
  blog: {
    tenEventsCharterBusHero: "/media/blog/10-events-charter-bus-hero.png",
  },
  booking: {
    stepRequestQuote: "/media/booking/step-request-quote.webp",
    stepConfirmCharter: "/media/booking/step-confirm-charter.webp",
    stepEnjoyRide: "/media/booking/step-enjoy-ride.webp",
  },
  coaches: {
    bus01: "/media/coaches/bus-01.webp",
    bus02: "/media/coaches/bus-02.webp",
    bus03: "/media/coaches/bus-03.webp",
    bus04: "/media/coaches/bus-04.webp",
    bus05: "/media/coaches/bus-05.webp",
    bus06: "/media/coaches/bus-06.webp",
  },
  fleet: {
    motorcoachMaroon: "/media/fleet/motorcoach-maroon.webp",
    motorCoach: "/media/fleet/full_size_coach.webp",
    miniCoach: "/media/fleet/mini-coach.webp",
    fordTransit: "/gallery/IMG_6019.webp",
    interiorSeats: "/media/gallery/image (4).webp",
    seatOutlet: "/media/fleet/coach-seat-outlet.webp",
    coachEntry: "/gallery/Comfortable-Charter-Bus-Interior.webp",
    seatsAisle: "/gallery/IMG_5841.webp",
    seatsAisleAlt: "/gallery/IMG_5718-HDR.webp",
    seatsClose: "/gallery/IMG_5964-HDR.webp",
    seatsCupHolder: "/gallery/IMG_5868.webp",
    seatsTable: "/gallery/IMG_5793.webp",
    restroom: "/gallery/IMG_5772.webp",
    restroomAlt: "/gallery/IMG_5889.webp",
    miniCabin: "/gallery/IMG_5934-HDR.webp",
    miniDoor: "/gallery/IMG_5991-HDR.webp",
  },
  services: {
    charterCoach: "/media/services/charter-coach.webp",
    /** Alias used by routes / why-choose cards */
    charters: "/media/services/charter-coach.webp",
    corporate: "/media/services/corporate.webp",
    corporateGroups: "/media/services/corporate-groups.webp",
    corporateTravel: "/media/services/corporate.webp",
    eventGroups: "/media/services/event-groups.webp",
    intercity: "/media/services/intercity.webp",
    privateTours: "/media/services/private-tours.webp",
    scenicTours: "/media/services/scenic-tours.webp",
    schoolGroups: "/media/services/school-groups.webp",
    shuttle: "/media/services/shuttle.webp",
    sports: "/media/services/sports.webp",
    sportsHockey: "/media/services/sports-hockey.webp",
    weddingsEvents: "/media/services/weddings-events.webp",
  },
  partners: {
    universityOfAlberta: "/media/partners/university-of-alberta.webp",
    aglc: "/media/partners/aglc.webp",
    atb: "/media/partners/atb.webp",
    rockyMountainSkiClub: "/media/partners/rocky-mountain-ski-club.webp",
    angelsScottish: "/media/partners/angels-scottish.webp",
    qti: "/media/partners/qti.webp",
  },
  commitment: {
    servicesCtaBand: "/media/commitment/services-cta-band.webp",
  },
  marketing: {
    whySectionCta: "/media/marketing/why-section-cta.webp",
  },
} as const;
