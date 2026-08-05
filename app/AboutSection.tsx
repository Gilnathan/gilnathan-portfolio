"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
import { certifications } from "../src/data/certifications";

const educationHighlights = ["Desenvolvimento de Software", "Banco de Dados", "Engenharia de Software"];

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

          <EducationAndCertifications shouldReduceMotion={shouldReduceMotion} />
        </motion.div>

        <ExperienceTimeline shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}

function EducationAndCertifications({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <motion.section
      className="educationArea"
      aria-labelledby="education-title"
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      variants={shouldReduceMotion ? undefined : motionProps}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <h3 className="sectionKicker" id="education-title">
          Formação
        </h3>
        <article className="educationCard">
          <div className="educationHeader">
            <span className="educationIcon" aria-hidden="true">
              <GraduationCap size={20} strokeWidth={1.8} />
            </span>
            <div className="educationHeading">
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>Estácio</p>
              <span>2023 — Em andamento</span>
            </div>
          </div>
          <p className="educationDescription">
            Graduação focada em desenvolvimento de software, arquitetura de sistemas, banco de dados, engenharia de
            software e desenvolvimento de aplicações web.
          </p>
          <ul className="educationHighlights" aria-label="Disciplinas em destaque">
            {educationHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <section className="certificationsArea" aria-labelledby="certifications-title">
        <h3 className="sectionKicker" id="certifications-title">
          Certificações
        </h3>
        <motion.ul className="certificationsGrid" layout={shouldReduceMotion ? false : true}>
          {certifications.map((certification) => (
            <motion.li
              className="certificationCard"
              key={certification.id}
              layout={shouldReduceMotion ? false : true}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: "easeOut" }}
            >
              <article className="certificationContent">
                <h4>{certification.title}</h4>
                <p>
                  <span className="certificationDate">{certification.date}</span>
                  <span aria-hidden="true"> · </span>
                  <span className="certificationInstitution">{certification.institution}</span>
                </p>
              </article>
              <a
                className="certificateLink"
                href={certification.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir certificado de ${certification.title}`}
                title={`Abrir certificado de ${certification.title}`}
              >
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </motion.section>
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
