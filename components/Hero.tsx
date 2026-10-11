import Image from "next/image";
import { Linkedin, Github, Mail, ArrowRight, Download } from "lucide-react";
import { profile as p } from "@/config/profile";
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 md:grid-cols-2">
      <div className="order-2 md:order-1">
        <p className="eyebrow reveal">Hello, I&apos;m</p>
        <h1 className="reveal mt-3 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl" style={{ animationDelay: ".1s" }}>{p.name}</h1>
        <p className="grad reveal mt-4 font-display text-xl font-medium sm:text-2xl" style={{ animationDelay: ".2s" }}>{p.roles.join(" · ")}</p>
        <p className="reveal mt-5 max-w-lg text-[var(--muted)]" style={{ animationDelay: ".3s" }}>{p.intro}</p>
        <div className="reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".4s" }}>
          <a href="#projects" className="btn btn-primary">Explore My Work <ArrowRight size={18} /></a>
          {p.resume ? <a href={p.resume} download className="btn btn-ghost"><Download size={18} /> View Resume</a> : <a href="#contact" className="btn btn-ghost">Contact Me</a>}
        </div>
        <div className="reveal mt-8 flex gap-3" style={{ animationDelay: ".5s" }}>
          <a aria-label="LinkedIn" href={p.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3"><Linkedin size={20} /></a>
          {p.github && <a aria-label="GitHub" href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-3"><Github size={20} /></a>}
          <a aria-label="Email" href={`mailto:${p.email}`} className="btn btn-ghost !px-3"><Mail size={20} /></a>
        </div>
      </div>
      <div className="order-1 flex justify-center md:order-2">
        <div className="float relative">
          <Image src={p.portrait} alt={`Portrait of ${p.name}`} width={440} height={434} priority className="portrait h-64 w-64 object-cover sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" />
          <span aria-hidden className="absolute -right-2 top-6 rounded-full border border-[var(--line)] bg-[var(--bg2)] px-3 py-1 text-xs text-[var(--lav)]">Java</span>
          <span aria-hidden className="absolute -left-2 bottom-10 rounded-full border border-[var(--line)] bg-[var(--bg2)] px-3 py-1 text-xs text-[var(--lav)]">React.js</span>
        </div>
      </div>
    </section>
  );
}
