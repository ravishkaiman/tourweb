import { tours } from '@/components/TourData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return tours.map((tour) => ({
        id: tour.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function TourPage({ params }: PageProps) {
    const { id } = await params;
    const tour = tours.find((t) => t.id === id);

    if (!tour) {
        notFound();
    }

    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 shadow-text">{tour.title}</h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide">{tour.duration} | {tour.pax}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6 border-b pb-4 border-gray-100">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {tour.description}
                            </p>
                            {tour.whyChoose && (
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Why Choose This Tour?</h3>
                                    <p className="text-green-900/80 leading-relaxed">
                                        {tour.whyChoose}
                                    </p>
                                </div>
                            )}
                        </section>

                        {/* Highlights */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6 border-b pb-4 border-gray-100">Highlights</h2>
                            <ul className="grid grid-cols-1 gap-4">
                                {tour.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-4 p-3 hover:bg-green-50 rounded-lg transition-colors">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">✓</span>
                                        <span className="text-gray-700 font-medium">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Itinerary */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-8 border-b pb-4 border-gray-100">Itinerary</h2>
                            <div className="space-y-8 pl-4">
                                {tour.itinerary.map((item, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-green-200 last:border-0 pb-1">
                                        <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-md ring-4 ring-green-50"></span>
                                        {item.time && (
                                            <span className="text-sm font-bold text-green-600 block mb-1 uppercase tracking-wider">{item.time}</span>
                                        )}
                                        <h4 className="text-lg font-bold text-gray-800">{item.activity}</h4>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold font-serif text-gray-800 mb-6 text-center">Book This Tour</h3>

                            <div className="space-y-6 mb-8">
                                <div className="bg-green-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <span>✨</span> What's Included
                                    </h4>
                                    <ul className="space-y-3">
                                        {tour.includes.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                                                <span className="text-green-500 mt-0.5">✅</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <Link
                                href="/#contact"
                                className="block w-full bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-1 duration-200"
                            >
                                Inquire Now
                            </Link>

                            <div className="mt-6 text-center text-sm text-gray-400 space-y-2">
                                <p>Fully customizable itinerary</p>
                                <p>Free cancellation up to 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
