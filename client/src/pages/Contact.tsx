import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/HcputvXSWQsecGVB.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Get in touch with our team for more information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@ducieladventures.com',
                link: 'mailto:info@ducieladventures.com'
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+254 (0) 123 456 789',
                link: 'tel:+254123456789'
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Nairobi, Kenya',
                link: '#'
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="no-underline"
              >
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="card-modern text-center cursor-pointer hover:border-accent transition"
                >
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
                  <p className="text-muted-foreground hover:text-accent transition">{item.content}</p>
                </motion.div>
              </a>
            ))}
          </motion.div>

          {/* Company Info */}
          <motion.div {...fadeInUp} className="card-modern mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6" style={{ fontFamily: 'Montserrat' }}>
              About Duciel Africa Adventures
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 17 years of experience in the tourism industry, Duciel Africa Adventures has established itself as a leading safari operator across East Africa. Our commitment to excellence, authentic experiences, and sustainable tourism practices has made us the trusted choice for thousands of travelers worldwide.
              </p>
              <p>
                We specialize in creating unforgettable safari experiences that showcase the raw beauty of Africa's wildlife, landscapes, and cultures. From the iconic Maasai Mara to the pristine beaches of Zanzibar, we offer carefully curated packages that cater to every adventure level and budget.
              </p>
              <p>
                Our team of experienced guides, professional drivers, and dedicated staff are committed to ensuring your safari experience exceeds all expectations. We pride ourselves on personalized service, attention to detail, and creating memories that last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-8" style={{ fontFamily: 'Montserrat' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is the best time to visit East Africa?',
                  a: 'The best time for wildlife viewing is June to October (dry season) when animals congregate around water sources. However, each season offers unique experiences and advantages.'
                },
                {
                  q: 'Do I need a visa to visit Kenya?',
                  a: 'Most visitors require a visa to enter Kenya. We recommend checking with your local embassy for specific requirements. We can assist with visa information and documentation.'
                },
                {
                  q: 'What vaccinations are required?',
                  a: 'Yellow fever vaccination is recommended. Consult your doctor about malaria prophylaxis and other vaccinations based on your travel history and health status.'
                },
                {
                  q: 'Are your safaris suitable for families?',
                  a: 'Absolutely! We offer family-friendly safari packages with activities suitable for all ages. Our guides are experienced in working with children and can customize experiences accordingly.'
                },
                {
                  q: 'What is included in your packages?',
                  a: 'Our packages typically include accommodation, meals, game drives, park fees, and professional guides. Specific inclusions vary by package. Check individual package details for complete information.'
                },
                {
                  q: 'Can I customize my safari itinerary?',
                  a: 'Yes! We offer fully customizable itineraries. Contact our team to discuss your preferences, interests, and budget, and we\'ll create the perfect safari experience for you.'
                }
              ].map((faq, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="card-modern"
                >
                  <h3 className="text-lg font-bold text-accent mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold text-accent mb-8" style={{ fontFamily: 'Montserrat' }}>
              Follow Us
            </h2>
            <div className="flex gap-6 justify-center">
              {[
                { icon: Facebook, label: 'Facebook', link: '#' },
                { icon: Instagram, label: 'Instagram', link: '#' },
                { icon: Twitter, label: 'Twitter', link: '#' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="inline-flex w-12 h-12 bg-card border border-border rounded-full items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
                  title={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="section-title" style={{ fontFamily: 'Montserrat' }}>
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today or explore our packages to begin planning your dream safari
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:info@ducieladventures.com" className="btn-primary inline-block">
                Send Email
              </a>
              <a href="tel:+254123456789" className="btn-outline inline-block">
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
