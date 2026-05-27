"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── menu data ─── */
type MenuItem = { name: string; price: string; note?: string };
type MenuCategory = {
  title: string;
  emoji: string;
  accent: string;
  bg: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    title: "Signature",
    emoji: "\u2728",
    accent: "text-matcha",
    bg: "bg-matcha-pale/30",
    items: [
      { name: "Chrome Latte", price: "$6.50" },
      { name: "Chrome Matcha", price: "$7.00" },
      { name: "Cream Top", price: "$5.50" },
      { name: "Cold Brew Latte", price: "$6.00" },
      { name: "Banana Cream Latte", price: "$7.00" },
      { name: "Banana Cream Matcha", price: "$7.00" },
      { name: "Coconut Matcha", price: "$6.50" },
      { name: "Hojicha Cream Top", price: "$6.75" },
    ],
  },
  {
    title: "Coffee",
    emoji: "\u2615",
    accent: "text-coffee",
    bg: "bg-coffee-pale/30",
    items: [
      { name: "Batch Brew", price: "$4.00" },
      { name: "Cold Brew", price: "$5.00" },
    ],
  },
  {
    title: "Espresso",
    emoji: "\u2615",
    accent: "text-coffee",
    bg: "bg-coffee-pale/30",
    items: [
      { name: "Espresso", price: "$4.00" },
      { name: "Americano", price: "$4.50" },
      { name: "Cortado", price: "$5.00" },
      { name: "Cappuccino", price: "$5.00" },
      {
        name: "Latte",
        price: "$5.25",
        note: "Flavors: Lavender, Maple, Vanilla, Honey +$0.50 | Spanish +$0.75",
      },
      { name: "Espresso Vuzu Tonic", price: "$6.25" },
    ],
  },
  {
    title: "Matcha",
    emoji: "\ud83c\udf75",
    accent: "text-matcha",
    bg: "bg-matcha-pale/30",
    items: [
      { name: "Matcha Latte", price: "$6.00" },
      { name: "Strawberry Matcha", price: "$6.50" },
      { name: "Vuzu Matcha Tonic", price: "$6.50" },
      { name: "Strawberry Vuzu Matcha Tonic", price: "$7.00" },
      { name: "Hojicha Latte", price: "$6.00" },
    ],
  },
  {
    title: "Tea",
    emoji: "\ud83e\uddc2",
    accent: "text-matcha",
    bg: "bg-matcha-pale/20",
    items: [
      { name: "Genmaicha", price: "$5.00" },
      { name: "Jasmine", price: "$4.25" },
      { name: "Earl Grey", price: "$4.25" },
      { name: "Bergamot Oolong", price: "$4.50" },
      { name: "White Peony", price: "$4.50" },
      { name: "Turmeric Ginger", price: "$4.25" },
    ],
  },
  {
    title: "Non-Coffee",
    emoji: "\ud83c\udf53",
    accent: "text-pink-400",
    bg: "bg-pink-50/30",
    items: [
      { name: "Strawberry Milk", price: "$4.50" },
      { name: "Strawberry Ade", price: "$4.50" },
    ],
  },
  {
    title: "Grab N Go",
    emoji: "\ud83d\udca7",
    accent: "text-sky-500",
    bg: "bg-sky-50/30",
    items: [
      { name: "Strange Water", price: "$5.00" },
      { name: "Perrier", price: "$2.50" },
      { name: "Mountain Valley", price: "$3.50" },
    ],
  },
];

/* ─── component ─── */
export default function Home() {
  const [menuImageOpen, setMenuImageOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-20 relative"
        style={{
          background: "linear-gradient(180deg, #faf9f6 0%, #f0f5eb 50%, #e8f0e0 100%)",
        }}
      >
        {/* Floating decorative blobs */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-matcha/10 animate-float-slow pointer-events-none" />
        <div className="absolute top-40 right-16 w-20 h-20 rounded-full bg-matcha/15 animate-float-slower pointer-events-none" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-matcha-pale/60 animate-float-drift pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-matcha/8 animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-60 right-10 w-24 h-24 rounded-full bg-matcha-light/15 animate-float-slower pointer-events-none" style={{ animationDelay: "4s" }} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center text-center max-w-2xl mx-auto relative z-10"
        >
          {/* Logo with blend mode -- no container box */}
          <motion.div variants={fadeUp}>
            <Image
              src="/images/logo.png"
              alt="Chrome Coffee Studio logo"
              width={320}
              height={140}
              className="w-60 sm:w-80 h-auto mb-4 logo-blend"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-neutral-400 font-medium mb-12 tracking-wide"
          >
            Torrance&apos;s favorite coffee studio
          </motion.p>

          {/* Hero photo with 3D tilt */}
          <motion.div
            variants={fadeUp}
            className="mb-14"
          >
            <div className="tilt-hero">
              <Image
                src="/images/stacked-drinks.png"
                alt="Three Chrome Coffee drinks stacked together"
                width={500}
                height={600}
                className="w-72 sm:w-96 h-auto rounded-3xl"
                style={{
                  boxShadow: "0 25px 60px -12px rgba(143, 181, 115, 0.3), 0 12px 30px -8px rgba(0,0,0,0.1)",
                }}
                priority
              />
            </div>
          </motion.div>

          {/* Pill CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a
              href="#menu"
              className="bg-matcha text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="bg-matcha-pale text-matcha font-bold text-base px-8 py-3.5 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 border border-matcha/20"
            >
              Find Us
            </a>
          </motion.div>
        </motion.div>

        {/* soft gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-dark to-transparent pointer-events-none" />
      </section>

      {/* ── THE VIBES -- BENTO PHOTO SECTION ── */}
      <section className="py-16 sm:py-24 px-6 bg-cream-dark relative overflow-hidden">
        {/* Background orb */}
        <div className="absolute top-0 right-0 w-96 h-96 gradient-orb animate-float-slower" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-sm font-semibold text-matcha tracking-widest uppercase mb-10"
          >
            the vibes ✨
          </motion.p>

          {/* Bento grid with 2 photos */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            {/* Matcha photo -- larger, tilted left */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-3 relative"
            >
              <div className="tilt-left">
                <Image
                  src="/images/matcha.png"
                  alt="Matcha latte with Chrome branding"
                  width={600}
                  height={700}
                  className="w-full h-auto rounded-3xl"
                  style={{
                    boxShadow: "0 20px 50px -12px rgba(143, 181, 115, 0.25), 0 8px 24px -8px rgba(0,0,0,0.08)",
                  }}
                />
              </div>
            </motion.div>

            {/* Stacked drinks -- smaller, tilted right */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 relative"
            >
              <div className="tilt-right">
                <Image
                  src="/images/stacked-drinks.png"
                  alt="Stacked Chrome Coffee drinks"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-3xl"
                  style={{
                    boxShadow: "0 20px 50px -12px rgba(143, 181, 115, 0.2), 0 8px 24px -8px rgba(0,0,0,0.06)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-20 sm:py-28 px-6 bg-cream relative">
        {/* Background orb */}
        <div className="absolute top-1/4 left-0 w-80 h-80 gradient-orb animate-float-slow" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 gradient-orb-pink animate-float-slower" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-4"
          >
            Menu
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center text-neutral-400 mb-14 text-base sm:text-lg"
          >
            Good drinks, good energy.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2">
            {menu.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className={`glass rounded-3xl p-6 sm:p-8 ${cat.bg}`}
                style={{
                  boxShadow: "0 4px 24px -4px rgba(0,0,0,0.04)",
                }}
              >
                <h3 className={`text-xl font-bold mb-5 ${cat.accent}`}>
                  {cat.emoji} {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex justify-between items-baseline gap-3">
                        <span className="font-semibold text-sm sm:text-base">
                          {item.name}
                        </span>
                        <span className="text-sm text-neutral-500 font-medium whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      {item.note && (
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {item.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* full menu image link */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <button
              onClick={() => setMenuImageOpen(true)}
              className="inline-flex items-center gap-2 glass border border-matcha/30 text-matcha font-bold px-6 py-3 rounded-full hover:bg-matcha hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-4l-2-2H9L7 7H5a2 2 0 00-2 2z"
                />
                <circle cx="12" cy="13" r="3" />
              </svg>
              View Full Menu Photo
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Image Modal */}
      {menuImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setMenuImageOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuImageOpen(false)}
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-neutral-600 hover:text-black transition-colors font-bold text-xl"
            >
              &times;
            </button>
            <Image
              src="/images/menu.webp"
              alt="Chrome Coffee Studio full menu"
              width={800}
              height={1000}
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      )}

      {/* ── ABOUT / VIBE ── */}
      <section className="py-20 sm:py-28 px-6 bg-cream-dark relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute bottom-0 left-10 w-72 h-72 gradient-orb animate-float-slow" />
        <div className="absolute top-10 right-10 w-48 h-48 gradient-orb-pink animate-float-drift" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
        >
          {/* Matcha photo with rotation */}
          <motion.div variants={fadeUp} className="md:w-1/2">
            <div style={{ transform: "rotate(-3deg)" }}>
              <Image
                src="/images/matcha.png"
                alt="Chrome Coffee matcha latte"
                width={500}
                height={600}
                className="w-full h-auto rounded-3xl"
                style={{
                  boxShadow: "0 25px 60px -12px rgba(143, 181, 115, 0.3), 0 12px 30px -8px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
              not your average
              <br />
              coffee shop.
            </h2>
            <p className="text-neutral-500 text-lg sm:text-xl leading-relaxed mb-3 font-medium">
              we&apos;re a whole vibe.
            </p>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
              matcha-obsessed, aesthetic-driven, and serving the kind of drinks
              you can&apos;t help but photograph. come for the chrome matcha,
              stay because it just feels right.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {["matcha lover", "good vibes", "aesthetic", "community"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="glass bg-matcha-pale/40 text-matcha font-semibold text-sm px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* IG CTA */}
            <a
              href="https://www.instagram.com/chrome.coffee.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-matcha font-bold text-base hover:underline transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              follow the vibes @chrome.coffee.studio
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── VISIT US ── */}
      <section id="visit" className="py-20 sm:py-28 px-6 bg-cream relative overflow-hidden">
        {/* Background gradient orb for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] gradient-orb animate-float-slower" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold mb-5"
          >
            Come say hi.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-neutral-400 text-base sm:text-lg mb-10"
          >
            We&apos;d love to make you something good.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-3xl p-8 sm:p-10 space-y-5"
            style={{
              boxShadow: "0 8px 32px -4px rgba(143, 181, 115, 0.12), 0 4px 16px -4px rgba(0,0,0,0.04)",
            }}
          >
            <div>
              <h3 className="font-bold text-lg mb-1">Location</h3>
              <p className="text-neutral-500">Torrance, CA</p>
            </div>
            <div className="w-16 h-px bg-neutral-200/60 mx-auto" />
            <div>
              <h3 className="font-bold text-lg mb-1">Hours</h3>
              <p className="text-neutral-500">
                Mon &ndash; Sun &middot; 7am &ndash; 5pm
              </p>
            </div>
            <div className="w-16 h-px bg-neutral-200/60 mx-auto" />
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a
                href="https://www.google.com/maps/search/Chrome+Coffee+Studio+Torrance+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-matcha text-white font-bold px-6 py-3 rounded-full hover:bg-matcha-light hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Find Us
              </a>
              <a
                href="https://www.instagram.com/chrome.coffee.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-matcha-pale text-matcha font-bold px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 border border-matcha/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-cream py-10 px-6 border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Chrome Coffee Studio"
              width={100}
              height={40}
              className="w-20 h-auto logo-blend"
            />
            <span className="text-neutral-400 text-sm">Torrance, CA</span>
          </div>

          <a
            href="https://www.instagram.com/chrome.coffee.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-matcha transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          <p className="text-neutral-300 text-xs">
            &copy; 2025 Chrome Coffee Studio
          </p>
        </div>
      </footer>
    </main>
  );
}
