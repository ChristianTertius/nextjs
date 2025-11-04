export type EventItem = {
  title: string,
  image: string,
  slug: string,
  location: string,
  date: string,
  time: string
}

export const events: EventItem[] = [
  {
    title: "Jakarta Dev Conference 2025",
    image: "/images/event1.png",
    slug: "jakarta-dev-conference-2025",
    location: "Jakarta, Indonesia",
    date: "2025-12-10",
    time: "09:00 AM - 05:00 PM",
  },
  {
    title: "React Meetup Surabaya",
    image: "/images/event2.png",
    slug: "react-meetup-surabaya",
    location: "Surabaya, Indonesia",
    date: "2025-11-20",
    time: "01:00 PM - 04:00 PM",
  },
  {
    title: "AI & Cloud Hackathon",
    image: "/images/event3.png",
    slug: "ai-cloud-hackathon",
    location: "Bandung, Indonesia",
    date: "2025-12-05",
    time: "08:00 AM - 08:00 PM",
  },
  {
    title: "Next.js Workshop Bali",
    image: "/images/event4.png",
    slug: "nextjs-workshop-bali",
    location: "Denpasar, Bali",
    date: "2025-12-18",
    time: "10:00 AM - 03:00 PM",
  },
  {
    title: "Startup Tech Meetup",
    image: "/images/event5.png",
    slug: "startup-tech-meetup",
    location: "Yogyakarta, Indonesia",
    date: "2026-01-07",
    time: "02:00 PM - 06:00 PM",
  },
]
