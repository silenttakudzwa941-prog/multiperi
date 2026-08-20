"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "LEGEND",
    category: "Music Event",
    thumb: "/images/legend.png",
    video: "https://youtube.com/embed/VIDEO_ID_HERE",
    desc: "Full production, branding and digital coverage for LEGEND concert."
  },
  {
    id: 2,
    title: "BLING 4",
    category: "Festival",
    thumb: "/images/bling4.png",
    video: "https://youtube.com/embed/VIDEO_ID_HERE",
    desc: "Stage design, artist management and social campaign for BLING 4."
  },
  {
    id: 3,
    title: "ORGANICA",
    category: "Brand Activation",
    thumb: "/images/organica.png",
    video: "https://youtube.com/embed/VIDEO_ID_HERE",
    desc: "Experiential marketing and content production for ORGANICA."
  },
  {
    id: 4,
    title: "BURNING SPEARS",
    category: "Corporate Event",
    thumb: "/images/burningspears.png",
    video: "https://youtube.com/embed/VIDEO_ID_HERE",
    desc: "Corporate AV, livestream and highlights video."
  },
  {
    id: 5,
    title: "Music Video Shoot",
    category: "Media Production",
    thumb: "/images/mv.png",
    video: "https://youtube.com/embed/VIDEO_ID_HERE",
    desc: "Concept, direction, shoot and edit for top Zim artists."
  },
  {
    id: 6,
    title: "Digital Campaign",
    category: "Advertising",
    thumb: "/images/campaign.png",
    video: "https://youtube.com/embed/VIDEO_ID_HERE",
    desc: "360 campaign that drove 2M+ impressions and sales."
  }
]

const events = [
  {
    id: 1,
    title: "AMA2K FESTIVAL 2026",
    category: "Festival",
    date: "30 Nov 2026",
    venue: "Globe Cinema, Harare",
    thumb: "/images/ama2k.jpeg",
    ticketLink: "https://wa.me/2637XXXXXXXX?text=Hi%20I%20want%20Ama2K%20tickets", // replace with Paynow link later
    desc: "The biggest 2000s throwback party. 20+ artists. 1 night."
  },
  {
    id: 2,
    title: "Book Us For Your Event",
    category: "Corporate Booking",
    date: "Available Year Round",
    venue: "Your Venue",
    thumb: "/images/campaign.png",
    ticketLink: "#booking",
    desc: "Concerts, Weddings, Launches. Stage, Sound, Artists, Livestream."
  }
]

export default function Portfolio() {
  const [tab, setTab] = useState<"portfolio" | "events">("portfolio");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section id="portfolio" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4">Our Work & Events</h2>
        <p className="text-center text-zinc-400 mb-8">Events, Brands & Campaigns We Brought To Life</p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setTab("portfolio")} 
            className={`px-6 py-3 rounded-lg font-bold transition ${tab==="portfolio"? "bg-red-600 text-white" : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setTab("events")} 
            className={`px-6 py-3 rounded-lg font-bold transition ${tab==="events"? "bg-red-600 text-white" : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"}`}
          >
            Upcoming Events
          </button>
        </div>

        {/* PORTFOLIO TAB */}
        {tab === "portfolio" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div 
                key={project.id}
                onClick={() => setSelected(project)}
                className="group relative overflow-hidden rounded-xl cursor-pointer border-zinc-900 hover:border-red-600 transition"
              >
                <Image 
                  src={project.thumb} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <p className="text-xs text-red-500 font-bold">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EVENTS TAB */}
        {tab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(e => (
              <div key={e.id} className="bg-zinc-900 rounded-xl overflow-hidden border-zinc-800 hover:border-red-600 transition">
                <Image src={e.thumb} width={800} height={400} alt={e.title} className="w-full h-60 object-cover"/>
                <div className="p-6">
                  <p className="text-xs text-red-500 font-bold">{e.date} • {e.venue}</p>
                  <h3 className="text-2xl font-bold mt-2">{e.title}</h3>
                  <p className="text-zinc-400 mt-2">{e.desc}</p>
                  <div className="flex gap-3 mt-4">
                    {e.id === 1? (
                      <a href={e.ticketLink} target="_blank" className="px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold">Get Tickets</a>
                    ) : (
                      <button onClick={() => setShowBooking(true)} className="px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold">Place Booking</button>
                    )}
                    <a href={`#contact`} className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* VIDEO MODAL */}
      {selected && (
        <div 
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 rounded-2xl max-w-4xl w-full overflow-hidden border border-zinc-800"
          >
            <div className="aspect-video">
              <iframe 
                src={selected.video}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold">{selected.title}</h3>
              <p className="text-red-500">{selected.category}</p>
              <p className="mt-3 text-zinc-300">{selected.desc}</p>
              <button 
                onClick={() => setSelected(null)}
                className="mt-6 px-5 py-3 border-zinc-700 rounded-lg hover:bg-zinc-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {showBooking && (
        <div 
          onClick={() => setShowBooking(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 rounded-2xl max-w-2xl w-full p-8 border border-zinc-800"
          >
            <h3 className="text-3xl font-bold mb-4">Place Event Booking</h3>
            <p className="text-zinc-400 mb-6">Tell us about your event and we’ll get back to you on WhatsApp</p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form[0] as HTMLInputElement).value;
                const date = (form[1] as HTMLInputElement).value;
                const type = (form[2] as HTMLSelectElement).value;
                const msg = (form[3] as HTMLTextAreaElement).value;
                window.open(`https://wa.me/2637XXXXXXXX?text=New%20Booking:%20${name}%20-%20${type}%20on%20${date}.%20${msg}`)
                setShowBooking(false);
              }}
              className="flex flex-col gap-4"
            >
              <input required placeholder="Your Name / Company" className="bg-zinc-800 p-3 rounded-lg" />
              <input required type="date" placeholder="Event Date" className="bg-zinc-800 p-3 rounded-lg" />
              <select required className="bg-zinc-800 p-3 rounded-lg">
                <option>Concert</option>
                <option>Wedding</option>
                <option>Corporate Launch</option>
                <option>Festival</option>
              </select>
              <textarea required placeholder="What do you need? Stage, Sound, Artists..." rows={4} className="bg-zinc-800 p-3 rounded-lg"></textarea>
              <button type="submit" className="px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold">Send to WhatsApp</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}