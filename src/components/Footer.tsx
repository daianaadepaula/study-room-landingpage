import { Facebook, Instagram, Plus, Twitter } from "lucide-react";

type SocialItem = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

type LinkItem = {
  label: string;
  url: string;
};

type FooterProps = {
  variant?: "default" | "simple";
  currentYear?: number;
};

const links: LinkItem[] = [
  { label: "Termos de Uso", url: "#" },
  { label: "Política de Privacidade", url: "#" },
];

const socialLinks: SocialItem[] = [
  {
    name: "Instagram",
    url: "#",
    icon: (
      <Instagram className="size-9 p-1 border border-white rounded-md text-white hover:text-blue-400 hover:border-blue-400" />
    ),
  },
  {
    name: "Facebook",
    url: "#",
    icon: (
      <Facebook className="size-9 p-1 border border-white rounded-md text-white hover:text-blue-400 hover:border-blue-400" />
    ),
  },
  {
    name: "Twitter",
    url: "#",
    icon: (
      <Twitter className="size-9 p-1 border border-white rounded-md text-white hover:text-blue-400 hover:border-blue-400" />
    ),
  },
];

const Footer = ({
  variant = "default",
  currentYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className="bg-blue-600 pt-10 md:pt-20 pb-16 md:pb-36">
      <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 place-items-center md:place-items-start gap-6 md:gap-8">
        {/* Logo */}
        <div className="flex items-start justify-center h-24 md:h-32">
          <a
            href="#"
            className="flex items-center text-2xl font-bold text-white animate-rotate-y hover:text-blue-400"
          >
            Estudo <Plus className="size-7 ml-1 font-extrabold logo-plus" />
          </a>
        </div>

        {/* Links úteis */}
        {variant !== "simple" && (
          <div className="space-y-1 md:space-y-2 flex flex-col items-center md:items-start h-24 md:h-32">
            {links.map((item) => (
              <p
                key={item.label}
                className="text-white text-base md:text-lg font-bold hover:text-blue-400"
              >
                <a href={item.url}>{item.label}</a>
              </p>
            ))}
          </div>
        )}

        {/* Contato e Redes Sociais */}
        <div className="space-y-1 md:space-y-2 flex flex-col items-center md:items-start h-24 md:h-32">
          <p className="text-white text-base md:text-lg font-bold">
            {currentYear} - Todos os direitos reservados
          </p>
          <p className="text-white text-base md:text-lg font-bold">
            contato@estudomais.com.br
          </p>
          <div className="flex gap-3 md:gap-4 p-1.5">
            {socialLinks.map((item) => (
              <a href={item.url} key={item.name} aria-label={item.name}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
