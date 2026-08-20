const services = [
  { title: "Advertising & Branding", desc: "Messaging, strategy, and identity that sells" },
  { title: "Media & Production", desc: "Music videos, event coverage, corporate films" },
  { title: "Digital Campaigns", desc: "Social content, reels, marketing that converts" },
]

export default function Services() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map(s => (
          <div key={s.title} className="border border-zinc-800 p-8 rounded-xl hover:border-red-600 transition">
            <h3 className="text-2xl font-bold red-accent mb-3">{s.title}</h3>
            <p className="text-zinc-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}