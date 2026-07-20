/* Adding a project = adding one object to PROJECTS. */

export const PROFILE = {
  name: "Aarush",
  initials: "",
  headline: "Aerospace Engineering Student · University of Surrey",
  bio: "Currently a Second Year Student at the University of Surrey with a large interest in propulsion systems and currenly working on projects (which).",
  photoUrl: null, //'/photo.jpg' (put the image in /public)
  contactIntro:
    "A sentence inviting recruiters or collaborators to reach out",
  email: "ak04004@surrey.ac.uk",
  linkedin: "https://www.linkedin.com/in/aarush-kattel-1023aa235/",
  github: "https://github.com/18KATTELA",
  cvPdf: "/cv.pdf", // put PDF in /public as cv.pdf
};


export const INTERESTS = [
  "CFD & Fluid Dynamics",
  "Propulsion Systems",
  "Orbital Mechanics",
  "UAV Design",
];


export const PROJECTS = [
  {
    title: "Project Title",
    description:
      "Goal, Methods/tools used, and result",
    tags: ["CFD", "Aerodynamics"],
    image: null, // e.g. '/projects/airfoil.jpg' (in /public) — null shows the placeholder
    link: "#", //link to a project page or report
  },
  {
    title: "Project Title",
    description:
      "Goal, Methods/tools used, and result",
    tags: ["Matlab", "Fusion 360"],
    image: null, // e.g. '/projects/airfoil.jpg' (in /public) — null shows the placeholder
    link: "#", //link to a project page or report
  },
  {
    title: "Project Title",
    description:
      "Goal, Methods/tools used, and result",
    tags: ["CFD", "Aerodynamics"],
    image: null, // e.g. '/projects/airfoil.jpg' (in /public) — null shows the placeholder
    link: "#", //link to a project page or report
  },
];

//update manually when i publish repos — or later replace this with a fetch() to https://api.github.com/users/18KATTELA/repos
export const REPOS = [
  {
    name: "repo name",
    description: "description",
    language: "Python",
    link: "#",
  },
  {
    name: "repo name",
    description: "description",
    language: "Python",
    link: "#",
  },
  {
    name: "repo name",
    description: "description",
    language: "Python",
    link: "#",
  },
];

//CV content
export const CV = {
  education: [
    {
      title: "BEng Aerospace Engineering",
      org: "University of Surrey",
      date: "2025 — 2029",
      details:
        "Expected 1:1, Fluid Mechanics, Flight Dynamics, Thermodynamics.",
    },
  ],
  
  // fill in later properly
  experience: [
    {
      title: "Role Title",
      org: "Company",
      date: "date — date",
      bullets: [
        'Whats done',
        "The result",
      ],
    },
    {
      title: "Team Member of formula student cooling system",
      org: "Formula student",
      date: "2025 — Present",
      bullets: ["Your responsibility on the team and what i contributed."],
    },
  ],
  
  skills: [
    "Python",
    "C#",
    "MATLAB",
    "LATEX",
    "Fusion 360",
    "Technical Writing",
  ],
  certifications: [
    {
      title: "Certification Name",
      org: "Organisation",
      date: "date",
    },
  ],
  awards: [
    {
      title: "Award Name",
      date: "2025",
      details: "sentence on what the award recognises",
    },
  ],
};
