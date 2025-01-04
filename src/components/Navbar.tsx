import React from 'react';

type LinkItem = {
  label: string;
  href: string;
};

interface NavbarProps {
  links: LinkItem[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
