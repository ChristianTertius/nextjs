import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string,
  image: string,
  slug: string,
  location: string,
  date: string,
  time: string
}

const EventCard = ({ title, image, time, date, location, slug }: CardProps) => {
  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
    >
      <Image src={image} width={410} height={300} alt={title} className="poster" />
      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg"
          width={14}
          height={14}
          alt="location"
        />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>

      <div className="datetime">

        <div>
          <Image src={"/icons/calendar.svg"} alt="date" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div>
          <Image src={"/icons/clock.svg"} alt="time" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard
