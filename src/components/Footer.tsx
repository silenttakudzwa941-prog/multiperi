"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `New Newsletter Signup: ${email}`
    );

    window.open(
      `https://wa.me/2637XXXXXXXX?text=${message}`,
      "_blank"
    );

    setEmail("");
    alert("Thanks! We'll send you event updates.");
  };

  const socials = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://facebook.com/",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/",
      label: "YouTube",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/",
      label: "X",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/",
      label: "TikTok",
    },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-8 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/footer-bg.jpg"
          alt="Concert crowd"
          fill
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Newsletter CTA */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 mb-16 text-center animate-fade-in">
          <h3 className="text-3xl font-black mb-2">
            Don&apos;t Miss The Next Show
          </h3>

          <p className="text-zinc-400 mb-6">
            Get early bird tickets + event updates straight to your phone
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-lg focus:outline-none focus:border-red-600"
            />

            <button
              type="submit"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 hover:scale-105 rounded-lg font-bold flex items-center justify-center gap-2 transition"
            >
              Subscribe
              <FaPaperPlane size={16} />
            </button>
          </form>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand + Logo */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpeg"
                alt="MULTIPERI Logo"
                width={160}
                height={50}
                className="mb-4"
              />
            </Link>

            <p className="text-zinc-400 mt-4">
              Zimbabwe&apos;s leading event production, festivals, and digital
              campaigns. We bring ideas to life.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {socials.map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                    className="w-10 h-10 rounded-full bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center hover:bg-red-600 hover:scale-125 hover:rotate-6 transition duration-300 animate-fade-in-up"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-red-500 hover:translate-x-1 inline-block transition"
                >
                  Our Work
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="hover:text-red-500 hover:translate-x-1 inline-block transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#portfolio"
                  className="hover:text-red-500 hover:translate-x-1 inline-block transition"
                >
                  Upcoming Events
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="hover:text-red-500 hover:translate-x-1 inline-block transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              What We Do
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Event Production</li>
              <li>Festivals &amp; Concerts</li>
              <li>Brand Activations</li>
              <li>Media Production</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Get In Touch
            </h3>

            <ul className="space-y-3 text-zinc-400 mb-6">
              <li className="flex items-center gap-3">
                <FaPhone size={16} />
                +263 77 549 6377
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope size={16} />
                info@multiperi.co.zw
              </li>

              <li className="flex items-center gap-3">
                <FaLocationDot size={16} />
                Harare, Zimbabwe
              </li>
            </ul>

            <a
              href="https://wa.me/2637XXXXXXXX?text=Hi%20I%20want%20to%20book%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 bg-red-600 hover:bg-red-700 hover:scale-105 rounded-lg font-bold transition"
            >
              Book Us On WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} MULTIPERI. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-zinc-500">
            <Link
              href="/privacy"
              className="hover:text-red-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-red-500"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </footer>
  );
}