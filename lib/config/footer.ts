export interface FooterLink {
  href: string
  label: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterConfig {
  brand: {
    title: string
    description: string
  }
  sections: FooterSection[]
  copyright: string
}

export const footerConfig: FooterConfig = {
  brand: {
    title: "BloodLink AI",
    description: "AI-powered blood shortage prediction and donor coordination platform."
  },
  sections: [
    {
      title: "Platform",
      links: [
        { href: "/chat", label: "Chat" },
        { href: "/dashboard", label: "Voice Assistant" },
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
      ]
    }
  ],
  copyright: `© ${new Date().getFullYear()} BloodLink AI. All rights reserved.`
}
