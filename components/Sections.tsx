import Image from "next/image";
import { GraduationCap, Award, ExternalLink, FolderGit2, Mail, Linkedin, MapPin } from "lucide-react";
import { profile as p } from "@/config/profile";
const Head = ({ eyebrow, title }: { eyebrow: string; title: string }) => (<div className="mb-10"><p className="eyebrow">{eyebrow}</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2></div>);

export function About() {
  return (
    <section id="about" className="section">
      <Head eyebrow="About" title="A little about me" />
      <div className="grid gap-8 md:grid-cols-5">
        <div className="space-y-4 text-[var(--muted)] md:col-span-3">{p.about.map((t) => <p key={t}>{t}</p>)}</div>
        <div className="card p-6 md:col-span-2"><h3 className="mb-3 font-semibold">Interests</h3><div className="flex flex-wrap gap-2">{p.interests.map((i) => <span key={i} className="chip">{i}</span>)}</div></div>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section">
      <Head eyebrow="Skills" title="What I work with" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {p.skills.map((g) => (<div key={g.group} className="card p-6"><h3 className="mb-4 font-semibold">{g.group}</h3><div className="flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className="chip">{i}</span>)}</div></div>))}
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section id="education" className="section">
      <Head eyebrow="Education & Certifications" title="Learning journey" />
      {p.education.map((e) => (
        <div key={e.degree} className="card flex gap-4 p-6"><GraduationCap className="mt-1 shrink-0 text-[var(--lav)]" />
          <div><h3 className="font-semibold">{e.degree}</h3><p className="text-sm text-[var(--muted)]">{e.school}</p><p className="mt-2 text-sm text-[var(--lav)]">{e.dates} · {e.note}</p></div></div>
      ))}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {p.certifications.map((c) => (
          <div key={c.title} className="card flex gap-4 p-6"><Award className="mt-1 shrink-0 text-[var(--lav)]" />
            <div><h3 className="font-semibold">{c.title}</h3><p className="text-sm text-[var(--muted)]">{c.issuer} · Issued {c.issued}</p>
              {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--lav)] hover:underline">Show credential <ExternalLink size={14} /></a>}</div></div>
        ))}
      </div>
    </section>
  );
}
export function Projects() {
  return (
    <section id="projects" className="section">
      <Head eyebrow="Projects" title="Selected work" />
      <div className="grid gap-5 md:grid-cols-2">
        {p.projects.map((pr) => (
          <article key={pr.title} className="card flex flex-col p-6">
            {pr.image ? <Image src={pr.image} alt={`${pr.title} screenshot`} width={720} height={1040} className={`mb-5 h-56 w-full rounded-xl ${pr.fit === "contain" ? "bg-[#f6f4fb] object-contain" : "object-cover object-top"}`} /> : <div className="mb-5 grid h-40 place-items-center rounded-xl bg-[linear-gradient(135deg,rgba(100,8,191,.45),rgba(177,22,78,.35))]"><FolderGit2 size={40} className="text-white/80" aria-hidden /></div>}
            <p className="text-xs text-[var(--muted)]">{pr.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{pr.title}</h3>
            <p className="mt-3 flex-1 text-sm text-[var(--muted)]">{pr.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{pr.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            {(pr.demo || pr.source) && <div className="mt-4 flex gap-4 text-sm">{pr.demo && <a href={pr.demo} className="text-[var(--lav)] hover:underline">Live demo</a>}{pr.source && <a href={pr.source} className="text-[var(--lav)] hover:underline">Source</a>}</div>}
          </article>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="card p-8 text-center sm:p-14">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Let&apos;s <span className="grad">connect</span></h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">I&apos;m open to entry-level Java Developer, Software Developer, and Data Analyst roles. Send me a message anytime.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${p.email}`} className="btn btn-primary"><Mail size={18} /> {p.email}</a>
          <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Linkedin size={18} /> LinkedIn</a>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--muted)]"><MapPin size={14} /> {p.location}</p>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-8 text-center text-sm text-[var(--muted)]">
      <nav aria-label="Footer" className="mb-3 flex flex-wrap justify-center gap-5">{p.nav.map(([l, h]) => <a key={h} href={h} className="hover:text-white">{l}</a>)}</nav>
      © {new Date().getFullYear()} {p.name}. All rights reserved.
    </footer>
  );
}
