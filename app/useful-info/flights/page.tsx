import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Flights to Sri Lanka | Safaya Tours',
    description: 'Guide to flying to Sri Lanka: Airports, airlines, and tips.',
};

export default function FlightsPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Flights to Sri Lanka</h1>

                <div className="prose max-w-none text-gray-700">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">International Airports</h2>
                        <p className="mb-4">
                            Sri Lanka has two main international airports:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>
                                <strong>Bandaranaike International Airport (CMB):</strong> Located in Katunayake, 30km north of Colombo. This is the primary gateway for almost all international visitors.
                            </li>
                            <li>
                                <strong>Mattala Rajapaksa International Airport (HRI):</strong> Located in the south near Hambantota. Generally serves fewer flights but is convenient for southern coast itineraries.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Major Airlines</h2>
                        <p className="mb-4">
                            Many major carriers fly directly or with convenient connections to Colombo:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 p-4 rounded text-center font-medium">SriLankan Airlines (National Carrier)</div>
                            <div className="bg-gray-50 p-4 rounded text-center font-medium">Emirates</div>
                            <div className="bg-gray-50 p-4 rounded text-center font-medium">Qatar Airways</div>
                            <div className="bg-gray-50 p-4 rounded text-center font-medium">Singapore Airlines</div>
                            <div className="bg-gray-50 p-4 rounded text-center font-medium">Etihad Airways</div>
                            <div className="bg-gray-50 p-4 rounded text-center font-medium">Turkish Airlines</div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Arrival Tips</h3>
                            <ul className="list-disc pl-6 text-blue-900 space-y-1">
                                <li>Fill out your arrival card online before you fly to save time at immigration.</li>
                                <li>Pre-book your airport transfer with Safaya Tours for a hassle-free start to your holiday.</li>
                                <li>There are duty-free shops and currency exchange counters in the arrival hall.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
