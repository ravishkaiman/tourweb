import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
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
                    <Link href="/" className="logo">
                        <Image
                            src="/assets/logo.jpeg"
                            alt="Safaya Tours Logo"
                            width={60}
                            height={60}
                            className="h-[60px] w-auto"
                        // style={{ mixBlendMode: 'multiply' }} // Keeping consistent with previous request if needed
                        />
                    </Link>
                    <nav className="main-nav">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#tours">Sri Lanka Tours</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <button className="mobile-menu-toggle" aria-label="Toggle Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
