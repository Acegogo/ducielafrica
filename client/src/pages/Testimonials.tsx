import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Emma Johnson',
      country: 'United Kingdom',
      rating: 5,
      text: 'Duciel Africa Adventures provided the most incredible safari experience of my life. The guides were knowledgeable, professional, and genuinely passionate about conservation. Every moment was unforgettable!',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      country: 'Italy',
      rating: 5,
      text: 'From the moment we arrived until we left, everything was perfectly organized. The accommodations were luxurious, the food was delicious, and the wildlife viewing was beyond our wildest expectations.',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 3,
      name: 'Yuki Tanaka',
      country: 'Japan',
      rating: 5,
      text: 'I have traveled to many countries, but this safari with Duciel was the most transformative experience. The team\'s commitment to sustainable tourism and community engagement truly sets them apart.',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      country: 'Australia',
      rating: 5,
      text: 'The Great Migration was absolutely spectacular! Duciel\'s team positioned us perfectly for the river crossings and provided fascinating insights about the ecosystem. Highly recommended!',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 5,
      name: 'Juan Martinez',
      country: 'Spain',
      rating: 5,
      text: 'Best decision ever to book with Duciel. The customized itinerary perfectly matched our interests, and the guides went above and beyond to make our trip special.',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 6,
      name: 'Lisa Chen',
      country: 'Canada',
      rating: 5,
      text: 'The combination of adventure, luxury, and authentic cultural experiences made this safari unforgettable. Duciel truly understands what travelers want and delivers it flawlessly.',
      image: 'https://via.placeholder.com/80'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/yeLWJxKMJBwaAUJh.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Guest Testimonials
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Hear from travelers who have experienced the magic of East Africa with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: 'Happy Travelers' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '50+', label: 'Destinations' },
              { number: '17+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'Montserrat' }}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="card-modern"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-accent">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="section-title" style={{ fontFamily: 'Montserrat' }}>
              Ready to Create Your Own Adventure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have experienced the magic of East Africa with Duciel
            </p>
            <a href="/booking" className="btn-primary inline-block">
              Book Your Safari Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
