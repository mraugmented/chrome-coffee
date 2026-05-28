"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden bg-dark">
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero-chrome-bg min-h-[100dvh] flex flex-col items-center justify-center px-6 relative">
        {/* Chrome 3D shape decorations */}
        <img
          src="/images/shapes/star4.png"
          alt=""
          className="chrome-shape w-16 sm:w-24 top-[12%] left-[8%] animate-float-slow opacity-30"
        />
        <img
          src="/images/shapes/sparkle.png"
          alt=""
          className="chrome-shape w-14 sm:w-20 top-[18%] right-[10%] animate-float-drift opacity-25"
        />
        <img
          src="/images/shapes/rings.png"
          alt=""
          className="chrome-shape w-12 sm:w-16 bottom-[25%] left-[12%] animate-float-slower opacity-20"
        />
        <img
          src="/images/shapes/star8.png"
          alt=""
          className="chrome-shape w-10 sm:w-14 bottom-[30%] right-[8%] animate-float-slow opacity-20"
          style={{ animationDelay: "3s" }}
        />
        <img
          src="/images/shapes/molecule.png"
          alt=""
          className="chrome-shape w-10 sm:w-14 top-[40%] left-[3%] animate-float-drift opacity-15"
          style={{ animationDelay: "5s" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center text-center relative z-10"
        >
          {/* Chrome bubble letter title */}
          <motion.div variants={fadeUp} className="mb-3">
            <Image
              src="/images/letters/chrome-word.png"
              alt="CHROME"
              width={3804}
              height={840}
              className="w-[280px] sm:w-[400px] md:w-[500px] h-auto chrome-word-hero"
              priority
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-chrome text-xs sm:text-sm tracking-[0.4em] uppercase font-medium mb-16"
          >
            coffee studio
          </motion.p>

          {/* Hero photo */}
          <motion.div variants={fadeUp} className="mb-16 relative">
            <Image
              src="/images/drinks-table.png"
              alt="Three Chrome Coffee drinks on a table"
              width={600}
              height={600}
              className="w-72 sm:w-[22rem] h-auto rounded-2xl"
              style={{
                boxShadow:
                  "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 80px -20px rgba(192,192,192,0.06)",
              }}
              priority
            />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex gap-4">
            <a href="#menu" className="pill-primary text-sm px-8 py-3">
              Menu
            </a>
            <a href="#visit" className="pill-ghost text-sm px-8 py-3">
              Visit
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent pointer-events-none z-20" />
      </section>

      {/* ══════════════════ THE VIBES ══════════════════ */}
      <section className="py-20 sm:py-32 bg-dark relative overflow-hidden">
        <img
          src="/images/shapes/saturn.png"
          alt=""
          className="chrome-shape w-20 sm:w-28 -top-10 right-[5%] animate-float-slower opacity-20"
        />
        <img
          src="/images/shapes/atom.png"
          alt=""
          className="chrome-shape w-20 sm:w-28 bottom-[10%] -left-6 animate-float-slow opacity-15"
        />
        <img
          src="/images/shapes/spring.png"
          alt=""
          className="chrome-shape w-14 sm:w-20 top-[20%] right-[3%] animate-float-drift opacity-15"
        />

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center relative z-10 mb-14 sm:mb-20 px-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold text-chrome-dark tracking-[0.4em] uppercase mb-6"
          >
            the vibes
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-chrome-light text-lg sm:text-xl leading-relaxed mb-2 font-medium"
          >
            not your average coffee shop.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-chrome-dark text-sm sm:text-base leading-relaxed mb-8"
          >
            crafted lattes, fresh pastries, matcha that hits different,
            and specialty drinks you won&apos;t find anywhere else. every sip
            is made to look as good as it tastes.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-8">
            {["coffee", "matcha", "pastries", "specialty drinks", "good vibes"].map(
              (tag) => (
                <span
                  key={tag}
                  className="glass text-chrome text-xs font-medium px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href="https://www.instagram.com/chrome.coffee.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-matcha font-semibold text-sm hover:underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @chrome.coffee.studio
            </a>
          </motion.div>
        </motion.div>

        {/* Dual marquee photo rows */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          <div className="marquee-fade">
            <div className="marquee-row">
              <div className="marquee-track animate-marquee-left">
                {[
                  { src: "/images/iced-latte.png", alt: "Iced latte" },
                  { src: "/images/matcha.png", alt: "Matcha latte" },
                  { src: "/images/pastries.png", alt: "Fresh pastries" },
                  { src: "/images/latte-art.png", alt: "Latte art" },
                  { src: "/images/beans.png", alt: "Coffee beans" },
                  { src: "/images/drinks-table.png", alt: "Drinks on table" },
                  { src: "/images/iced-latte.png", alt: "Iced latte" },
                  { src: "/images/matcha.png", alt: "Matcha latte" },
                  { src: "/images/pastries.png", alt: "Fresh pastries" },
                  { src: "/images/latte-art.png", alt: "Latte art" },
                  { src: "/images/beans.png", alt: "Coffee beans" },
                  { src: "/images/drinks-table.png", alt: "Drinks on table" },
                ].map((photo, i) => (
                  <div key={`row1-${i}`} className="marquee-card">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="marquee-fade">
            <div className="marquee-row">
              <div className="marquee-track animate-marquee-right">
                {[
                  { src: "/images/latte-pour.png", alt: "Latte pour" },
                  { src: "/images/owner.png", alt: "Chrome Coffee owner" },
                  { src: "/images/biscoff-duo.png", alt: "Specialty drinks" },
                  { src: "/images/storefront.png", alt: "Chrome Coffee Studio" },
                  { src: "/images/stacked-drinks.png", alt: "Stacked drinks" },
                  { src: "/images/biscoff-close.png", alt: "Specialty latte" },
                  { src: "/images/latte-pour.png", alt: "Latte pour" },
                  { src: "/images/owner.png", alt: "Chrome Coffee owner" },
                  { src: "/images/biscoff-duo.png", alt: "Specialty drinks" },
                  { src: "/images/storefront.png", alt: "Chrome Coffee Studio" },
                  { src: "/images/stacked-drinks.png", alt: "Stacked drinks" },
                  { src: "/images/biscoff-close.png", alt: "Specialty latte" },
                ].map((photo, i) => (
                  <div key={`row2-${i}`} className="marquee-card">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MENU ══════════════════ */}
      <section id="menu" className="py-20 sm:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chrome-bg.jpeg"
            alt=""
            fill
            className="object-cover opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
        </div>

        <img
          src="/images/shapes/heart.png"
          alt=""
          className="chrome-shape w-16 sm:w-24 top-[10%] -left-4 animate-float-drift opacity-20"
        />
        <img
          src="/images/shapes/star4b.png"
          alt=""
          className="chrome-shape w-12 sm:w-16 bottom-[15%] right-[5%] animate-float-slow opacity-15"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-md mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Image
              src="/images/letters/menu-word.png"
              alt="MENU"
              width={3135}
              height={1012}
              className="w-[180px] sm:w-[240px] h-auto chrome-word"
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-chrome-dark text-sm mb-12"
          >
            Good drinks, good energy.
          </motion.p>

          <motion.div variants={fadeUp}>
            <button
              onClick={() => setMenuOpen(true)}
              className="group relative cursor-pointer block mx-auto"
            >
              <Image
                src="/images/menu.webp"
                alt="Chrome Coffee Studio menu"
                width={500}
                height={700}
                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  boxShadow:
                    "0 30px 80px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium text-sm tracking-wide bg-black/50 backdrop-blur-sm px-5 py-2.5 rounded-full">
                  Tap to expand
                </span>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Modal */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setMenuOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute -top-3 -right-3 z-10 bg-dark-elevated rounded-full w-9 h-9 flex items-center justify-center text-chrome-light hover:text-white transition-colors text-lg border border-dark-border"
            >
              &times;
            </button>
            <Image
              src="/images/menu.webp"
              alt="Chrome Coffee Studio full menu"
              width={800}
              height={1000}
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      )}

      {/* ══════════════════ VISIT ══════════════════ */}
      <section id="visit" className="py-20 sm:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chrome-bg.jpeg"
            alt=""
            fill
            className="object-cover opacity-[0.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
        </div>

        <img
          src="/images/shapes/cushion.png"
          alt=""
          className="chrome-shape w-16 sm:w-24 top-[15%] right-[5%] animate-float-slower opacity-20"
        />
        <img
          src="/images/shapes/star4.png"
          alt=""
          className="chrome-shape w-10 sm:w-14 bottom-[20%] left-[8%] animate-float-drift opacity-15"
          style={{ animationDelay: "2s" }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-lg mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Image
              src="/images/letters/visit-word.png"
              alt="VISIT"
              width={3091}
              height={940}
              className="w-[160px] sm:w-[220px] h-auto chrome-word"
            />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-chrome-dark text-sm mb-12"
          >
            We&apos;d love to make you something good.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="glass-chrome rounded-2xl p-8 sm:p-10 space-y-6 text-left"
          >
            <div>
              <p className="text-chrome-dark text-xs tracking-widest uppercase mb-1.5">Address</p>
              <p className="text-chrome-light font-medium">2734 Sepulveda Blvd</p>
              <p className="text-chrome-light font-medium">Torrance, CA 90505</p>
            </div>
            <div className="chrome-divider" />
            <div>
              <p className="text-chrome-dark text-xs tracking-widest uppercase mb-1.5">Phone</p>
              <a href="tel:+14243605662" className="text-chrome-light font-medium hover:text-matcha transition-colors">
                (424) 360-5662
              </a>
            </div>
            <div className="chrome-divider" />
            <div>
              <p className="text-chrome-dark text-xs tracking-widest uppercase mb-1.5">Hours</p>
              <p className="text-chrome-light font-medium">Every day &middot; 7 am &ndash; 6 pm</p>
            </div>
            <div className="chrome-divider" />
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.google.com/maps/place/2734+Sepulveda+Blvd,+Torrance,+CA+90505"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-primary inline-flex items-center gap-2 text-sm px-6 py-2.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Directions
              </a>
              <a
                href="https://www.instagram.com/chrome.coffee.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-ghost inline-flex items-center gap-2 text-sm px-6 py-2.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="bg-dark py-8 px-6 border-t border-dark-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/images/letters/chrome-word.png"
            alt="Chrome"
            width={3804}
            height={840}
            className="w-[80px] h-auto chrome-word"
          />
          <a
            href="https://www.instagram.com/chrome.coffee.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-chrome-dark hover:text-matcha transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <p className="text-chrome-dark/40 text-xs">&copy; 2025 Chrome Coffee Studio</p>
        </div>
      </footer>
    </main>
  );
}
