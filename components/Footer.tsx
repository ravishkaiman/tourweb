import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <div className="newsletter-text">
                        <h3>NEWSLETTER</h3>
                        <p>Join our mailing list to receive the latest updates and travel inspiration</p>
                    </div>
                    <form className="newsletter-form">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="footer-divider"></div>

                {/* Main Links Section */}
                <div className="footer-links-grid">
                    <div className="footer-col">
                        <h3>THE COMPANY</h3>
                        <ul>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#contact">Contact Us</Link></li>
                            <li><Link href="/legal/notice">Legal Notice</Link></li>
                            <li><Link href="/legal/privacy">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms">Terms and Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>USEFUL INFORMATION</h3>
                        <ul>
                            <li><Link href="/news" className="text-amber-500 font-bold hover:text-amber-400">⚡ Latest News</Link></li>
                            <li><Link href="/useful-info/transport">Tourist Transport</Link></li>
                            <li><Link href="/useful-info/tips">Money Saving Tips</Link></li>
                            <li><Link href="/useful-info/guide">Tour Guide</Link></li>
                            <li><Link href="/useful-info/visa">Apply for Visa</Link></li>
                            <li><Link href="/useful-info/flights">Flights to Sri Lanka</Link></li>
                        </ul>
                    </div>



                    <div className="footer-col">
                        <h3>ONE DAY TOURS</h3>
                        <ul>
                            <li><Link href="#kandy">Kandy Day Tour</Link></li>
                            <li><Link href="#galle">Galle Day Tour</Link></li>
                            <li><Link href="#colombo">Colombo City Tour</Link></li>
                            <li><Link href="#safari">Udawalawe Safari</Link></li>
                            <li><Link href="#sigiriya">Sigiriya & Dambulla</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61588607032680" target="_blank" rel="noopener noreferrer" className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition flex items-center justify-center">
                            <FaFacebook className="text-white text-xl" />
                        </a>
                        <a href="https://www.instagram.com/safayatours/" target="_blank" rel="noopener noreferrer" className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition flex items-center justify-center">
                            <FaInstagram className="text-white text-xl" />
                        </a>
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} Safaya Tours. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
