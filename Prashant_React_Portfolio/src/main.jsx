import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Moon,
  Phone,
  Server,
  Sun,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";
const projects = [
  {
    id: "claims",
    n: "01",
    title: "Claims Processing",
    type: "Healthcare • MERN",
    team: "5",
    role: "Full Stack Developer",
    summary:
      "A healthcare pharmacy claims-processing application developed with the MERN ecosystem, covering frontend, backend APIs, authentication and cloud deployment.",
    details: [
      "Developed application functionality using Node.js and Express.js.",
      "Built frontend functionality with React.js and Material UI.",
      "Used Redux and Redux Thunk for application state management.",
      "Worked with MongoDB for application data.",
      "Developed APIs required by the claims-processing application.",
      "Implemented JWT-based authentication.",
      "Deployed the React frontend using AWS S3 and CloudFront.",
      "Used CI/CD with the Serverless Framework for deployment.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material UI",
      "Redux",
      "Redux Thunk",
      "JWT",
      "AWS S3",
      "CloudFront",
      "Serverless",
    ],
  },
  {
    id: "library",
    n: "02",
    title: "Library Management System",
    type: "Library • MERN",
    team: "2",
    role: "Full Stack Developer",
    summary:
      "A library management application focused on books, users, search, borrowing, tracking and secure access.",
    details: [
      "Built features for book management and library operations.",
      "Implemented user registration and secure authentication.",
      "Developed book search functionality.",
      "Implemented borrowing and book-tracking functionality.",
      "Developed REST APIs and backend middleware.",
      "Added input validation, error handling and logging.",
      "Created reusable React components for the frontend.",
      "Optimized MongoDB schemas for efficient data storage and retrieval.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Middleware",
    ],
  },
  {
    id: "social",
    n: "03",
    title: "Social Media Web Application",
    type: "AI & Social Impact • MERN",
    team: "3",
    role: "Full Stack Developer",
    summary:
      "A client-focused social media web application centered on AI, social impact, consulting, workshops, research and ethical AI engineering.",
    details: [
      "Developed Node.js and Express.js APIs for the application.",
      "Built frontend functionality using React.js.",
      "Used Redux for frontend state management.",
      "Worked as a Full Stack Developer within a three-person team.",
      "Implemented application functionality around the client’s AI and social-impact focused requirements.",
    ],
    stack: ["React.js", "Redux", "Node.js", "Express.js", "MERN"],
  },
];
const groups = [
  [
    "Frontend",
    Code2,
    [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Redux",
      "Context API",
      "Responsive Design",
    ],
  ],
  [
    "Backend",
    Server,
    [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Authorization",
    ],
  ],
  ["Database", Database, ["MongoDB", "MongoDB Compass"]],
  [
    "Tools & Cloud",
    Layers3,
    [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "VS Code",
      "Jira",
      "Slack",
      "Copilot",
      "Vercel",
      "AWS",
      "S3",
      "CloudFront",
      "Docker",
    ],
  ],
];
function App() {
  const [dark, setDark] = useState(true),
    [menu, setMenu] = useState(false),
    [active, setActive] = useState(null),
    [top, setTop] = useState(false);
  useEffect(() => {
    const f = () => setTop(scrollY > 600);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };
  return (
    <div className={dark ? "app dark" : "app light"}>
      <nav>
        <div className="nav">
          <button className="brand" onClick={() => go("home")}>
            Prashant<span>.</span>
          </button>
          <div className={"links " + (menu ? "open" : "")}>
            {[
              "about",
              "skills",
              "experience",
              "projects",
              "education",
              "contact",
            ].map((x) => (
              <button key={x} onClick={() => go(x)}>
                {x[0].toUpperCase() + x.slice(1)}
              </button>
            ))}
          </div>
          <div className="actions">
            <button onClick={() => setDark(!dark)}>
              {dark ? <Sun /> : <Moon />}
            </button>
            <button className="men" onClick={() => setMenu(!menu)}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      <section className="hero wrap" id="home">
        <div className="heroText">
          <small>● AVAILABLE FOR OPPORTUNITIES</small>
          <h1>
            Building <em>scalable</em> web experiences.
          </h1>
          <p>
            I'm <b>Prashant Sathawane</b>, a Full Stack Developer focused on
            MERN applications, REST APIs, authentication and cloud-hosted
            solutions.
          </p>
          <div className="buttons">
            <button className="primary" onClick={() => go("projects")}>
              View Projects <ArrowDown />
            </button>
            <a href="mailto:prashantsathawane999@gmail.com">
              Let's Connect <Mail />
            </a>
          </div>
          <div className="stats">
            <div>
              <b>3+</b>
              <span>Years Experience</span>
            </div>
            <div>
              <b>3</b>
              <span>Featured Projects</span>
            </div>
            <div>
              <b>MERN</b>
              <span>Core Stack</span>
            </div>
          </div>
        </div>
        <div className="heroCard">
          <div className="avatar">PS</div>
          <div className="code">
            <div>● ● ●</div>
            <pre>{`const developer = {\n  name: "Prashant",\n  role: "Full Stack Developer",\n  stack: ["React", "Node", "MongoDB"],\n  cloud: ["AWS", "S3", "CloudFront"]\n};`}</pre>
          </div>
          <div className="float">
            <Zap /> MERN + AWS
          </div>
        </div>
      </section>
      <section className="wrap" id="about">
        <Head n="01 / ABOUT" t="More than just code." />
        <div className="about">
          <div>
            <p className="large">
              MERN Stack Developer with <b>3+ years of experience</b> across the
              software development lifecycle.
            </p>
            <p>
              My experience includes solution design, development, testing,
              deployment, support and maintenance. I enjoy turning requirements
              into clean, responsive interfaces and reliable backend services.
            </p>
            <p>
              I have worked with React, Node.js, Express.js, MongoDB, REST APIs,
              JWT authentication, Redux, AWS and CI/CD workflows in Agile
              environments.
            </p>
          </div>
          <div>
            {[
              "Clean, reusable components",
              "Secure API development",
              "Responsive user experiences",
              "Cloud-aware deployments",
            ].map((x) => (
              <div className="principle" key={x}>
                <CheckCircle2 /> {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="full alt" id="skills">
        <div className="wrap">
          <Head n="02 / SKILLS" t="My technical toolkit." />
          <div className="skillGrid">
            {groups.map(([t, I, items]) => (
              <div className="skill" key={t}>
                <I />
                <h3>{t}</h3>
                <div className="tags">
                  {items.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" id="experience">
        <Head n="03 / EXPERIENCE" t="Professional journey." />
        <div className="experience">
          <div className="date">DEC 2022 — DEC 2025</div>
          <div>
            <h3>
              <BriefcaseBusiness /> MERN Stack Developer
            </h3>
            <p className="company">
              ICEICO Technologies Pvt. Ltd. · Nagpur, Maharashtra
            </p>
            <ul>
              <li>
                Worked across the complete software development lifecycle from
                solution design through support and maintenance.
              </li>
              <li>
                Developed RESTful APIs with Node.js and Express.js and
                implemented JWT authentication and authorization.
              </li>
              <li>
                Built responsive React applications using Redux and reusable
                components.
              </li>
              <li>
                Supported CI/CD deployments and cloud-hosted applications using
                AWS S3 and CloudFront.
              </li>
              <li>
                Collaborated with cross-functional teams in Agile development
                environments.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="full alt" id="projects">
        <div className="wrap">
          <Head n="04 / PROJECTS" t="Work I'm proud of." />
          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.id}>
                <div className="pTop">
                  PROJECT {p.n}
                  <ArrowUpRight />
                </div>
                <h3>{p.title}</h3>
                <small>{p.type}</small>
                <p>{p.summary}</p>
                <div className="meta">
                  Team: {p.team}
                  <span>{p.role}</span>
                </div>
                <div className="tags">
                  {p.stack.slice(0, 5).map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
                <button onClick={() => setActive(p)}>
                  Explore project <ChevronRight />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap" id="education">
        <Head n="05 / EDUCATION" t="Education & certification." />
        <div className="edu">
          {[
            ["2021", "B.Sc.", "Institute of Hotel Management, Kolkata"],
            ["CERTIFICATION", "Full Stack Web Development", "Masai School"],
            ["2018", "HSC", "S.M. Patel Jr College, Gondia"],
            ["2016", "SSC", "St Xavier’s High School, Gondia"],
          ].map((x) => (
            <div key={x[0]}>
              <GraduationCap />
              <small>{x[0]}</small>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap contact" id="contact">
        <div>
          <small>LET'S BUILD SOMETHING</small>
          <h2>Have a project or opportunity?</h2>
          <p>
            I'm open to opportunities where I can contribute to full-stack web
            development and scalable application delivery.
          </p>
          <div className="buttons">
            <a className="primary" href="mailto:prashantsathawane999@gmail.com">
              <Mail /> Email Me
            </a>
            <a href="tel:+919767599972">
              <Phone /> +91 9767599972
            </a>
          </div>
        </div>
      </section>
      <footer>
        © 2026 Prashant Sathawane{" "}
        <span>Full Stack Developer · MERN Stack Developer</span>
      </footer>
      {top && (
        <button className="back" onClick={() => go("home")}>
          <ArrowUp />
        </button>
      )}
      {active && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setActive(null)}>
              <X />
            </button>
            <small>PROJECT {active.n}</small>
            <h2>{active.title}</h2>
            <p className="accent">
              {active.type} · Team of {active.team} · {active.role}
            </p>
            <p>{active.summary}</p>
            <h4>My responsibilities</h4>
            <ul>
              {active.details.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h4>Technology stack</h4>
            <div className="tags">
              {active.stack.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function Head({ n, t }) {
  return (
    <div className="head">
      <small>{n}</small>
      <h2>{t}</h2>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
