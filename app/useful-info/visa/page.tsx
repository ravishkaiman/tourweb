import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sri Lanka Visa Information | Safaya Tours',
    description: 'How to apply for a Sri Lanka Tourist Visa (ETA).',
};

export default function VisaPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Applying for a Sri Lanka Visa</h1>

                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="p-8">
                        <p className="text-lg text-gray-700 mb-6">
                            Most visitors to Sri Lanka need a visa. Fortunately, the process is simple and can be done entirely online via the Electronic Travel Authorization (ETA) system.
                        </p>

                        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b pb-2">Tourist ETA (30 Days)</h2>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                            <li><strong>Validity:</strong> 30 days from date of arrival (extendable up to 6 months).</li>
                            <li><strong>Entry:</strong> Double entry (you can leave and return within the initial 30 days).</li>
                            <li><strong>Purpose:</strong> Tourism, visiting friends/relatives, medical treatment, sports.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b pb-2">How to Apply</h2>
                        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-4">
                            <li>
                                <strong>Visit the Official Website:</strong> Go to <a href="https://eta.gov.lk" target="_blank" rel="noopener noreferrer" className="text-green-600 underline font-semibold">www.eta.gov.lk</a>. Beware of third-party agency sites that charge extra fees.
                            </li>
                            <li>
                                <strong>Fill the Application:</strong> Select your language, click "Apply", and choose the relevant category (usually "Tourist ETA - Individual").
                            </li>
                            <li>
                                <strong>Pay the Fee:</strong> Pay using a credit or debit card. Fees vary by country (typically ~$50 USD for most nationalities, free for SAARC/Singapore/Maldives/Seychelles residents - <em>subject to change</em>).
                            </li>
                            <li>
                                <strong>Receive Approval:</strong> You will receive an acknowledgment email instantly, and the approval usually follows within 24-48 hours.
                            </li>
                        </ol>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                            <h3 className="font-bold text-yellow-800">Important Note</h3>
                            <p className="text-yellow-900 text-sm">
                                Passport must be valid for at least 6 months from the date of arrival.
                                You may be asked to show a return ticket and sufficient funds at immigration.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-green-800 mb-4 border-b pb-2">Visa On Arrival</h2>
                        <p className="text-gray-700 mb-4">
                            A Visa on Arrival facility is available at the airport for many nationalities, but the queue can be long. We highly recommend applying online before you travel for a smooth entry.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
