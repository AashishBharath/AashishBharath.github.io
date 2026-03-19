export type ThemeName = "professional" | "midnight" | "forest";

export type NavItem = {
  key: "home" | "projects" | "resume" | "fun";
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Aashish Bharath",
  role: "",
  theme: "professional" as ThemeName,
  email: "aashishbharath21@gmail.com",
  linkedin: "https://www.linkedin.com/in/aashishbharath/",
  navItems: [
    { key: "home", label: "Home", href: "/" },
    { key: "projects", label: "Projects", href: "/projects" },
    { key: "resume", label: "Resume", href: "/resume" },
    { key: "fun", label: "Interests", href: "/fun" }
  ] as NavItem[]
};
