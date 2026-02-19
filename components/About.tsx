import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
                        {/* Using a placeholder for now, ideally a team photo or scenic collage */}
                        <div className="absolute inset-0 bg-gray-200 rounded-lg overflow-hidden shadow-xl transform md:-rotate-2 transition hover:rotate-0 duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=2000&auto=format&fit=crop"
                                alt="About Safaya Tours"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2">
                        <h4 className="text-green-700 font-bold uppercase tracking-wider mb-2">Our Story</h4>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Experience the Real Sri Lanka with Us</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Safaya Tours, we believe that travel is not just about visiting places, but about creating memories that last a lifetime. Founded with a passion for sharing the hidden gems of our island, we specialize in curating personalized experiences that go beyond the ordinary.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Whether you're seeking the thrill of a safari, the tranquility of our beaches, or the rich history of our ancient cities, our team of local experts is dedicated to crafting the perfect itinerary for you.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-xl">✓</div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Custom Itineraries</h5>
                                    <p className="text-sm text-gray-500">Tailored to your preferences.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-xl">✓</div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Local Experts</h5>
                                    <p className="text-sm text-gray-500">Guides with deep knowledge.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-xl">✓</div>
                                <div>
                                    <h5 className="font-bold text-gray-900">24/7 Support</h5>
                                    <p className="text-sm text-gray-500">Always here for you.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-green-600 text-xl">✓</div>
                                <div>
                                    <h5 className="font-bold text-gray-900">Sustainability</h5>
                                    <p className="text-sm text-gray-500">Eco-friendly travel options.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="mt-8 inline-block bg-green-700 text-white font-bold py-3 px-8 rounded hover:bg-green-800 transition duration-300">
                            Start Your Journey
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
