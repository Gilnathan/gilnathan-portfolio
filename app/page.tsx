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
  Phone,
  Server,
} from "lucide-react";
import { AboutSection } from "./AboutSection";
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
              <a href="#sobre">Sobre</a>
              <a href="#projetos">Projetos</a>
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
              Desenvolvedor Full Stack especializado em construir sistemas escaláveis utilizando C#, .NET, React e Next.js.
              Desenvolvo aplicações modernas com foco em arquitetura limpa, desempenho e excelente experiência do usuário.
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

      <AboutSection />

      <ProjectCaseStudies />

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
              <a href="tel:+5573991073850" aria-label="Ligar para Gilnathan Reis"><Phone size={16} aria-hidden="true" /> Telefone <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://github.com/Gilnathan" target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil no GitHub"><GitBranch size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/gilnathan-reis-50ba67238/" target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil no LinkedIn"><Link2 size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <p>Disponível para colaboração remota.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footerContainer">
          <p>© {currentYear} Gilnathan Reis.</p>
          <p>gilthanreis@gmail.com · (73) 9 9107-3850</p>
          <p>Desenvolvido com Next.js, React e TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}
