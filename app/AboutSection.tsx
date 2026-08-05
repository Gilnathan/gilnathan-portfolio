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
      "Desenvolvimento de sistemas web, plataformas SaaS, APIs, sites institucionais e landing pages. Atuação em arquitetura, implementação, testes, deploy e manutenção, além de colaboração em UI e identidade visual.",
    badge: "ATUAL",
    badgeType: "current",
    stack: ["C#", ".NET", "React", "Next.js", "TypeScript", "JavaScript", "SQL Server", "REST API", "UI Design", "Git", "GitHub"]
  },
  {
    period: "Fev 2021 — Atual",
    role: "Founder | Desenvolvedor Full Stack",
    company: "GRcode.dev",
    location: "Remoto",
    description:
      "Desenvolvimento de soluções web sob medida para empresas e profissionais, atuando desde o levantamento de requisitos até a publicação e manutenção das aplicações.",
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
      "Gestão operacional da loja, coordenação da equipe, controle de estoque, atendimento ao cliente e suporte técnico em informática.",
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
          <h2 className="aboutTitle">Construo software que resolve problemas reais.</h2>
          <div className="aboutText">
            <p>
              Gosto de compreender o problema antes de escrever código. Busco criar soluções organizadas, fáceis de
              evoluir e alinhadas às necessidades de usuários e empresas.
            </p>
            <p>
              Meu objetivo é transformar requisitos em produtos digitais funcionais, claros e sustentáveis, combinando
              qualidade técnica, experiência do usuário e visão de produto.
            </p>
          </div>
        </motion.div>

        <ExperienceTimeline shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}

export function EducationAndCertifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <motion.section
        className="educationSection"
        id="formacao"
        aria-labelledby="education-title"
        initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
        whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        variants={shouldReduceMotion ? undefined : motionProps}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="educationArea">
            <h3 className="sectionKicker" id="education-title">
              FORMAÇÃO
            </h3>
            <article className="educationCard">
              <span className="educationIcon" aria-hidden="true">
                <GraduationCap size={20} strokeWidth={1.8} />
              </span>
              <div className="educationContent">
                <div className="educationHeader">
                  <h3>Análise e Desenvolvimento de Sistemas</h3>
                  <p className="educationMeta">
                    <span>Estácio</span>
                    <span aria-hidden="true">·</span>
                    <span>2023 — Em andamento</span>
                  </p>
                </div>
                <p className="educationDescription">
                  Graduação focada em desenvolvimento de software, arquitetura de sistemas, banco de dados e engenharia de
                  software.
                </p>
                <ul className="educationTags" aria-label="Disciplinas em destaque">
                  {educationHighlights.map((item) => (
                    <li className="educationTag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="certificationsSection"
        id="certificacoes"
        aria-labelledby="certifications-title"
        initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
        whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        variants={shouldReduceMotion ? undefined : motionProps}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <section className="certificationsArea" aria-labelledby="certifications-title">
            <h3 className="sectionKicker" id="certifications-title">
              CERTIFICAÇÕES
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
                    <h4 className="certificationTitle">{certification.title}</h4>
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
        </div>
      </motion.section>
    </>
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
