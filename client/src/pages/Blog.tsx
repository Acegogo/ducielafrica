import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Blog() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const articles = [
    {
      id: 1,
      title: 'Best Time to Visit Maasai Mara: A Complete Guide',
      excerpt: 'Discover the perfect season to witness the Great Migration and experience the best wildlife viewing in East Africa.',
      author: 'James Kipchoge',
      date: 'Feb 15, 2026',
      category: 'Destinations',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-1_1771505036000_na1fn_Z2FsbGVyeV9lbGVwaGFudF9oZXJk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTFfMTc3MTUwNTAzNjAwMF9uYTFmbl9aMkZzYkdWeWVWOWxiR1Z3YUdGdWRGOW9aWEprLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iiaPYu5QNJribg9ULnzp~1lO4YIWApYncfrqPqmg-07dAHRXv9kLVJGStdLNzJy6~TBE90riHzplliInj6AXlgHwCMyAbVEqi1~G~vdqnvWkgpqb4W7IgqPTYKhtxkyLnL~9pA1BdFJaPFoQ3VP8Jcvz0ULdxcqjSsBl5qy~~11hsDkfkzqxqS-bsBBK39UZBS59MdJNDnMMVcy2XdhqMj32DQcbFhkBN9CPxBGcAF75S3WmtMsZUNl7r9VNQhMH0EZZtthV6JVB6qPo79H9ZxAKQM7OsbNZpNHkB5hMb8aUuuiuh-Kxbnwv5npYraE2VVKi1CdcAJmQjL1AxuhlJQ__'
    },
    {
      id: 2,
      title: 'Safari Photography Tips: Capture Stunning Wildlife Moments',
      excerpt: 'Learn professional techniques to photograph African wildlife like a pro and create lasting memories of your adventure.',
      author: 'Sarah Mwangi',
      date: 'Feb 12, 2026',
      category: 'Photography',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-2_1771505038000_na1fn_Z2FsbGVyeV9naXJhZmZlX3N1bnNldA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTJfMTc3MTUwNTAzODAwMF9uYTFmbl9aMkZzYkdWeWVWOW5hWEpoWm1abFgzTjFibk5sZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KNJ3xBRvFt9hLyIAAMLeLHn2EjUofroIEkQ7ZF7aA7jDgtKeeJJDjTKd2KbDIgkuxSw7PQgC6FQ6CjCpg4hHAPFLu7nAGuvRZoQixMfTVE2MSuak2zXEZl7s4J927WZT5wWa4uundKMV51NMqwnHRkLX-tygallSLFkYSt~k0Ryllz91C~k4r4L9P4-nqojt~fkVPnMZA5wX6kwcFy0Adtcpl38oXctrTdBCVNCJaiWVWiWwuwBUelOVaXNc7q~gjO2F1PV~NRvUq275ueM1WBjBQFqEk2dNyfTD3oEzTgaz3vuevwG7B0nfVz6MS~OgoqnLqBdd37tBZKvB~wXo~A__'
    },
    {
      id: 3,
      title: 'Sustainable Tourism: How We Protect African Ecosystems',
      excerpt: 'Explore our commitment to responsible tourism and conservation efforts that protect East Africa\'s natural heritage.',
      author: 'Dr. Peter Kariuki',
      date: 'Feb 8, 2026',
      category: 'Conservation',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-3_1771505048000_na1fn_Z2FsbGVyeV96ZWJyYV9wbGFpbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTNfMTc3MTUwNTA0ODAwMF9uYTFmbl9aMkZzYkdWeWVWOTZaV0p5WVY5d2JHRnBibk0uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v-6pe5o8Dq6Q7vWCFFon3PL06cIVXOrUOUg6ZMHJQbTymTDknic~vMTorMVnCjtGqeKJAW6aXkh8HBbEe39BBL2piwzn19FdQ-iYqD-QsamZdQ2x00UPEFKGpyCMm2ab5Xw4eTKw2hpSiu07THN6ARWgtdrM~ERbN0vFGzgYlbFrrlCVSuY9kBNAem7hLKGvVh~fB5fWUFaADZNAASmgkTwcUK-b2HafssMCfH6iuh81gI7O1~FY4Bp265F8uJ8~zbtIk7BsKWEEDKdP5w4YYGo1224stb2nHRQvEglynIBgh45LwOmIpzYnUcvsnNHreCg5KEBhET31kswDUeLVAg__'
    },
    {
      id: 4,
      title: 'Cultural Experiences: Meet the Maasai and Samburu People',
      excerpt: 'Immerse yourself in authentic African culture through meaningful interactions with local communities.',
      author: 'Grace Kimani',
      date: 'Feb 5, 2026',
      category: 'Culture',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-4_1771505063000_na1fn_Z2FsbGVyeV9sZW9wYXJkX3RyZWU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTRfMTc3MTUwNTA2MzAwMF9uYTFmbl9aMkZzYkdWeWVWOXNaVzl3WVhKa1gzUnlaV1UuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I8lGn3lXALBiIDQetNsgzyaRQoQDYsxbHC7ih~Qz3KiaiukNQi68p5~a6CIi6DXe9C-CQeyJrHX4846xBzeNYEUemMoWpQ~l2NZTqzz5CwAwOT22BnpSy-J99I5T3T4frbG-lfjVXA9BHrJazCizBSYv~y6Zab4vny7m4IxnFORnpyROfx-~ZV~eTePFD7zEp5fgN5rq6St-dWma7JQw4DQibtw636kP3YCZvOHOFPtf04iqEeZ~zNTtQFyInSqu~PlXH7lbXGWuLulsR5E9hi3HKBxZtAqU4YVyDxuqzH1nPT4bzT1j6xpdI487cZezzXrOO8x1CPQGKOdA4EYKmg__'
    },
    {
      id: 5,
      title: 'Packing Guide for Your African Safari Adventure',
      excerpt: 'Essential items and tips to pack for a comfortable and memorable safari experience in East Africa.',
      author: 'Michael Ochieng',
      date: 'Feb 1, 2026',
      category: 'Travel Tips',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-5_1771505047000_na1fn_Z2FsbGVyeV9zYWZhcmlfdmVoaWNsZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTVfMTc3MTUwNTA0NzAwMF9uYTFmbl9aMkZzYkdWeWVWOXpZV1poY21sZmRtVm9hV05zWlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=E-8w3ksSb14irQqSfesuK9lmgxgKu5JrSY9RLgWch5ycR0cZsjsi90OlSfbAG1C6NeLp0GicChG90S-Sg9Yx-nq5vc1aGrSvKj3gE6UPqeofVCprDV-I~oKVHYJl7HpDCmdLwJM60zPa3kWQfnjC-qkDrTYSFk4sXvWuYhtMSs8Lb-AQCjgKIzDlPl8Wvdm0tcbcqa8zan2dl2kIAbqYyt8-osZ5NFbL8sI~WGewW56GP~ghTXp8D0g33X-k75qTx014ZWkdpLiwIZHJ0Gdn7og9uQpQZdlcgkrdARKuoyC1zvh-PmRZTR8S1UiQZcvKKHkSPzjxozR01mDlFhyLtA__'
    },
    {
      id: 6,
      title: 'Budget Safari: Experience Africa Without Breaking the Bank',
      excerpt: 'Discover affordable safari options and money-saving tips for experiencing the best of East Africa.',
      author: 'David Kipchoge',
      date: 'Jan 28, 2026',
      category: 'Budget Travel',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/qo7rXQ0BsBFtgHqUbLFzjH-img-1_1771505132000_na1fn_Z2FsbGVyeV9iZWFjaF90cm9waWNhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3FvN3JYUTBCc0JGdGdIcVViTEZ6akgtaW1nLTFfMTc3MTUwNTEzMjAwMF9uYTFmbl9aMkZzYkdWeWVWOWlaV0ZqYUY5MGNtOXdhV05oYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YVDVrulE2fWosxnZAjStZmnZkHAkosW5U~MNsrPU75cVJgK6tgzQMxg1HE08rNkKrm60-9JPvMp1qS0jaVLwzk9zytmI2BHgijPng8SdBevCWpNEiUZKmYqvFFyXBdFBJwa4YkaKzGdDjYhDZ10F81M96XjUzqqUO2whhovQG9lEiLaevI53gZYwotTPi0ZKwePHU06jazbNcoDOisTgeyWdUdnVJZrM~sZwqJvgg1c11SDq~brRXkVgiuGI8y2Vv45Yg53CWLKL3BFRtfUZnWCT5mRexUG9ZlNu66vgsUp1oIl7a1HD1RdrTTdfF3TFOi~vbOmHv2nm5oE1PyLUBw__'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/cMXUMBeHMnDfcCDS.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Travel Blog & Guides
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Expert insights, travel tips, and stories from the African wilderness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div
                key={article.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="card-modern group overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-secondary transition">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                </div>

                {/* Read More */}
                <a href="#" className="inline-flex items-center gap-2 text-accent hover:text-secondary transition font-semibold">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get exclusive travel tips, destination guides, and special offers delivered to your inbox
            </p>
            <div className="flex gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
