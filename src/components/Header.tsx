import { Menu, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationLinks } from "../constants/navigationLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40
               animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 ${
          menuOpen ? "bg-blue-600" : "bg-gray-50"
        } transition-colors ${
          isScrolled && !menuOpen ? "border-b shadow-md border-gray-200" : ""
        }`}
      >
        {" "}
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#"
            className={`flex items-center text-2xl font-bold animate-fade-right ${
              menuOpen ? "text-white" : "text-blue-500"
            }`}
          >
            Estudo{" "}
            <Plus
              className={`size-7 ml-1 logo-plus ${
                menuOpen ? "text-white" : "text-blue-500"
              }`}
            />
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigationLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="group relative text-lg font-bold text-gray-900 hover:text-blue-500"
                aria-label={link.name}
              >
                {link.name}
                <span
                  className="
										absolute left-0 -bottom-1 h-0.5 w-0
										bg-blue-500 transition-all duration-300 ease-in-out
										group-hover:w-full
									"
                />
              </a>
            ))}
            <div className="flex gap-2">
              <a href="" className="btn-primary">
                Login
              </a>
              <a href="#prices" className="btn-subscribe">
                Assinar agora
              </a>
            </div>
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <X className="size-7 text-white" />
            ) : (
              <Menu className="size-7 text-blue-500" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav
            className={`md:hidden fixed top-16 left-0 w-full px-4 pb-4 
											bg-blue-600 backdrop-blur-md space-y-5 z-50
											transition-all duration-300 ease-in-out
											${
                        menuOpen
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
          >
            {navigationLinks.slice(0, 6).map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                aria-label={link.name}
                className="
								group block py-2 border-b border-white/30 text-white text-lg font-semibold relative
							"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
                <span
                  className="
										absolute left-0 bottom-0 h-0.5 w-0
										bg-white
										transition-all duration-500 ease-in-out
										group-hover:w-full
										group-focus:w-full
										group-active:w-full
									"
                />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
