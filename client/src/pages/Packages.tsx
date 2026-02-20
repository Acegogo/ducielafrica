import { motion } from 'framer-motion';
import { Check, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function Packages() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const packages = [
    {
      name: 'Safari Essentials',
      duration: '5 Days / 4 Nights',
      price: '$1,800',
      pricePerDay: '$360/day',
      destinations: 'Nairobi, Maasai Mara',
      description: 'Perfect introduction to East African safaris',
      highlights: [
        'Game drives in Maasai Mara',
        'Professional guide included',
        'All meals included',
        'Comfortable lodge accommodation',
        'Airport transfers'
      ],
      popular: false,
      color: 'from-blue-500'
    },
    {
      name: 'Classic East Africa',
      duration: '7 Days / 6 Nights',
      price: '$2,800',
      pricePerDay: '$400/day',
      destinations: 'Kenya & Tanzania',
      description: 'Experience the best of Kenya and Tanzania',
      highlights: [
        'Maasai Mara & Serengeti',
        'Lake Nakuru National Park',
        'Expert naturalist guides',
        'Premium lodge stays',
        'Daily game drives',
        'Hot air balloon ride',
        'All meals & beverages'
      ],
      popular: true,
      color: 'from-purple-500'
    },
    {
      name: 'Beach & Bush Escape',
      duration: '8 Days / 7 Nights',
      price: '$3,200',
      pricePerDay: '$400/day',
      destinations: 'Safari + Zanzibar',
      description: 'Safari adventure combined with beach relaxation',
      highlights: [
        '4 days safari in Tanzania',
        '3 days in Zanzibar beach',
        'Snorkeling & water sports',
        'Luxury beach resort',
        'All meals included',
        'Spa treatments',
        'Sunset dhow cruise'
      ],
      popular: false,
      color: 'from-pink-500'
    },
    {
      name: 'Gorilla & Safari',
      duration: '9 Days / 8 Nights',
      price: '$4,800',
      pricePerDay: '$533/day',
      destinations: 'Uganda, Rwanda & Tanzania',
      description: 'Mountain gorilla trekking plus safari adventure',
      highlights: [
        'Mountain gorilla trekking',
        'Bwindi Impenetrable Forest',
        'Queen Elizabeth National Park',
        'Serengeti safari',
        'Expert guides',
        'Premium accommodations',
        'All meals & activities'
      ],
      popular: false,
      color: 'from-green-500'
    },
    {
      name: 'Grand Safari Adventure',
      duration: '10 Days / 9 Nights',
      price: '$4,500',
      pricePerDay: '$450/day',
      destinations: 'Kenya, Tanzania & Rwanda',
      description: 'Comprehensive East African experience',
      highlights: [
        'Maasai Mara wildlife',
        'Serengeti migration',
        'Ngorongoro Crater',
        'Lake Nakuru',
        'Professional guides',
        'Luxury lodges',
        'Hot air balloon',
        'Photography workshops'
      ],
      popular: true,
      color: 'from-amber-500'
    },
    {
      name: 'Photography Safari',
      duration: '10 Days / 9 Nights',
      price: '$5,500',
      pricePerDay: '$611/day',
      destinations: 'Kenya & Tanzania',
      description: 'Specialized photography-focused safari',
      highlights: [
        'Professional photography guide',
        'Best locations for photos',
        'Early morning/late evening drives',
        'Photography workshops',
        'Editing sessions',
        'Premium camera equipment rental',
        'Luxury accommodations',
        'All meals included'
      ],
      popular: false,
      color: 'from-red-500'
    },
    {
      name: 'Luxury Expedition',
      duration: '12 Days / 11 Nights',
      price: '$7,500',
      pricePerDay: '$625/day',
      destinations: 'All East Africa',
      description: 'Ultimate luxury safari experience',
      highlights: [
        'Private guide & vehicle',
        'All major destinations',
        'Ultra-luxury lodges',
        'Helicopter transfers',
        'Gourmet dining',
        'Spa treatments',
        'Private game drives',
        'Personalized itinerary'
      ],
      popular: false,
      color: 'from-indigo-500'
    },
    {
      name: 'Honeymoon Special',
      duration: '7 Days / 6 Nights',
      price: '$6,500',
      pricePerDay: '$929/day',
      destinations: 'Kenya & Tanzania',
      description: 'Romantic safari for couples',
      highlights: [
        'Private accommodations',
        'Romantic dinners',
        'Couples massage',
        'Private game drives',
        'Sunset picnics',
        'Champagne service',
        'Photography session',
        'All meals & activities'
      ],
      popular: false,
      color: 'from-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/yeLWJxKMJBwaAUJh.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Safari Packages
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Choose the perfect adventure for you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {packages.map((pkg, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className={`relative card-modern overflow-hidden border-2 ${pkg.popular ? 'border-accent lg:scale-105' : 'border-border'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${pkg.color} to-transparent p-4 rounded-lg mb-4 h-24 flex items-end`}>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-gray-200 text-sm">{pkg.duration}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-3xl font-bold text-accent mb-1">{pkg.price}</p>
                  <p className="text-muted-foreground text-sm">{pkg.pricePerDay}</p>
                </div>

                <p className="text-foreground mb-4 text-sm">{pkg.description}</p>

                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  {pkg.destinations}
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.slice(0, 4).map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                  {pkg.highlights.length > 4 && (
                    <p className="text-accent text-sm font-semibold">+ {pkg.highlights.length - 4} more</p>
                  )}
                </div>

                <Link href="/booking">
                  <a className="btn-primary w-full text-center block">Book Package</a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="section-title" style={{ fontFamily: 'Montserrat' }}>
              Package Comparison
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-accent">Feature</th>
                  {packages.slice(0, 4).map((pkg, idx) => (
                    <th key={idx} className="text-center py-4 px-4 font-bold text-accent">{pkg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Duration', values: ['5 Days', '7 Days', '8 Days', '9 Days'] },
                  { feature: 'Price per Person', values: ['$1,800', '$2,800', '$3,200', '$4,800'] },
                  { feature: 'Destinations', values: ['2', '3', '2', '3'] },
                  { feature: 'Meals Included', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
                  { feature: 'Guide Included', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
                  { feature: 'Hot Air Balloon', values: ['No', 'Yes', 'No', 'No'] },
                  { feature: 'Airport Transfer', values: ['Yes', 'Yes', 'Yes', 'Yes'] }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition">
                    <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="text-center py-4 px-4 text-foreground">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="section-title" style={{ fontFamily: 'Montserrat' }}>
              Ready to Book Your Safari?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us or use our booking system to reserve your adventure today
            </p>
            <Link href="/booking">
              <a className="btn-primary inline-block">Start Booking</a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
