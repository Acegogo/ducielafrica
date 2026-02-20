import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

function AnimatedNumber({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every aspect of our service, from guides to accommodations.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We support local communities through employment, education, and sustainable development initiatives.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We protect East Africa\'s natural heritage through responsible tourism and conservation efforts.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is passionate about sharing the beauty and wonder of African wildlife and culture.'
    }
  ];

  const team = [
    {
      name: 'David Maina',
      role: 'Founder & CEO',
      bio: 'With 20+ years of safari experience, David founded Duciel to create unforgettable adventures while supporting local communities.'
    },
    {
      name: 'Flency Atswenje',
      role: 'Head of Operations',
      bio: 'Flency ensures every safari runs flawlessly with meticulous attention to detail and deep knowledge of East African routes and logistics.'
    },
    {
      name: 'Peter Wasaki',
      role: 'Conservation Director',
      bio: 'Peter leads our conservation initiatives and works with wildlife organizations to protect endangered species and ecosystems.'
    },
    {
      name: 'Grace Kimani',
      role: 'Cultural Liaison',
      bio: 'Grace facilitates meaningful interactions between travelers and local communities, ensuring authentic cultural exchanges.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/EsZTaUcPAhHUePBw.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              About Duciel Africa Adventures
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Crafting unforgettable safari experiences since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-accent mb-6" style={{ fontFamily: 'Montserrat' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, Duciel Africa Adventures began with a simple mission: to create authentic, transformative safari experiences that honor both the land and its people. What started as a small operation has grown into one of East Africa's most respected tour operators.
                </p>
                <p>
                  Our name, "Duciel," reflects our commitment to creating moments of pure joy and wonder. We believe that travel should not only enrich the traveler but also benefit the communities and ecosystems we visit.
                </p>
                <p>
                  Over the past 17 years, we've guided more than 5,000 travelers through East Africa's most spectacular destinations. From the thundering herds of the Great Migration to intimate encounters with mountain gorillas, we've created memories that last a lifetime.
                </p>
                <p>
                  Today, we continue to innovate and expand our offerings while maintaining the core values that define us: excellence, sustainability, community support, and an unwavering passion for Africa.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="card-modern relative overflow-hidden p-8 lg:p-12 min-h-[400px] flex items-center justify-center border-none shadow-2xl"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?auto=format&fit=crop&q=80&w=1200")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

              <div className="relative z-10 grid grid-cols-2 gap-8 md:gap-12 w-full text-center">
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2" style={{ fontFamily: 'Montserrat' }}>
                    <AnimatedNumber value={17} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-200 uppercase tracking-wider">Years of Excellence</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2" style={{ fontFamily: 'Montserrat' }}>
                    <AnimatedNumber value={5000} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-200 uppercase tracking-wider">Happy Travelers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2" style={{ fontFamily: 'Montserrat' }}>
                    <AnimatedNumber value={50} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-200 uppercase tracking-wider">Destinations</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2" style={{ fontFamily: 'Montserrat' }}>
                    <AnimatedNumber value={100} suffix="%" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-200 uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="section-title" style={{ fontFamily: 'Montserrat' }}>
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="card-modern text-center"
              >
                <value.icon className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-accent mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="section-title" style={{ fontFamily: 'Montserrat' }}>
              Meet Our Leadership Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="card-modern text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-accent-foreground font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-accent mb-1">{member.name}</h3>
                <div className="text-secondary font-semibold mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
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
              Join Our Safari Family
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the Duciel difference and discover why thousands of travelers trust us with their African adventures
            </p>
            <a href="/booking" className="btn-primary inline-block">
              Start Your Adventure
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
