"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/config/profile";
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(8,4,13,.7)] backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold">Saniya <span className="grad">Mhatre</span></a>
        <ul className="hidden gap-8 md:flex">
          {profile.nav.map(([l, h]) => (<li key={h}><a href={h} className="text-sm text-[var(--muted)] transition hover:text-white">{l}</a></li>))}
        </ul>
        <button className="grid h-12 w-12 place-items-center md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-[var(--line)] bg-[var(--bg2)] px-5 pb-4 md:hidden">
          {profile.nav.map(([l, h]) => (<li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-[var(--muted)] hover:text-white">{l}</a></li>))}
        </ul>
      )}
    </header>
  );
}
