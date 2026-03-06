"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function Navbar() {
  const [navbar, setNavbar] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    fetch(
      `${API_URL}/api/navbar?populate[navLinks][populate]=dropdownLinks&populate=logo`
    )
      .then((res) => res.json())
      .then((data) => setNavbar(data?.data));
  }, []);

  if (!navbar) return null;

  const navLinks = navbar.navLinks;
  const logoUrl = navbar.logo?.url ? `${API_URL}${navbar.logo.url}` : null;

  return (
    <nav className="navbar">
      <div className="logo">
        {logoUrl && (
          <Image src={logoUrl} alt="logo" width={150} height={50} />
        )}
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        {navLinks?.map((link) => (
          <li
            key={link.id}
            className="nav-item"
            // ✅ click only for mobile
            onClick={() => {
              if (menuOpen) {
                setOpenDropdown(openDropdown === link.id ? null : link.id);
              }
            }}
          >
            <Link
              href={link.url || "#"}
              className={link.label === "Contact Us" ? "nav-link contact-btn" : "nav-link"}
            >
              {link.label}
              {link.dropdownLinks?.length > 0 && (
                <span className={`arrow-nav ${openDropdown === link.id ? "arrow-nav-open" : ""}`}>▾</span>
              )}
            </Link>
            {link.dropdownLinks?.length > 0 && (
              <ul className={`dropdown ${openDropdown === link.id ? "dropdown-open" : ""}`}>
                {link.dropdownLinks.map((drop) => (
                  <li key={drop.id}>
                    <Link href={drop.url || "#"}>{drop.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}