import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Latest News & Travel Updates | Safaya Tours',
    description: 'Stay updated with the latest tourism news and travel advisory for Sri Lanka.',
};

const newsItems = [
    {
        id: 1,
        title: 'Sri Lanka Tourism Booms in 2024',
        date: 'February 15, 2026', // Future date for "latest" feel
        excerpt: 'Tourist arrivals have hit a record high this season as travelers flock to experience the island\'s pristine beaches and cultural heritage.',
        category: 'Tourism'
    },
    {
        id: 2,
        title: 'New Direct Flights Announced from Europe',
        date: 'January 28, 2026',
        excerpt: 'Major European airlines are increasing flight frequency to Colombo, making it easier than ever to visit our paradise island.',
        category: 'Travel'
    },
    {
        id: 3,
        title: 'Cultural Festival Season Begins',
        date: 'January 10, 2026',
        excerpt: 'The annual Esala Perahera preparations are underway. Book your Kandy tour now to witness this spectacular event.',
        category: 'Culture'
    }
];

export default function NewsPage() {
    return (
        <main className="min-h-screen pt-[100px] pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-green-900 mb-4 font-serif">Latest News & Updates</h1>
                    <p className="text-xl text-gray-600">Keep up with what is happening in Sri Lanka.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-gray-200 relative">
                                {/* Placeholder for news image - typically irrelevant for this task but good for structure */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-4xl">📰</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">{item.category}</span>
                                    <span className="text-sm text-gray-500">{item.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-700 transition-colors">
                                    <Link href={`#`}>{item.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {item.excerpt}
                                </p>
                                <Link href="#" className="text-green-600 font-semibold hover:underline inline-flex items-center">
                                    Read More <span>→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
