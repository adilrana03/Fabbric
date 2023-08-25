export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: "LENGTH",
    items: [
      {
        name: "Midi",
        slug: "layouts",
        description: "Create UI that is shared across routes",
      },
      {
        name: "Maxi",
        slug: "route-groups",
        description: "Organize routes without affecting URL paths",
      },
    ],
  },
  {
    name: "CUFFS",
    items: [
      {
        name: "Loading",
        slug: "loading",
        description:
          "Create meaningful Loading UI for specific parts of an app",
      },
      {
        name: "Error",
        slug: "error-handling",
        description: "Create Error UI for specific parts of an app",
      },
      {
        name: "Not Found",
        slug: "not-found",
        description: "Create Not Found UI for specific parts of an app",
      },
    ],
  },
  {
    name: "LAPEL & COLLAR",
    items: [
      {
        name: "Streaming with Suspense",
        slug: "streaming",
        description:
          "Streaming data fetching from the server with React Suspense",
      },
      {
        name: "Static Data",
        slug: "ssg",
        description: "Generate static pages",
      },
      {
        name: "Dynamic Data",
        slug: "ssr",
        description: "Server-render pages",
      },
      {
        name: "Incremental Static Regeneration",
        slug: "isr",
        description: "Get the best of both worlds between static & dynamic",
      },
    ],
  },
  {
    name: "YOKE",
    items: [
      {
        name: "Client Context",
        slug: "context",
        description:
          "Pass context between Client Components that cross Server/Client Component boundary",
      },
    ],
  },
  {
    name: "POCKETS",
    items: [
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
      {
        name: "Code Snippets",
        slug: "snippets",
        description: "A collection of useful App Router code snippets",
      },
    ],
  },
  {
    name: "FIT",
    items: [
      {
        name: "REGULAR",
        slug: "context",
        description:
          "Pass context between Client Components that cross Server/Client Component boundary",
      },
      {
        name: "OVERSIZE",
        slug: "context",
        description:
          "Pass context between Client Components that cross Server/Client Component boundary",
      },
    ],
  },

  {
    name: "POCKETS",
    items: [
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
      {
        name: "Code Snippets",
        slug: "snippets",
        description: "A collection of useful App Router code snippets",
      },
    ],
  },

  {
    name: "POCKETS",
    items: [
      {
        name: "Client Component Hooks",
        slug: "hooks",
        description: "Preview the routing hooks available in Client Components",
      },
      {
        name: "CSS and CSS-in-JS",
        slug: "styling",
        description: "Preview the supported styling solutions",
      },
      {
        name: "Code Snippets",
        slug: "snippets",
        description: "A collection of useful App Router code snippets",
      },
    ],
  },
];
