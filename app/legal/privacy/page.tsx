import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Safaya Tours',
    description: 'How we handle your personal data at Safaya Tours.',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Privacy Policy</h1>

                <div className="prose max-w-none text-gray-700">
                    <p className="lead text-lg mb-6">
                        At Safaya Tours, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Information We Collect</h2>
                        <p className="mb-4">We collect information that helps us provide the best travel service for you:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Details:</strong> Name, email address, phone number, and nationality when you inquire or book.</li>
                            <li><strong>Travel Preferences:</strong> Dates of travel, dietary requirements, and specific interests.</li>
                            <li><strong>Technical Data:</strong> IP address and browser type when you visit our website (via cookies).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">How We Use Your Data</h2>
                        <p className="mb-4">Your data is used solely for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Processing your tour bookings and payments.</li>
                            <li>Communicating with you regarding your itinerary.</li>
                            <li>Improving our website and service offerings.</li>
                            <li>Legal compliance as required by Sri Lankan law.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Data Security</h2>
                        <p>
                            We implement strict security measures to prevent unauthorized access to your data. We do not sell or share your personal information with third parties for marketing purposes. Data is only shared with necessary service providers (e.g., hotels, drivers) to fulfill your booking.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@safayatours.com" className="text-green-600 font-medium">hello@safayatours.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
