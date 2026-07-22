'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, ShieldAlert } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Branches', href: '/branches' },
  { label: 'Concept', href: '/concept' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Programs', href: '/classes' },
  { label: 'Membership', href: '/membership' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="IGNITE FITNESS Home">
          <div className={styles.logoImgWrap}>
            <Image
              src="/bg_remove_logo.png"
              alt="IGNITE FITNESS Logo"
              width={48}
              height={48}
              className={styles.logoImg}
              priority
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoGiga}>IGNITE</span>
            <span className={styles.logoFit}>FITNESS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/admin" className={styles.adminBadgeLink} id="nav-admin-link">
              <ShieldAlert size={14} />
              <span>Admin</span>
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link href="/branches" className={`btn btn-primary ${styles.cta}`} id="nav-join-btn">
          <span>Join Now</span>
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Hamburger toggle */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} color="var(--accent-tomato)" /> : <Menu size={26} color="#FFFFFF" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/admin" className={styles.mobileLink} style={{ color: 'var(--accent-tomato)' }} onClick={() => setMenuOpen(false)}>
              Admin Panel
            </Link>
          </li>
          <li>
            <Link href="/branches" className={`btn btn-primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
              <span>Join Now</span>
              <ArrowUpRight size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
