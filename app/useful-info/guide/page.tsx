import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hiring a Tour Guide | Safaya Tours',
    description: 'Why you should hire a licensed tour guide in Sri Lanka.',
};

export default function GuidePage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green-900 mb-8 font-serif">Why Hire a Tour Guide?</h1>

                <div className="prose max-w-none text-gray-700">
                    <p className="text-xl mb-8 leading-relaxed">
                        While Sri Lanka is easy to explore, having a knowledgeable local guide transforms a good trip into an unforgettable one. At Safaya Tours, we work with National Guide Lecturers licensed by the Sri Lanka Tourism Development Authority.
                    </p>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-green-800 mb-2">Deep Cultural Insight</h2>
                                <p>
                                    Sri Lanka has a history spanning over 2,500 years. A guide can explain the intricate stories behind ancient ruins, Buddhist philosophy, and local traditions that you might otherwise miss just looking at a monument.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-green-800 mb-2">Overcoming Language Barriers</h2>
                                <p>
                                    While English is widely spoken, a local guide helps navigate rural areas, read menus, and interact with locals who may only speak Sinhala or Tamil, opening doors to authentic interactions.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-green-800 mb-2">Safety & Convenience</h2>
                                <p>
                                    Your guide acts as your localized trouble-shooter. From navigating chaotic traffic to ensuring you don't get ripped off at tourist traps, they look out for your best interests.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-gray-100 p-8 rounded-xl text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to explore with an expert?</h3>
                        <a href="/#contact" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors">
                            Contact Us to Book a Guide
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
