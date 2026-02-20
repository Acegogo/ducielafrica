import { motion } from 'framer-motion';
import { Wifi, Utensils, Users, MapPin } from 'lucide-react';

export default function Accommodations() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const lodges = [
    {
      id: 1,
      name: 'Serengeti Luxury Camp',
      location: 'Serengeti, Tanzania',
      rating: 5,
      price: '$450/night',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-1_1771505036000_na1fn_Z2FsbGVyeV9lbGVwaGFudF9oZXJk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTFfMTc3MTUwNTAzNjAwMF9uYTFmbl9aMkZzYkdWeWVWOWxiR1Z3YUdGdWRGOW9aWEprLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iiaPYu5QNJribg9ULnzp~1lO4YIWApYncfrqPqmg-07dAHRXv9kLVJGStdLNzJy6~TBE90riHzplliInj6AXlgHwCMyAbVEqi1~G~vdqnvWkgpqb4W7IgqPTYKhtxkyLnL~9pA1BdFJaPFoQ3VP8Jcvz0ULdxcqjSsBl5qy~~11hsDkfkzqxqS-bsBBK39UZBS59MdJNDnMMVcy2XdhqMj32DQcbFhkBN9CPxBGcAF75S3WmtMsZUNl7r9VNQhMH0EZZtthV6JVB6qPo79H9ZxAKQM7OsbNZpNHkB5hMb8aUuuiuh-Kxbnwv5npYraE2VVKi1CdcAJmQjL1AxuhlJQ__',
      description: 'Luxury tented camp with stunning views of the Serengeti plains. All-inclusive amenities with gourmet dining.',
      amenities: ['WiFi', 'Fine Dining', 'Pool', 'Spa']
    },
    {
      id: 2,
      name: 'Maasai Mara Safari Lodge',
      location: 'Maasai Mara, Kenya',
      rating: 5,
      price: '$380/night',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/r9hxA5lXXEsQXneDt3YXL3-img-2_1771505038000_na1fn_Z2FsbGVyeV9naXJhZmZlX3N1bnNldA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3I5aHhBNWxYWEVzUVhuZUR0M1lYTDMtaW1nLTJfMTc3MTUwNTAzODAwMF9uYTFmbl9aMkZzYkdWeWVWOW5hWEpoWm1abFgzTjFibk5sZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KNJ3xBRvFt9hLyIAAMLeLHn2EjUofroIEkQ7ZF7aA7jDgtKeeJJDjTKd2KbDIgkuxSw7PQgC6FQ6CjCpg4hHAPFLu7nAGuvRZoQixMfTVE2MSuak2zXEZl7s4J927WZT5wWa4uundKMV51NMqwnHRkLX-tygallSLFkYSt~k0Ryllz91C~k4r4L9P4-nqojt~fkVPnMZA5wX6kwcFy0Adtcpl38oXctrTdBCVNCJaiWVWiWwuwBUelOVaXNc7q~gjO2F1PV~NRvUq275ueM1WBjBQFqEk2dNyfTD3oEzTgaz3vuevwG7B0nfVz6MS~OgoqnLqBdd37tBZKvB~wXo~A__',
      description: 'Premier lodge overlooking the Maasai Mara Reserve. Exceptional wildlife viewing and authentic cultural experiences.',
      amenities: ['WiFi', 'Restaurant', 'Game Drives', 'Cultural Tours']
    },
    {
      id: 3,
      name: 'Zanzibar Beach Resort',
      location: 'Zanzibar, Tanzania',
      rating: 5,
      price: '$320/night',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/qo7rXQ0BsBFtgHqUbLFzjH-img-1_1771505132000_na1fn_Z2FsbGVyeV9iZWFjaF90cm9waWNhbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3FvN3JYUTBCc0JGdGdIcVViTEZ6akgtaW1nLTFfMTc3MTUwNTEzMjAwMF9uYTFmbl9aMkZzYkdWeWVWOWlaV0ZqYUY5MGNtOXdhV05oYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YVDVrulE2fWosxnZAjStZmnZkHAkosW5U~MNsrPU75cVJgK6tgzQMxg1HE08rNkKrm60-9JPvMp1qS0jaVLwzk9zytmI2BHgijPng8SdBevCWpNEiUZKmYqvFFyXBdFBJwa4YkaKzGdDjYhDZ10F81M96XjUzqqUO2whhovQG9lEiLaevI53gZYwotTPi0ZKwePHU06jazbNcoDOisTgeyWdUdnVJZrM~sZwqJvgg1c11SDq~brRXkVgiuGI8y2Vv45Yg53CWLKL3BFRtfUZnWCT5mRexUG9ZlNu66vgsUp1oIl7a1HD1RdrTTdfF3TFOi~vbOmHv2nm5oE1PyLUBw__',
      description: 'Tropical paradise on pristine beaches. Perfect for relaxation after your safari adventure.',
      amenities: ['Beach Access', 'Water Sports', 'Seafood Restaurant', 'Sunset Bar']
    },
    {
      id: 4,
      name: 'Kilimanjaro Mountain Lodge',
      location: 'Mount Kilimanjaro, Tanzania',
      rating: 5,
      price: '$290/night',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/qo7rXQ0BsBFtgHqUbLFzjH-img-3_1771505113000_na1fn_Z2FsbGVyeV9tb3VudGFpbl9raWxpbWFuamFybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3FvN3JYUTBCc0JGdGdIcVViTEZ6akgtaW1nLTNfMTc3MTUwNTExMzAwMF9uYTFmbl9aMkZzYkdWeWVWOXRiM1Z1ZEdGcGJsOXJhV3hwYldGdWFtRnlidy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TyWPXOHDL12FCNMJ7yqydMfufLR3Rn3nFF3XrioItXSTzIY1FAYV-H6Em8ZrlYreBY8OjRVJ3DioCBmCmwYcHI-93BX6~aSkazwskWMgOQJaPHpf-N6V-GBOwRLOdp6x7Wfd3p9OANGwXf6zBzWxEde9lmVuDYSvb4cf0Lp2Fvm~Gd9Wb~tS9sRvRLuX730jXfcpYlHZmgchSyJT0Va9rJgKJKtUgAp9VT6H1H6XuB9Ve~mpMoERFL7u9eOlfHjL-PIf6N6y~k~RmDh5nM6TDmi4ZJnJIMQSiJULoXSs6a3YE1bx3QzRmQlwZreOKT0nRGDAV~rd6~k1pg~nYIVgYQ__',
      description: 'Base camp lodge for Kilimanjaro climbers. Comfortable accommodations with expert climbing guides.',
      amenities: ['Climbing Guides', 'Equipment Rental', 'Training Programs', 'Medical Support']
    },
    {
      id: 5,
      name: 'Ngorongoro Crater Lodge',
      location: 'Ngorongoro, Tanzania',
      rating: 5,
      price: '$410/night',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/qo7rXQ0BsBFtgHqUbLFzjH-img-5_1771505110000_na1fn_Z2FsbGVyeV9mbGFtaW5nb19sYWtl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3FvN3JYUTBCc0JGdGdIcVViTEZ6akgtaW1nLTVfMTc3MTUwNTExMDAwMF9uYTFmbl9aMkZzYkdWeWVWOW1iR0Z0YVc1bmIxOXNZV3RsLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dwmo~Nfl3TmBWinO3kTcBt0LLolqcFAZOqEbr1mVWGzprPWKYFK~qN1GT00Ku47712ItQ6VZjTYGYUOlTSLiJor-wXK~55LkNlU3R3qQTCQxBQXs6zY5CshsRCAM-iug392mRSYwz75IGUrHBW4YJQR2WNqywa~L5pAtkN-gkUvGNxVH0vxBlcP4Tc9kW-~BqcbIpsCnmcAOIEaGMwTJOHhpV2MmCAmkwZI1REap-Dm-aQrkCFpPmfqHrD9L1DOEWRakec8mCNQ8pTuaaW60FeJYOxbEOSLg8~qB1dlMsfRwk7OI0FTrgpAC-otSSRbMC4AeZnLAlJ8NKa23JrnI7Q__',
      description: 'Spectacular lodge perched on the crater rim with breathtaking views. Unique ecosystem exploration.',
      amenities: ['Crater Views', 'Guided Hikes', 'Wildlife Tours', 'Gourmet Cuisine']
    },
    {
      id: 6,
      name: 'Amboseli National Park Lodge',
      location: 'Amboseli, Kenya',
      rating: 5,
      price: '$350/night',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/qo7rXQ0BsBFtgHqUbLFzjH-img-4_1771505109000_na1fn_Z2FsbGVyeV9yaGlub19ncmFzc2xhbmQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3FvN3JYUTBCc0JGdGdIcVViTEZ6akgtaW1nLTRfMTc3MTUwNTEwOTAwMF9uYTFmbl9aMkZzYkdWeWVWOXlhR2x1YjE5bmNtRnpjMnhoYm1RLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cg7h3L70PoiWjbgNZyJ~8ZxnG0U8KdAcdyLVPhUUwV0p0lh4mYkPKvFp4eHSqtoNZTpP6XCxifnaNk2RenhRQf1SYdWrp4o1PoJtkEudFeD3awZfXBpI22h-Oq~1tAZekRAU7y-4VicknasaXKg749SMS0StFoV76WNb2ixCvdHjN4Cbw87NeGfwMVG6yHiomPfB0lZxTHqWpCeTakcNN~UnAjA64BPxXmyNSIENPkXG~K5lZRooCJ5dcrP0oLnMZdg3~qmyCcAQFqQ8blwRRC~n1q2C3RVgU9ZjYNhrc76siVxWA5cWYg6NjowXOcovJ54cEgaBZfKjzHigFGUAhg__',
      description: 'Perfect for elephant viewing with Kilimanjaro backdrop. Premium safari experience in Kenya.',
      amenities: ['Elephant Viewing', 'Kilimanjaro Views', 'Game Drives', 'Spa Services']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/sPifPdPgeehOHRHx.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Premium Accommodations
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Luxury lodges and camps across East Africa's most spectacular destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lodges Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lodges.map((lodge) => (
              <motion.div
                key={lodge.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="card-modern group overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={lodge.image}
                    alt={lodge.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
                    {lodge.price}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-accent mb-1">{lodge.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  {lodge.location}
                </div>
                <p className="text-muted-foreground text-sm mb-4">{lodge.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {lodge.amenities.map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-1">
                    {[...Array(lodge.rating)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <a href="/booking" className="text-accent hover:text-secondary transition font-semibold">
                    Book Now →
                  </a>
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
              Find Your Perfect Accommodation
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Each of our partner lodges offers unique experiences and world-class amenities
            </p>
            <a href="/booking" className="btn-primary inline-block">
              Reserve Your Stay
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
