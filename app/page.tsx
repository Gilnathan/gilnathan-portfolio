import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
  ArrowUpRight,
  GitBranch,
  Globe,
  Layers,
  LayoutDashboard,
  Link2,
  Mail,
  Monitor,
  Server,
} from "lucide-react";
import { AboutSection, EducationAndCertifications } from "./AboutSection";
import { PortfolioAnimations } from "./PortfolioAnimations";
import { ProjectCaseStudies } from "./ProjectCaseStudies";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Git", "GitHub", "Swagger"];

const coreStack = ["C#", ".NET Core", "React", "Next.js", "SQL", "Clean Architecture", "DDD", "EF Core"];

const developmentOptions = [
  {
    title: "Sistema Web",
    text: "Desenvolvimento de aplicações completas para empresas.",
    icon: Monitor
  },
  {
    title: "Landing Pages",
    text: "Páginas modernas focadas em conversão.",
    icon: Globe
  },
  {
    title: "APIs REST",
    text: "Integrações seguras utilizando .NET.",
    icon: Server
  },
  {
    title: "SaaS",
    text: "Plataformas escaláveis para múltiplos usuários.",
    icon: Layers
  },
  {
    title: "Dashboards",
    text: "Painéis administrativos modernos para gestão de dados.",
    icon: LayoutDashboard
  }
];

function getProfileSrc() {
  const imageDir = path.join(process.cwd(), "public", "images");
  const webpPath = path.join(imageDir, "perfil.webp");

  if (fs.existsSync(webpPath)) {
    return "/images/perfil.webp";
  }

  return "/images/perfil.png";
}

export default function Home() {
  const profileSrc = getProfileSrc();
  const currentYear = new Date().getFullYear();

  return (
    <main>
      <PortfolioAnimations />
      <section className="hero" id="home">
        <nav className="nav" aria-label="Navegação principal">
          <div className="container navContainer">
            <a className="brand" href="#home">Gilnathan Reis</a>
            <div className="navLinks">
              <a href="#projetos">Projetos</a>
              <a href="#sobre">Sobre</a>
              <a href="#formacao">Formação</a>
              <a href="#contato">Contato</a>
            </div>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Olá<span>.</span></p>
            <h1>Eu sou Gilnathan Reis</h1>
            <h2>Full Stack Developer</h2>
            <p className="heroSummary">
              Desenvolvo aplicações web, plataformas SaaS e APIs com foco em desempenho, escalabilidade e experiência do usuário.
            </p>
            <div className="heroActions">
              <a className="button primary" href="https://github.com/Gilnathan" target="_blank" rel="noreferrer">
                <GitBranch size={18} aria-hidden="true" /> GitHub
              </a>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/gilnathan-reis-50ba67238/"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 size={18} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="portraitStage" aria-label="Foto oficial de Gilnathan Reis">
            <div className="halo haloOne" />
            <div className="halo haloTwo" />
            <div className="lineArt lineLeft" />
            <div className="lineArt lineRight" />
            <Image
              className="profileImage"
              src={profileSrc}
              alt="Foto oficial de Gilnathan Reis"
              fill
              priority
              quality={100}
              sizes="(max-width: 720px) 86vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="skillBar" aria-label="Tecnologias">
        <div className="skillTrack">
          {[...coreStack, ...skills, ...coreStack, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <ProjectCaseStudies />

      <AboutSection />

      <EducationAndCertifications />

      <section className="section buildOptions" aria-labelledby="build-options-title">
        <p className="sectionKicker">Soluções</p>
        <h2 id="build-options-title">O que posso desenvolver</h2>
        <div className="projectGrid">
          {developmentOptions.map(({ title, text, icon: Icon }) => (
            <article className="projectCard buildCard" key={title}>
              <div>
                <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="container contactContainer">
          <div className="ctaCopy">
            <p className="sectionKicker">Contato</p>
            <h2>Vamos conversar.</h2>
            <p>
              Gosto de transformar ideias em produtos digitais claros, funcionais e bem construídos. Estou sempre aberto
              a conhecer novos desafios, trocar experiências e colaborar com pessoas e equipes que valorizam tecnologia,
              qualidade e boas soluções.
            </p>
            <a className="button primary" href="mailto:gilthanreis@gmail.com">
              Entrar em contato
            </a>
          </div>

          <div className="contactAside">
            <p>Itabela, Bahia, Brasil</p>
            <div className="contactLinks">
              <a href="mailto:gilthanreis@gmail.com" aria-label="Enviar e-mail"><Mail size={16} aria-hidden="true" /> Email <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://github.com/Gilnathan" target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil no GitHub"><GitBranch size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/gilnathan-reis-50ba67238/" target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil no LinkedIn"><Link2 size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://wa.me/5573991073850" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .5C6.6.5 1.9 4.8 1.3 10.1c-.2 1.8.1 3.6.9 5.1L.5 23.5l8.5-2.2c1.4.4 2.8.6 4.3.6 5.4 0 10.2-4.3 10.6-9.8.2-1.9-.1-3.7-1.3-5.1z" fill="currentColor" opacity="0.08"/>
                  <path d="M17.5 14.1c-.3-.2-1.7-.8-2-.9-.3-.1-.6-.2-.9.2-.3.3-1 0-1.6-.7-.6-.7-1.1-1.5-.9-1.9.2-.3 0-.6-.1-.9-.1-.2-1-2.4-1.4-3.2-.4-.8-.8-.7-1-.7-.2 0-.4 0-.6 0-.2 0-.5.2-.8.6-.3.4-1.1 1.3-1.1 3.1 0 1.9 1.1 3.7 1.2 3.9.1.2 2.1 3.2 5.2 4.4 3.1 1.2 3.1.8 3.7.8.6 0 2.1-.8 2.4-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.6-.5z" fill="currentColor"/>
                </svg>
                WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <p>Disponível para colaboração remota.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footerContainer">
          <p>© {currentYear} Gilnathan Reis.</p>
          <p>gilthanreis@gmail.com · WhatsApp</p>
          <p>Desenvolvido com Next.js, React e TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}
