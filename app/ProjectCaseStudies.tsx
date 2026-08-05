"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, GitBranch, Lock } from "lucide-react";
import { projects, type Project } from "../src/data/projects";

const cardMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function ProjectCaseStudies() {
  return (
    <section className="section projects featuredProjects" id="projetos">
      <p className="sectionKicker">Projetos</p>
      <h2>Projetos em destaque</h2>
      <p className="projectsIntro">
        Alguns projetos selecionados, desenvolvidos com foco em desempenho, experiência do usuário e qualidade de código.
      </p>

      <div className="featuredProjectGrid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="projectCard"
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      viewport={{ once: true, amount: 0.22 }}
      variants={shouldReduceMotion ? undefined : cardMotion}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="projectImage" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir projeto ${project.title}`}>
          <Image
            className="featuredImage"
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
          />
      </a>

      <div className="projectContent">
        <span className="projectNumber">{project.number}</span>
        <h3 className="projectTitle">
          <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir projeto ${project.title}`}>
            {project.title}
          </a>
        </h3>
        <p className="projectDescription">{project.description}</p>
        <p className="projectTechnologies">{project.technologies.join(" · ")}</p>
      </div>

      <div className="projectFooter">
        <div className="projectActions" aria-label={`Links do projeto ${project.title}`}>
          {project.links.map((link) => (
            link.href ? (
              <a
                key={link.label}
                className="projectAction"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} do projeto ${project.title}`}
                title={`${link.label} do projeto ${project.title}`}
              >
                <ProjectLinkIcon type={link.type} />
              </a>
            ) : (
              <span key={link.label} className="projectAction privateProjectLink" aria-label={`${link.label} de ${project.title}`} title={link.label}>
                <ProjectLinkIcon type={link.type} />
              </span>
            )
          ))}
        </div>
        <a
          className="projectArrow"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir projeto ${project.title}`}
          title={`Abrir projeto ${project.title}`}
        >
          <ArrowUpRight size={22} strokeWidth={1.8} />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectLinkIcon({ type }: { type: Project["links"][number]["type"] }) {
  if (type === "github") {
    return <GitBranch size={18} strokeWidth={1.8} aria-hidden="true" />;
  }

  if (type === "private") {
    return <Lock size={18} strokeWidth={1.8} aria-hidden="true" />;
  }

  return <ExternalLink size={18} strokeWidth={1.8} aria-hidden="true" />;
}
