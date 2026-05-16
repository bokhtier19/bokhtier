export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    tech: string[];
    image1: string;
    image2?: string;
    github: string;
    status?: string;
    demo?: string;
    futureFeatures?: string[];
}

export interface SecondaryProject {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    tech: string[];
    image1: string;
    github: string;
    status?: string;
    demo?: string;
    futureFeatures?: string[];
}

export const projects: Project[] = [
    {
        slug: "rhinomovies",
        title: "RhinoMovies",
        shortDescription: "Server-side rendered movie discovery platform with dynamic routing, real-time search, and TMDB API integration. Deployed on Vercel.",
        description:
            "Server-side rendered movie discovery platform built with Next.js for performance and SEO. Dynamic routing, real-time search and filtering, TMDB API integration with optimized data-fetching strategies. Deployed on Vercel.",
        tech: ["Next.js", "React", "TMDB API"],
        image1: "/RhinoMovies.png",
        image2: "/RhinoMovies.png",
        github: "https://github.com/bokhtier19/Rhinomovies",
        demo: "https://rhino-movies.vercel.app/",
        futureFeatures: ["Add user authentication and personal watchlists", "Movie recommendations based on user preferences", "Dark mode support for better UX", "Implement rating and review system"]
    },
    {
        slug: "rhinopad",
        title: "RhinoPad",
        shortDescription: "Full stack notes application with real-time sync via Socket.IO, full CRUD operations, MongoDB persistence, and responsive React frontend.",
        description:
            "Full stack notes application with real-time sync via Socket.IO. Full CRUD operations, MongoDB persistence, React frontend with clean state management and responsive design.",
        tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
        image1: "/RhinoPad.png",
        image2: "/RhinoPad_dark.png",
        github: "https://github.com/bokhtier19/RhinoPad",
        demo: "https://rhinopad-frontend.onrender.com/",
        futureFeatures: [
            "Add tagging and search functionality for notes",
            "Implement offline mode with IndexedDB",
            "Add export/import notes (PDF/Markdown)",
            "Enhanced real-time collaboration with typing indicators"
        ]
    },

    {
        slug: "rhinochat",
        title: "RhinoChat",
        shortDescription: "Full-stack real-time chat app with Socket.IO, JWT auth, MongoDB persistence, live presence indicators, and TypeScript end-to-end.",
        description:
            "Full-stack real-time chat application built with Socket.IO, supporting concurrent 1-on-1 and group messaging. JWT authentication, persistent MongoDB storage, live user presence indicators, and fully responsive React UI. Built with TypeScript end-to-end.",
        tech: ["React", "Node.js", "Socket.IO", "Express"],
        image1: "/RhinoMovies.png",
        image2: "/RhinoMovies.png",
        github: "https://github.com/bokhtier19/RhinoChat",
        demo: "",
        status: "In Development",
        futureFeatures: [
            "Persistent chat history with MongoDB",
            "Mobile UI improvements for online users list",
            "User authentication with JWT",
            "Add emoji support, message reactions, and file sharing"
        ]
    }
];

export const secondaryprojects: SecondaryProject[] = [
    {
        slug: "molar-bear-care",
        title: "Molar Bear Care",
        shortDescription: "Static website for a dental clinic with a clean, responsive layout.",
        description:
            "Molar Bear Care is a static website for a dental clinic, highlighting services, contact information, and business details. The website’s clean, responsive layout ensures visitors can easily navigate and access information, while a professional design helps establish trust and credibility.",
        tech: ["React", "Tailwind", "JavaScript"],

        image1: "/MolarBearCare.png",
        github: "https://github.com/bokhtier19/Molar-Bear-Care",
        demo: "https://bokhtier19.github.io/Molar-Bear-Care/",
        futureFeatures: ["Add booking form with backend integration", "Optimize SEO and accessibility", "Multi-language support"]
    },
    {
        slug: "skip-leg-day",
        title: "Skip Leg Day",
        shortDescription: "Fitness-themed static website highlighting leg workouts and tips.",
        description:
            "Skip Leg Day is a fitness-focused static website that emphasizes leg workouts and healthy lifestyle content. It provides users with structured information, tips, and branding elements designed to engage and motivate. The layout is clean, simple, and optimized for readability.",
        tech: ["React", "Tailwind", "JavaScript"],

        image1: "/SkipLegDay.png",
        github: "https://github.com/bokhtier19/Skip_Leg_Day",
        demo: "https://bokhtier19.github.io/Skip_Leg_Day/",
        futureFeatures: ["Add interactive workout timers or guides", "Mobile-first enhancements", "Include blog/news section for fitness updates"]
    },
    {
        slug: "bark-and-brawl",
        title: "Bark & Brawl",
        shortDescription: "Playful website combining canine charm with creative design.",
        description:
            "Bark & Brawl is a creative website merging canine charm with visual design. The platform emphasizes interactive graphics, playful animations, and an engaging user experience. It’s designed to showcase branding and visual content in a fun, memorable way.",
        tech: ["React", "Tailwind", "JavaScript"],

        image1: "/BarkAndBrawl.png",
        github: "https://github.com/bokhtier19/Bark-and-Brawl",
        demo: "https://bokhtier19.github.io/Bark-and-Brawl/",
        futureFeatures: ["Add animation interactions for user engagement", "Convert to React for better maintainability", "Add blog or gallery section for canine content"]
    },
    {
        slug: "anulipi",
        title: "Anulipi",
        shortDescription: "Platform for creative self-expression with interactive UI.",
        description:
            "Anulipi is a platform for self-expression, allowing users to share creative ideas meaningfully. With a modern, interactive UI and hash-routing navigation, it provides an intuitive experience for users to navigate content seamlessly. The platform emphasizes clean design and usability, making self-expression accessible and engaging.",
        tech: ["React", "Tailwind", "JavaScript"],
        image1: "/Anulipi.png",
        github: "https://github.com/bokhtier19/Anulipi",
        demo: "https://bokhtier19.github.io/Anulipi/#/",
        futureFeatures: ["Add user accounts and authentication", "Enable media uploads (images/audio)", "Mobile UI improvements and responsive enhancements"]
    }
];
