export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  href: string;
  links: {
    type: "github" | "deploy" | "private";
    label: string;
    href?: string;
  }[];
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "masteros",
    number: "01",
    title: "MasterOS — Plataforma SaaS para gestão de assistências técnicas",
    description:
      "Sistema SaaS desenvolvido para organizar ordens de serviço, clientes, estoque e rotinas de assistências técnicas em uma única plataforma.",
    technologies: ["C#", ".NET", "React", "Next.js", "SQL Server"],
    image: "/images/MasterOS.PNG",
    href: "https://masteros.cloud/",
    links: [
      { type: "private", label: "Repositório privado" },
      { type: "deploy", label: "Deploy", href: "https://masteros.cloud/" }
    ],
    imageAlt: "Tela da plataforma MasterOS"
  },
  {
    id: "pssg",
    number: "02",
    title: "PSSG — Site institucional para evento geek",
    description:
      "Site responsivo desenvolvido para apresentar atrações, informações e programação de um evento voltado ao público gamer e geek.",
    technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
    image: "/images/Pss.png",
    href: "https://www.pssg.com.br/",
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/Gilnathan/Pssg" },
      { type: "deploy", label: "Deploy", href: "https://www.pssg.com.br/" }
    ],
    imageAlt: "Tela do site institucional PSSG"
  },
  {
    id: "rick-store",
    number: "03",
    title: "Rick Store — Landing page para assistência técnica",
    description:
      "Landing page criada para apresentar serviços, facilitar o contato com clientes e fortalecer a presença digital da empresa.",
    technologies: ["Next.js", "React", "JavaScript", "CSS Modules"],
    image: "/images/RiickStore.png",
    href: "https://rick-store-flax.vercel.app/",
    links: [
      { type: "github", label: "GitHub", href: "https://github.com/Gilnathan/Rick_Store" },
      { type: "deploy", label: "Deploy", href: "https://rick-store-flax.vercel.app/" }
    ],
    imageAlt: "Tela da landing page Rick Store"
  }
];
