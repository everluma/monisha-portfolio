import tilesGallery from "./assets/projects/tiles-gallery.jpeg";
import keenKeeper from "./assets/projects/keen-keeper.jpeg";
import digiTools from "./assets/projects/digitools.jpeg";
import issueTracker from "./assets/projects/github-issue-tracker.jpeg";
import calendar2026 from "./assets/projects/calendar-2026.jpeg";
import ecommerceShop from "./assets/projects/mini-e-commerce-shop.jpeg";




export const projects = [
  {
    id: 1,
    name: "Tiles Gallery",
    image: tilesGallery,

    description:
      "A modern responsive image gallery website with elegant UI design.",

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    live: "https://tiles-gallery-ten-orpin.vercel.app/",

    github: "https://github.com/everluma/tiles-gallery",

    challenges:
      "Creating responsive layouts and smooth image presentation.",

    future:
      "Add categories, filtering system, and dark/light mode.",
  },

  {
    id: 2,
    name: "Keen Keeper",
    image: keenKeeper,

    description:
      "A productivity-focused web app for organizing important tasks.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
    ],

    live: "https://keen-keeperp.netlify.app/",

    github: "https://github.com/everluma/keen-keeper",

    challenges:
      "Managing UI interactions and responsive task components.",

    future:
      "Add authentication and database integration.",
  },

  {
    id: 3,
    name: "DigiTools Platform",
    image: digiTools,

    description:
      "A multi-tools platform with interactive and useful utilities.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    live: "https://digitool-projec.netlify.app/",

    github: "https://github.com/everluma/digitools-platform",

    challenges:
      "Handling multiple utilities and maintaining UI consistency.",

    future:
      "Add advanced developer tools and API integrations.",
  },

  {
    id: 4,
    name: "GitHub Issue Tracker",
    image: issueTracker,

    description:
      "A clean issue tracker application inspired by GitHub issue management.",

    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
    ],

    live: "https://everluma.github.io/github-issue-tracker/",

    github: "https://github.com/everluma/github-issue-tracker",

    challenges:
      "Managing issue states and designing clean UI components.",

    future:
      "Add filtering, labels, and backend integration.",
  },

  {
    id: 5,
    name: "Calendar 2026",
    image: calendar2026,

    description:
      "An interactive and responsive calendar web application for 2026.",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    live: "https://everluma.github.io/calendar-2026/",

    github: "https://github.com/everluma/calendar-2026",

    challenges:
      "Generating dynamic calendar layouts and date handling.",

    future:
      "Add event management and reminder features.",
  },

  {
    id: 6,
    name: "Mini E-Commerce Shop",
    image: ecommerceShop,

    description:
      "A mini responsive e-commerce website with modern product UI.",

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],

    live: "https://everluma.github.io/mini-E-commerce-shop/",

    github: "https://github.com/everluma/mini-E-commerce-shop",

    challenges:
      "Creating responsive product cards and cart interactions.",

    future:
      "Add payment system and authentication.",
  },
];