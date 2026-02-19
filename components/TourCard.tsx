import Image from 'next/image';
import Link from 'next/link';

interface TourProps {
    id: string;
    title: string;
    duration: string;
    pax: string;
    image: string;
}

export default function TourCard({ id, title, duration, pax, image }: TourProps) {
    return (
        <Link href={`/tours/${id}`} className="block group">
            <div className="tour-card relative overflow-hidden rounded-xl h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="tour-content absolute bottom-0 left-0 w-full p-6 text-white z-10">
                    <h3 className="text-2xl font-bold font-serif mb-2">{title}</h3>
                    <div className="tour-meta flex gap-4 text-sm text-gray-200">
                        <span className="flex items-center gap-1">
                            ⏱️ {duration}
                        </span>
                        <span className="flex items-center gap-1">
                            👥 {pax}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
