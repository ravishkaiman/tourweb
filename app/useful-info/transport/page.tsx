import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tourist Transport in Sri Lanka | Safaya Tours',
    description: 'Guide to getting around Sri Lanka: Private drivers, trains, and buses.',
};

export default function TransportPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20"> {/* Padding top for fixed header */}
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Tourist Transport in Sri Lanka</h1>

                <div className="prose max-w-none text-gray-700">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Getting Around the Island</h2>
                        <p className="mb-4">
                            Sri Lanka offers various modes of transport, each offering a different experience. Whether you prefer the comfort of a private vehicle or the adventure of public transport, here is what you need to know.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Private Driver & Vehicle</h2>
                        <p className="mb-4">
                            Hiring a private car with a dedicated driver-guide is the most popular and convenient way to tour Sri Lanka. It gives you the flexibility to stop whenever you want and travel at your own pace.
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Comfort:</strong> Air-conditioned modern vehicles.</li>
                            <li><strong>Flexibility:</strong> Custom itineraries and spontaneous stops.</li>
                            <li><strong>Local Insight:</strong> Drivers often act as knowledgeable guides.</li>
                        </ul>
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mt-4">
                            <p className="font-semibold text-green-900">Safaya Tours offers premium private transport services for all our tour packages. Contact us to book your ride!</p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">The Iconic Train Journeys</h2>
                        <p className="mb-4">
                            Sri Lanka is famous for its scenic train rides, particularly the route from <strong>Kandy to Ella</strong>. This journey takes you through lush tea plantations, misty mountains, and over the famous Nine Arches Bridge.
                        </p>
                        <p className="mb-4">
                            <em>Tip: Train tickets sell out fast! It is recommended to book seats at least 30 days in advance for the observation class.</em>
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Public Buses & Tuk-Tuks</h2>
                        <p className="mb-4">
                            For short distances within cities, **Tuk-Tuks** are ubiquitous and fun. Always agree on a price before hopping in or look for a metered taxi.
                        </p>
                        <p>
                            **Public Buses** are an economical option but can be crowded and fast-paced. They connect almost every town in the country.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
