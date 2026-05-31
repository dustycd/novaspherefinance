import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Financial Advisory", href: "/financial-advisory" },
  { label: "Contact", href: "#contact" },
];

type CurrentLocation = {
  pathname: string;
  hash: string;
};

function getCurrentLocation(): CurrentLocation {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

function isActiveLink(href: string, location: CurrentLocation) {
  const [hrefPath, hrefHashValue] = href.split("#");
  const targetHash = hrefHashValue ? `#${hrefHashValue}` : "";

  if (targetHash) {
    const pathMatches = hrefPath === "" || hrefPath === location.pathname;

    return pathMatches && location.hash === targetHash;
  }

  if (href === "/") {
    return (
      location.pathname === "/" &&
      (location.hash === "" || location.hash === "#home")
    );
  }

  return location.pathname === hrefPath && location.hash === "";
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(getCurrentLocation);

  useEffect(() => {
    const updateCurrentLocation = () => {
      setCurrentLocation(getCurrentLocation());
    };

    window.addEventListener("hashchange", updateCurrentLocation);
    window.addEventListener("popstate", updateCurrentLocation);

    return () => {
      window.removeEventListener("hashchange", updateCurrentLocation);
      window.removeEventListener("popstate", updateCurrentLocation);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", isMenuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("nav-lock");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <a className="brand" href="/">
        <div className="brand-mark">
          <span />
        </div>

        <div>
          <strong>NOVASPHERE</strong>
          <small>CONSULTING</small>
        </div>
      </a>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <button
        className={`mobile-nav-backdrop ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-hidden={!isMenuOpen}
        aria-label="Close navigation"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />

      <nav
        className={`nav ${isMenuOpen ? "is-open" : ""}`}
        id="primary-navigation"
      >
        {navLinks.map((link) => {
          const isActive = isActiveLink(link.href, currentLocation);

          return (
            <a
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "is-active" : undefined}
              href={link.href}
              key={link.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
