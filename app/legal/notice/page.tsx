import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Notice | Safaya Tours',
    description: 'Legal information and company details for Safaya Tours.',
};

export default function LegalNoticePage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Legal Notice</h1>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 prose max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Company Information</h2>
                        <p><strong>Safaya Tours</strong> is a registered travel agency in Sri Lanka dedicated to providing exceptional travel experiences.</p>
                        <ul className="list-none pl-0 space-y-2 mt-4">
                            <li><strong>Registered Name:</strong> Safaya Tours (Pvt) Ltd</li>
                            <li><strong>Registration Number:</strong> [PV 12345]</li>
                            <li><strong>Registered Address:</strong> No. 123, High Level Road, Nugegoda, Sri Lanka.</li>
                            <li><strong>Director/CEO:</strong> [Name here if available, or omit]</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Details</h2>
                        <ul className="list-none pl-0 space-y-2">
                            <li><strong>Email:</strong> <a href="mailto:hello@safayatours.com" className="text-green-600 hover:underline">hello@safayatours.com</a></li>
                            <li><strong>Phone:</strong> +94 71 341 0214</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Disclaimer</h2>
                        <p>
                            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability with respect to the website or the information, products, or services contained on the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Copyright</h2>
                        <p>
                            &copy; {new Date().getFullYear()} Safaya Tours. All rights reserved. The content, design, and imagery on this website are protected by copyright laws. Reproduction of any part of this site without prior written permission is strictly prohibited.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
