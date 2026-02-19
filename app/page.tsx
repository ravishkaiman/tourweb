import Hero from '@/components/Hero';
import TourCard from '@/components/TourCard';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { tours } from '@/components/TourData';

export default function Home() {
  const sriLankaTours = tours.filter(t => t.category === 'Sri Lanka Tours');
  const oneDayTours = tours.filter(t => t.category === 'One Day Tours');

  return (
    <main>
      <Hero />

      <About />

      <section id="tours" className="tours-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Tour Packages</h2>
            <div className="section-divider"></div>
            <p>Experience the best of Sri Lanka in a day</p>
          </div>

          <div className="tours-grid">
            {tours.map((tour, index) => (
              <TourCard
                key={index}
                id={tour.id}
                title={tour.title}
                duration={tour.duration}
                pax={tour.pax}
                image={tour.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
