import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Money Saving Tips | Safaya Tours',
    description: 'Essential money saving tips for your trip to Sri Lanka.',
};

export default function TipsPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Money Saving Tips for Sri Lanka</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">1. Eat Like a Local</h2>
                        <p className="text-gray-700 mb-4">
                            Local "Rice and Curry" spots are incredibly affordable and delicious. You can have a fulfilling meal for $2-$3 USD. Avoid tourist-only restaurants for every meal if you are on a budget.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">2. Use Uber or PickMe</h2>
                        <p className="text-gray-700 mb-4">
                            For Tuk-Tuks and taxis in Colombo and major cities, use apps like <strong>PickMe</strong> or <strong>Uber</strong>. They provide fixed rates, avoiding the need to haggle or risk being overcharged.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">3. Drink King Coconut</h2>
                        <p className="text-gray-700 mb-4">
                            Instead of buying expensive bottled sugary drinks, opt for a fresh King Coconut (Thambili) from a roadside vendor. It's natural, hydrating, and costs only about $0.50 USD.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">4. Book Trains in Advance</h2>
                        <p className="text-gray-700 mb-4">
                            Train travel is not only scenic but also the cheapest way to travel long distances. A ticket from Colombo to the Hill Country costs just a few dollars perfectly blending adventure and savings.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">5. Get a Local SIM Card</h2>
                        <p className="text-gray-700 mb-4">
                            Buy a SIM card at the airport (Dialog or Mobitel). Data is very cheap in Sri Lanka (e.g., 50GB for ~$10 USD), saving you from expensive roaming charges.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
