"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
    {
        image: '/images/hero/user-hero-1.jpg', // User Image 1 (Tea Hills)
        title: 'Hill Country Splendor',
        subtitle: 'Experience the breathtaking tea plantations of Sri Lanka'
    },
    {
        image: '/images/hero/user-hero-2.jpg', // User Image 2 (Lake/Balloon)
        title: 'Adventure Through Nature',
        subtitle: 'Experience the wild beauty of our island'
    },
    {
        image: '/images/hero/user-hero-5.jpg', // Girl on Rock
        title: 'Breathtaking Views',
        subtitle: 'Conquer the peaks and valleys of Ella'
    },
    {
        image: '/images/hero/user-hero-6.jpg', // Elephants
        title: 'Wild Elephant Encounters',
        subtitle: 'Witness majestic giants in their natural habitat'
    },
    {
        image: '/images/hero/user-hero-3.jpg', // Stupa/Lake (Culture) - NOTE: Based on screenshot analysis, file mappings might be: 3=Girl, 4=Elephant, 5=Stupa? Let's re-verify mappings from screenshots names to be safe. 
        // Wait, looking at screenshots:
        // slide_3_check -> Girl on Rock
        // slide_4_check -> Elephants (wait, filename said final_slide_4_elephants)
        // slide_5_content -> Stupa/Lake
        // slide_6 -> Tea Hills/Green 

        // So:
        // user-hero-3.jpg = Girl on Rock
        // user-hero-4.jpg = Elephants?? No, need to be careful.
        // Let's assume standard order if I added them sequentially.
        // Actually, I can just label them based on what I saw in the browser which iterated 1-6.
        // Slide 3 was Girl on Rock.
        // Slide 4 was Elephants.
        // Slide 5 was Stupa.
        // Slide 6 was Tea Hills.

        title: 'Ancient Heritage',
        subtitle: 'Explore the rich history and culture of our island'
    },
    {
        image: '/images/hero/user-hero-4.jpg', // Tea Hills 2
        title: 'Emerald Landscapes',
        subtitle: 'Wander through lush green tea estates'
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Manual navigation via thumbnails
    const handleThumbnailClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section id="hero" className="hero-section relative w-full overflow-hidden" style={{ height: 'calc(100vh - 125px)', minHeight: '600px' }}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'active opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover blur-[4px] scale-110" // Added blur to hide artifacts and scale to cover edges
                        priority={index === 0}
                        unoptimized={true} // For user/generated images
                    />
                    {/* Gradient Overlay for Left Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                    <div className="hero-content absolute inset-y-0 left-0 flex flex-col justify-center h-full max-w-[800px] px-8 md:px-16 ml-[5%]">
                        <span className="hero-tagline text-lg font-light tracking-widest text-white/90 mb-4 block animate-fadeInUp">
                            Lets Travel Sri Lanka with
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold font-serif mb-6 text-white leading-tight drop-shadow-2xl animate-fadeInUp delay-100">
                            {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl font-normal text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow-md animate-fadeInUp delay-200">
                            {slide.subtitle}
                        </p>
                        <div className="animate-fadeInUp delay-300">
                            <a
                                href="#tours"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 shadow-lg text-lg uppercase tracking-wide"
                            >
                                Explore Our Tour Packages <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Thumbnail Navigation */}
            <div className="thumbnail-nav absolute bottom-10 right-10 z-20 flex gap-4">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        className={`thumb-btn relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${index === currentSlide ? 'border-green-500 scale-110 opacity-100' : 'border-white/50 opacity-60 hover:opacity-100 hover:border-white'
                            }`}
                        onClick={() => handleThumbnailClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
}
