'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="top-bar">
                <div className="container top-bar-container">
                    <div className="contact-info">
                        <a href="mailto:hello@safayatours.com" className="hover:text-amber-400 transition-colors">hello@safayatours.com</a>
                    </div>
                    <div className="top-actions">
                        <a href="#contact">Enquire Now</a>
                    </div>
                </div>
            </div>

            <header className="main-header">
                <div className="container header-container">
                    <Link href="/" className="logo" onClick={closeMenu}>
                        <Image
                            src="/assets/logo.jpeg"
                            alt="Safaya Tours Logo"
                            width={60}
                            height={60}
                            className="h-[60px] w-auto"
                        />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link href="#tours" onClick={closeMenu}>Sri Lanka Tours</Link></li>
                            <li><Link href="#about" onClick={closeMenu}>About Us</Link></li>
                            <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
