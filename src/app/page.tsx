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
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── menu data ─── */
type MenuItem = { name: string; price: string; note?: string };
type MenuCategory = {
  title: string;
  accent: string;
  bg: string;
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    title: "Signature",
    accent: "text-matcha",
    bg: "bg-matcha-pale/60",
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
    accent: "text-coffee",
    bg: "bg-coffee-pale/60",
    items: [
      { name: "Batch Brew", price: "$4.00" },
      { name: "Cold Brew", price: "$5.00" },
    ],
  },
  {
    title: "Espresso",
    accent: "text-coffee",
    bg: "bg-coffee-pale/60",
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
    accent: "text-matcha",
    bg: "bg-matcha-pale/60",
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
    accent: "text-matcha",
    bg: "bg-matcha-pale/40",
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
    accent: "text-pink-400",
    bg: "bg-pink-50/60",
    items: [
      { name: "Strawberry Milk", price: "$4.50" },
      { name: "Strawberry Ade", price: "$4.50" },
    ],
  },
  {
    title: "Grab N Go",
    accent: "text-sky-500",
    bg: "bg-sky-50/60",
    items: [
      { name: "Strange Water", price: "$5.00" },
      { name: "Perrier", price: "$2.50" },
      { name: "Mountain Valley", price: "$3.50" },
    ],
  },
];

/* ─── photos for strip ─── */
const photos = [
  { src: "/images/matcha.png", alt: "Matcha latte with Chrome branding" },
  { src: "/images/stacked-drinks.png", alt: "Stacked Chrome Coffee drinks" },
  { src: "/images/matcha.png", alt: "Chrome matcha close-up" },
  { src: "/images/stacked-drinks.png", alt: "Friends holding Chrome drinks" },
];

/* ─── component ─── */
export default function Home() {
  const [menuImageOpen, setMenuImageOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-20 bg-cream relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <Image
              src="/images/logo.png"
              alt="Chrome Coffee Studio logo"
              width={280}
              height={120}
              className="w-56 sm:w-72 h-auto mb-6"
              priority
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-neutral-500 font-medium mb-10 tracking-wide"
          >
            Torrance&apos;s favorite coffee studio.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-12">
            <Image
              src="/images/stacked-drinks.png"
              alt="Three Chrome Coffee drinks stacked together"
              width={500}
              height={600}
              className="w-72 sm:w-96 h-auto rounded-3xl shadow-xl"
              priority
            />
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="#menu"
            className="bg-matcha text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-lg hover:bg-matcha-light hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Menu
          </motion.a>
        </motion.div>

        {/* soft gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-dark to-transparent pointer-events-none" />
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="py-12 bg-cream-dark">
        <div className="flex gap-5 overflow-x-auto px-6 hide-scrollbar snap-x snap-mandatory">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex-shrink-0 snap-center ${
                i % 2 === 0
                  ? "w-60 h-72 sm:w-72 sm:h-80"
                  : "w-52 h-64 sm:w-64 sm:h-72"
              } relative rounded-3xl overflow-hidden shadow-md`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 240px, 288px"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-20 sm:py-28 px-6 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
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

          <div className="grid gap-8 sm:grid-cols-2">
            {menu.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className={`${cat.bg} rounded-3xl p-6 sm:p-8 shadow-sm`}
              >
                <h3 className={`text-xl font-bold mb-5 ${cat.accent}`}>
                  {cat.title}
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
              className="inline-flex items-center gap-2 bg-white border-2 border-matcha text-matcha font-bold px-6 py-3 rounded-full hover:bg-matcha hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
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
      <section className="py-20 sm:py-28 px-6 bg-cream-dark">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div variants={fadeUp} className="md:w-1/2">
            <Image
              src="/images/matcha.png"
              alt="Chrome Coffee matcha latte"
              width={500}
              height={600}
              className="rounded-3xl shadow-xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
              More than just coffee.
            </h2>
            <p className="text-neutral-500 text-base sm:text-lg leading-relaxed mb-4">
              Chrome Coffee Studio is your neighborhood spot for good energy,
              beautiful drinks, and a vibe that just feels right.
            </p>
            <p className="text-neutral-500 text-base sm:text-lg leading-relaxed mb-6">
              Whether you&apos;re here for our signature Chrome Matcha, a creamy
              latte, or just a moment to breathe &mdash; we&apos;ve got you.
              Come for the coffee, stay for the aesthetic.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["matcha lover", "good vibes", "aesthetic", "community"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-matcha-pale text-matcha font-semibold text-sm px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── VISIT US ── */}
      <section className="py-20 sm:py-28 px-6 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
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
            className="bg-white rounded-3xl shadow-sm p-8 sm:p-10 space-y-5"
          >
            <div>
              <h3 className="font-bold text-lg mb-1">Location</h3>
              <p className="text-neutral-500">Torrance, CA</p>
            </div>
            <div className="w-16 h-px bg-neutral-200 mx-auto" />
            <div>
              <h3 className="font-bold text-lg mb-1">Hours</h3>
              <p className="text-neutral-500">
                Mon &ndash; Sun &middot; 7am &ndash; 5pm
              </p>
            </div>
            <div className="w-16 h-px bg-neutral-200 mx-auto" />
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
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white py-10 px-6 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Chrome Coffee Studio"
              width={100}
              height={40}
              className="w-20 h-auto"
            />
            <span className="text-neutral-400 text-sm">Torrance, CA</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/chromecoffeestudio"
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
          </div>

          <p className="text-neutral-300 text-xs">
            &copy; 2025 Chrome Coffee Studio
          </p>
        </div>
      </footer>
    </main>
  );
}
