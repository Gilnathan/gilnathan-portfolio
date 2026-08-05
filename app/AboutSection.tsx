"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Braces, Code, Database, Server, Workflow } from "lucide-react";

const specialties = [
  { label: "React", icon: Code },
  { label: "Next.js", icon: Workflow },
  { label: "C#", icon: Braces },
  { label: ".NET", icon: Server },
  { label: "SQL Server", icon: Database },
  { label: "APIs REST", icon: Server }
];

const experiences = [
  {
    period: "Jan 2022 — Atual",
    role: "Desenvolvedor Full Stack",
    company: "Agência 33",
    location: "Itabela • Bahia • Presencial",
    description:
      "Atuo como Desenvolvedor Full Stack na Agência 33, desenvolvendo soluções digitais para empresas de diversos segmentos, incluindo sistemas web, plataformas SaaS, APIs, sites institucionais e landing pages.\n\nParticipo de todas as etapas do ciclo de desenvolvimento, desde o levantamento de requisitos e definição da arquitetura da aplicação até a implementação, testes, deploy e evolução contínua dos projetos. Utilizo tecnologias como C#, .NET, React, Next.js e SQL Server, sempre priorizando performance, escalabilidade, segurança e boas práticas de desenvolvimento.\n\nAlém da atuação como desenvolvedor, também colaboro na criação de interfaces (UI), identidade visual e materiais para campanhas digitais, contribuindo para que cada projeto entregue uma experiência moderna, intuitiva e alinhada aos objetivos de negócio dos clientes.",
    badge: "ATUAL",
    badgeType: "current",
    stack: ["C#", ".NET", "React", "Next.js", "TypeScript", "JavaScript", "SQL Server", "REST API", "UI Design", "UX", "Figma", "Git", "GitHub"]
  },
  {
    period: "Fev 2021 — Atual",
    role: "Founder | Desenvolvedor Full Stack",
    company: "GRcode.dev",
    location: "Remoto",
    description:
      "Fundador da GRcode.dev, empresa focada no desenvolvimento de sites institucionais, landing pages, sistemas web e plataformas SaaS.\n\nAtuo em todas as etapas do projeto, desde o levantamento de requisitos, arquitetura da aplicação, desenvolvimento Front-End e Back-End até a implantação e manutenção dos sistemas em produção.",
    badge: "FREELANCER",
    badgeType: "freelancer",
    stack: ["C#", ".NET", "React", "Next.js", "SQL Server", "APIs REST", "Docker", "Git"]
  },
  {
    period: "Jan 2021 — Dez 2021",
    role: "Gerente Geral",
    company: "Off Store",
    location: "Itabela • Bahia",
    description:
      "Responsável pela gestão operacional da loja, coordenação da equipe, controle de estoque, atendimento ao cliente e organização dos processos internos.\n\nTambém auxiliava nas demandas técnicas relacionadas à informática e tecnologia, contribuindo para melhoria dos processos internos.",
    stack: ["Gestão", "Liderança", "Organização", "Atendimento", "Suporte Técnico"]
  }
];

const motionProps = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about" id="sobre">
      <div className="aboutContainer">
        <motion.div
          className="aboutIntro"
          initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
          whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
          viewport={{ once: true, amount: 0.22 }}
          variants={shouldReduceMotion ? undefined : motionProps}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="sectionKicker">Sobre mim</p>
          <h2 className="aboutTitle">Desenvolvo software pensando no produto, não apenas no código.</h2>
          <div className="aboutText">
            <p>
              Sou Desenvolvedor Full Stack e crio aplicações que resolvem problemas reais, atuando desde a arquitetura
              do back-end até a construção de interfaces modernas.
            </p>
            <p>
              Tenho experiência com C#, .NET, React, Next.js, SQL Server e APIs REST, sempre buscando unir qualidade
              técnica, desempenho e valor para o negócio.
            </p>
          </div>

          <div className="specialties">
            <p className="sectionKicker">Especialidades</p>
            <div className="specialtyGrid">
              {specialties.map(({ label, icon: Icon }) => (
                <div className="specialtyItem" key={label}>
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <ExperienceTimeline shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}

function ExperienceTimeline({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <motion.div
      className="experienceTimeline"
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      variants={shouldReduceMotion ? undefined : motionProps}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="sectionKicker">Trajetória Profissional</p>
      <div className="experienceList">
        <TimelineLine />
        {experiences.map((experience) => (
          <ExperienceItem key={`${experience.role}-${experience.company}`} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

function ExperienceItem({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <article className="experienceItem">
      <div className="experienceDot" aria-hidden="true" />
      <div className="experienceContent">
        <div className="experienceMeta">
          <span className="experiencePeriod">{experience.period}</span>
          {experience.badge ? <ExperienceBadge label={experience.badge} type={experience.badgeType} /> : null}
        </div>
        <h3>{experience.role}</h3>
        <p className="experienceCompany">{experience.company}</p>
        <p className="experienceLocation">{experience.location}</p>
        <div className="experienceDescription">
          {experience.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="experienceStack" aria-label={`Tecnologias e competências de ${experience.role}`}>
          {experience.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ExperienceBadge({ label, type }: { label: string; type?: string }) {
  return <span className={`experienceBadge ${type === "freelancer" ? "freelancer" : "current"}`}>{label}</span>;
}

function TimelineLine() {
  return <div className="timelineLine" aria-hidden="true" />;
}
