import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-1_1771503719000_na1fn_bWFhc2FpX21hcmFfbGlvbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTFfMTc3MTUwMzcxOTAwMF9uYTFmbl9iV0ZoYzJGcFgyMWhjbUZmYkdsdmJuTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZcsjAR31rsOIj25r~jCnBJTS4iK1aS318R7NaBtN4tVV40gi047LsffXi31kofjyFBnAA4Vm0QlAhmm8dmJNN0UqocOnMa5rIxvVSnGqeZLthdqgtruQJQWD-KeYO5H-Zzwtu54n~CsBOREjaZDlIxvn3HxNd7G8L5JvysvS726rVBaMyuF44dAkXIK5ArBLUsmuulIsULWCyHEGzunnFMUzqTr9qCBPVILGFL9cPWJStPxIHWWN2MfOXTy9JfQaxv-GrZHB~mROPHTnUvVm7S-th1xp5wRGEnqTHvIvxNIN5dUfJtKm7MgyJT4qHGxhwJwnaD2dfI7Wx85GhIXs3g__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-lg"
            style={{ fontFamily: 'Montserrat' }}
          >
            Escape The Ordinary
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the magic of East Africa with Duciel Adventures
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/booking">
              <a className="btn-primary">Book Your Adventure</a>
            </Link>
            <Link href="/destinations">
              <a className="btn-outline">Explore Destinations</a>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: Award, label: '17+ Years', value: 'Experience' },
              { icon: Users, label: '5,000+', value: 'Happy Travelers' },
              { icon: MapPin, label: '50+', value: 'Destinations' },
              { icon: Calendar, label: '100%', value: 'Satisfaction' }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-2xl font-bold text-accent">{stat.label}</p>
                <p className="text-muted-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most breathtaking destinations across East Africa
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Maasai Mara',
                country: 'Kenya',
                image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-1_1771503719000_na1fn_bWFhc2FpX21hcmFfbGlvbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTFfMTc3MTUwMzcxOTAwMF9uYTFmbl9iV0ZoYzJGcFgyMWhjbUZmYkdsdmJuTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZcsjAR31rsOIj25r~jCnBJTS4iK1aS318R7NaBtN4tVV40gi047LsffXi31kofjyFBnAA4Vm0QlAhmm8dmJNN0UqocOnMa5rIxvVSnGqeZLthdqgtruQJQWD-KeYO5H-Zzwtu54n~CsBOREjaZDlIxvn3HxNd7G8L5JvysvS726rVBaMyuF44dAkXIK5ArBLUsmuulIsULWCyHEGzunnFMUzqTr9qCBPVILGFL9cPWJStPxIHWWN2MfOXTy9JfQaxv-GrZHB~mROPHTnUvVm7S-th1xp5wRGEnqTHvIvxNIN5dUfJtKm7MgyJT4qHGxhwJwnaD2dfI7Wx85GhIXs3g__',
                description: 'Witness the Great Migration and incredible wildlife'
              },
              {
                name: 'Serengeti',
                country: 'Tanzania',
                image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-2_1771503723000_na1fn_c2VyZW5nZXRpX21pZ3JhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTJfMTc3MTUwMzcyMzAwMF9uYTFmbl9jMlZ5Wlc1blpYUnBYMjFwWjNKaGRHbHZiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dOyqsTTyaAeLJ04bu4Q8b~OtU7sxnABYAmPa21F0TCnl365CxejX2l0-P9GnfJVf7CKPadbsC3ipcg0XAqjOPUTifVmTnfnnMV-OOV18CqTWSYzkC-q5USGcsYa-l4VfMTdvG9w3NCVjoihGuobT3OtciFhpXhLUOetk~cZzc6zYjZAKet4lBdBvZtSN6j5NFA1mqP6u6hM73taKIjf--iZmYSfE-KS~oRzhp57I02xmVNw9BISD68a3oF-JkzqL8DT4X2eoECl8vLPPapGDNodBwITir0qnxMhP-89~fsBt3j5JYS3grCBVLtwLYvjgvD13BCSNLFJVJRWv-6TZWA__',
                description: 'Endless plains and abundant wildlife'
              },
              {
                name: 'Zanzibar',
                country: 'Tanzania',
                image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/cYyWh09CRHrhWGxId6XOuo-img-2_1771506118000_na1fn_emFuemliYXJfYmVhY2hfZnVsbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L2NZeVdoMDlDUkhyaFdHeElkNlhPdW8taW1nLTJfMTc3MTUwNjExODAwMF9uYTFmbl9lbUZ1ZW1saVlYSmZZbVZoWTJoZlpuVnNiQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c-cg9DoHEKNVcKbTGeSXqAy-zhhxyscdZb-7nyKfjzHt2Bh8OKnjLvmY1Et0UWot-o5L7JvE6E6WuM-tHIJjLaaPPMB8Frntsxnt6S1UX-mWR6WYijvAz-VXMwkLYywwDpXUuYc0ELlWx5QKbMtvIJo2XcHrzI31cCgLwIp4CanfpjBFh1OCHWU~L9Q5GYmvP2uo6bFpd1xQjb3mO3ZEV3wGZk9E-8zSWRF6orL9jWL-dfCKbKUmyD4G5gw4Kwh40pOLz1qi7C3CAIPYZ~orlzm~oT4~19VSx33h9r0HAB45MyftXQRK5Fq-wyhBQCWYLoNztfUI6PUQpFiEq3d8fw__',
                description: 'Pristine beaches and tropical paradise'
              }
            ].map((dest, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="card-modern overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-1">{dest.name}</h3>
                <p className="text-muted-foreground mb-3">{dest.country}</p>
                <p className="text-foreground mb-4">{dest.description}</p>
                <Link href="/destinations">
                  <a className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="section-title">Our Safari Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully curated packages for every adventure level and budget
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { name: 'Safari Essentials', duration: '5 Days', price: '$1,800', color: 'from-blue-500' },
              { name: 'Classic East Africa', duration: '7 Days', price: '$2,800', color: 'from-purple-500' },
              { name: 'Grand Adventure', duration: '10 Days', price: '$4,500', color: 'from-pink-500' },
              { name: 'Luxury Expedition', duration: '12 Days', price: '$7,500', color: 'from-amber-500' }
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-gradient-to-br ${pkg.color} to-transparent p-8 rounded-xl border border-border hover:border-accent transition-all duration-300 group`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-200 mb-4">{pkg.duration}</p>
                <p className="text-3xl font-bold text-accent mb-6">{pkg.price}</p>
                <Link href="/packages">
                  <a className="btn-primary w-full text-center block">View Details</a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title mb-6">Ready for Your Adventure?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your dream safari today and create memories that will last a lifetime
            </p>
            <Link href="/booking">
              <a className="btn-primary inline-block">Start Booking Now</a>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
