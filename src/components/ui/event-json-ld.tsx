import { event } from "@/content/event";
import { siteUrl } from "@/lib/site-url";

/**
 * Schema.org `Event` rich result. Helps Google surface the event in SERP.
 */
export function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: `${event.date}T17:00:00-03:00`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Quadra 1, Casa 14",
        addressLocality: event.venue.neighborhood,
        addressRegion: event.venue.state,
        addressCountry: "BR",
      },
    },
    description:
      "Torneio fechado de poker em Brasília. 30 vagas. Jantar, open bar e estrutura premium.",
    offers: event.structures.map((s) => ({
      "@type": "Offer",
      name: s.name,
      price: s.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validThrough: event.registrationDeadline,
      url: `${siteUrl}/#inscricao`,
    })),
    organizer: {
      "@type": "Organization",
      name: event.name,
      url: siteUrl,
    },
    maximumAttendeeCapacity: event.capacity,
  } as const;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
