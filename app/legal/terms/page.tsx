import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Safaya Tours',
    description: 'Booking terms and conditions for Safaya Tours.',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Terms and Conditions</h1>

                <div className="prose max-w-none text-gray-700">
                    <p className="mb-6">
                        Please read these Terms and Conditions carefully before booking a tour with Safaya Tours. By confirming a booking, you agree to these terms.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">1. Booking & Payment</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A deposit of <strong>20%</strong> is required to secure your booking.</li>
                            <li>The remaining balance must be paid upon arrival in Sri Lanka or 14 days prior to the start date, depending on the package.</li>
                            <li>Payments can be made via Bank Transfer or online payment links (where available).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">2. Cancellations & Refunds</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-2"><strong>Cancellation Policy:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>30 days or more before arrival:</strong> Full refund of deposit (minus bank charges).</li>
                                <li><strong>14-29 days before arrival:</strong> 50% refund of deposit.</li>
                                <li><strong>Less than 14 days before arrival:</strong> No refund of deposit.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">3. Tour Adjustments</h2>
                        <p>
                            Safaya Tours reserves the right to adjust itineraries in case of unforeseen circumstances (e.g., weather, road closures). We will always strive to provide a comparable alternative.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">4. Liability</h2>
                        <p>
                            We act as an agent for service providers (hotels, transport). While we only work with reputable partners, we accept no liability for loss, damage, or injury caused by third parties or force majeure events. Travel insurance is highly recommended.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-green-800 mb-4">5. Governing Law</h2>
                        <p>
                            These terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
