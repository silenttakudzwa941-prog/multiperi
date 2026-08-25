import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      
      {/* 1. Video Background - FIXED FOR MOBILE */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto" // <-- ADDED
        controls={false} // <-- ADDED
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Fallback image if video fails */}
        Your browser does not support video
      </video>

      {/* 2. Dark overlay so text pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* 3. Logo Watermark */}
      <Image 
        src="/logo.png" 
        alt="" 
        width={500}
        height={500}
        priority // <-- ADDED: makes logo load faster
        className="absolute inset-0 m-auto opacity-10 pointer-events-none" 
      />

      {/* 4. Content / Video Script */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
          MULTIPERI
        </h1>
        
        {/* THE SCRIPT */}
        <p className="text-xl md:text-2xl mt-4 font-light text-zinc-200">
          Helping Brands <span className="text-red-500 font-bold">Say Less</span>, 
          <span className="text-red-500 font-bold"> Mean More</span> & 
          <span className="text-red-500 font-bold"> Sell Smart</span>
        </p>
        
        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          We’re a Creative Agency in Zimbabwe. Advertising, Media Production, 
          Events & Digital Campaigns that actually convert.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex-col sm:flex-row gap-4 justify-center">
          <a href="#portfolio" className="btn-outline">
            View Our Work
          </a>
          <a href="https://wa.me/263XXXXXXXXX" target="_blank" className="btn-primary">
            Get A Quote
          </a>
        </div>
      </div>

      {/* 5. Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}