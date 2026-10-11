// Single source of truth. Every value below comes from Saniya's LinkedIn profile (screenshots, Oct 2026).
export type Project = { title: string; period: string; description: string; tech: string[]; image?: string; fit?: "cover" | "contain"; demo?: string; source?: string };
export type Cert = { title: string; issuer: string; issued: string; url?: string };
export const profile = {
  name: "Saniya Mhatre",
  title: "Java Developer",
  roles: ["Java Developer", "Software Developer", "Data Analyst"],
  headline: "B.Sc. IT Graduate · Seeking entry-level software developer roles",
  location: "Mumbai, Maharashtra, India",
  email: "saniyamhatre85@gmail.com",
  linkedin: "https://www.linkedin.com/in/saniya-mhatre-39394535a/",
  github:"https://github.com/saniyamhatre15" as string, // TODO: add GitHub URL when available (hidden while empty)
  resume: "" as string, // TODO: put resume.pdf in /public and set "/resume.pdf" (button hidden while empty)
  portrait: "/portrait.jpg",
  intro: "B.Sc. Information Technology graduate with a strong foundation in software development and data analytics, looking for an entry-level role where I can contribute, learn from experienced teams, and grow.",
  about: [
    "I'm a B.Sc. Information Technology graduate (CGPA 9.52) with a strong foundation in software development and data analytics.",
    "I enjoy building efficient, real-world software solutions, full-stack web development, and turning raw data into clear insights and dashboards. I like learning new technologies and keeping up with industry trends.",
    "I'm looking for an entry-level role as a Java Developer, Software Developer, or Data Analyst.",
  ],
  interests: ["Real-world software solutions", "Data insights & dashboards", "Full-stack web development", "Learning new technologies"],
  skills: [
    { group: "Programming", items: ["Java", "Python", "JavaScript"] },
    { group: "Web", items: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
    { group: "Databases", items: ["SQL", "MySQL", "MongoDB"] },
    { group: "Data Analytics", items: ["Tableau", "Microsoft Power BI", "Excel"] },
    { group: "Core Concepts", items: ["Object-Oriented Programming", "Data Structures", "Problem Solving"] },
  ],
  education: [{ degree: "Bachelor of Science, Information Technology", school: "Janardan Bhagat Shikshan Sansthas Bhagubai Changu Thakur College of Law, New Panvel, Raigad", dates: "Jun 2020 – Apr 2026", note: "CGPA 9.52" }],
  projects: [
    { title: "LuxeGlow – Beauty E-Commerce App", period: "Jan 2026 – Apr 2026", description: "Interactive, responsive beauty e-commerce app with product listings by category, add-to-cart, a dummy checkout, order history, and an admin panel for product and order management.", tech: ["React.js", "JavaScript", "HTML5", "Expo", "Tailwind CSS"], image: "/luxeglow.jpg" },
    { title: "Red Stream – Blood Donation Website", period: "Jun 2026 – Aug 2026", description: "Responsive full-stack website that makes blood donation simple and accessible: raises awareness, explains eligibility and benefits, and provides a platform for donation-related information and interaction.", tech: ["HTML", "CSS", "JavaScript", "PHP"], image: "/red-stream.jpg", fit: "contain" },
  ] as Project[],
  certifications: [
    { title: "Data Analytics Job Simulation", issuer: "Deloitte", issued: "Jun 2026" },
    { title: "The Complete MySQL Bootcamp: Go from Beginner to Expert", issuer: "Udemy", issued: "Oct 2026", url: "https://ude.my/UC-f0298682-9abb-4b75-98e6-656804e1c06e" },
    { title: "The Complete JavaScript Course: From Zero to Expert", issuer: "Udemy", issued: "Oct 2026", url: "https://ude.my/UC-012b290d-d78e-4fe8-b0e2-667f1959262d" },
    { title: "Hands On React JS From Beginner to Expert", issuer: "Udemy", issued: "Oct 2026", url: "https://ude.my/UC-eef4ec8a-a3a3-487c-bc78-7576947fb570" },
  ] as Cert[],
  nav: [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Education", "#education"], ["Projects", "#projects"], ["Contact", "#contact"]] as [string, string][],
};
