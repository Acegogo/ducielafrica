'use client';
import { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const destinations = [
    {
      name: 'Maasai Mara',
      region: 'Kenya',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-1_1771503719000_na1fn_bWFhc2FpX21hcmFfbGlvbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTFfMTc3MTUwMzcxOTAwMF9uYTFmbl9iV0ZoYzJGcFgyMWhjbUZmYkdsdmJuTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZcsjAR31rsOIj25r~jCnBJTS4iK1aS318R7NaBtN4tVV40gi047LsffXi31kofjyFBnAA4Vm0QlAhmm8dmJNN0UqocOnMa5rIxvVSnGqeZLthdqgtruQJQWD-KeYO5H-Zzwtu54n~CsBOREjaZDlIxvn3HxNd7G8L5JvysvS726rVBaMyuF44dAkXIK5ArBLUsmuulIsULWCyHEGzunnFMUzqTr9qCBPVILGFL9cPWJStPxIHWWN2MfOXTy9JfQaxv-GrZHB~mROPHTnUvVm7S-th1xp5wRGEnqTHvIvxNIN5dUfJtKm7MgyJT4qHGxhwJwnaD2dfI7Wx85GhIXs3g__',
      description: 'Witness the Great Migration and incredible wildlife',
      bestSeason: 'Jul - Oct',
      wildlife: 'Lions, Elephants, Zebras, Wildebeest',
      activities: 'Game Drives, Hot Air Balloon, Photography'
    },
    {
      name: 'Serengeti',
      region: 'Tanzania',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-2_1771503723000_na1fn_c2VyZW5nZXRpX21pZ3JhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTJfMTc3MTUwMzcyMzAwMF9uYTFmbl9jMlZ5Wlc1blpYUnBYMjFwWjNKaGRHbHZiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dOyqsTTyaAeLJ04bu4Q8b~OtU7sxnABYAmPa21F0TCnl365CxejX2l0-P9GnfJVf7CKPadbsC3ipcg0XAqjOPUTifVmTnfnnMV-OOV18CqTWSYzkC-q5USGcsYa-l4VfMTdvG9w3NCVjoihGuobT3OtciFhpXhLUOetk~cZzc6zYjZAKet4lBdBvZtSN6j5NFA1mqP6u6hM73taKIjf--iZmYSfE-KS~oRzhp57I02xmVNw9BISD68a3oF-JkzqL8DT4X2eoECl8vLPPapGDNodBwITir0qnxMhP-89~fsBt3j5JYS3grCBVLtwLYvjgvD13BCSNLFJVJRWv-6TZWA__',
      description: 'Endless plains and abundant wildlife',
      bestSeason: 'Year-round',
      wildlife: 'Big Five, Cheetahs, Hyenas, Giraffes',
      activities: 'Safari, Walking Tours, Cultural Visits'
    },
    {
      name: 'Ngorongoro Crater',
      region: 'Tanzania',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/hrNdXbcSAdtSBaeA.jpg',
      description: 'Volcanic crater with diverse ecosystem',
      bestSeason: 'Jun - Oct',
      wildlife: 'Rhinos, Flamingos, Zebras, Wildebeest',
      activities: 'Crater Tour, Photography, Nature Walk'
    },
    {
      name: 'Mount Kilimanjaro',
      region: 'Tanzania',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/qwpdUnTneWjiLBrg.jpg',
      description: 'Africa\'s highest peak with stunning views',
      bestSeason: 'Jan - Mar, Aug - Oct',
      wildlife: 'Mountain Goats, Eagles, Buffaloes',
      activities: 'Trekking, Climbing, Photography'
    },
    {
      name: 'Zanzibar',
      region: 'Tanzania',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/IzssDJTOXnmIVhaH.jpg',
      description: 'Pristine beaches and tropical paradise',
      bestSeason: 'Jun - Oct',
      wildlife: 'Marine Life, Dolphins, Sea Turtles',
      activities: 'Beach, Snorkeling, Water Sports, Culture'
    },
    {
      name: 'Lake Nakuru',
      region: 'Kenya',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/uQAaY3Z3uBvkBDJsnFrDk3-img-1_1771503773000_na1fn_bGFrZV9uYWt1cnVfZmxhbWluZ29z.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3VRQWFZM1ozdUJ2a0JESnNuRnJEazMtaW1nLTFfMTc3MTUwMzc3MzAwMF9uYTFmbl9iR0ZyWlY5dVlXdDFjblZmWm14aGJXbHVaMjl6LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fYvZ0kvldIUxL7cGjPJZtWl-HyZ4-uIk9uy4wbPJMFEdr~nfzbsdIBMqrm-3ba30j2tuvcgVdg6i6Mp-5Cjudb0r7iisu7MTwc2W7nMKFuhVlkua~64C-uchTXwOGsWti~--HxpNsWmJVl9A9znclHcpz6pFqT61aev2xOPFSiZgOZr1CQDl1VVGiFsDgzdPQZiHN1-PyxXWdSw8wxdOHxrNw-ZNovIEkbECUVotFz-7MH9cCHwbj-XgcHqQkqt9kw0Do34UDjRk5C60-1sCZg8LZSGIWWZLrESAvaUm8EqMCzQs20rzjk72RgJlJivMkHN6BS4PS7JGvB-mpzJP2A__',
      description: 'Lake with thousands of pink flamingos',
      bestSeason: 'Nov - Mar',
      wildlife: 'Flamingos, Pelicans, Rhinos, Leopards',
      activities: 'Bird Watching, Photography, Safari'
    },
    {
      name: 'Amboseli',
      region: 'Kenya',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/uQAaY3Z3uBvkBDJsnFrDk3-img-3_1771503780000_na1fn_YW1ib3NlbGlfZWxlcGhhbnRz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3VRQWFZM1ozdUJ2a0JESnNuRnJEazMtaW1nLTNfMTc3MTUwMzc4MDAwMF9uYTFmbl9ZVzFpYjNObGJHbGZaV3hsY0doaGJuUnouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JJUQ8mcs3lQMQfAw-QXRuMk9ADUTcx1XdCynxjhg6Cea8VOpH7yiZ08Vl0pWHSN1KEmqv9XXhaK6vd9GmHI84ffPS3cIOh4UwLRdBBEeyUqCneyzwIjWWQVBvULSODjmjctsI1K-Xp3xHpfzwUxyu6ysECxPD6zdV4qPz6KUXF0zcIkyPZq-DPNrT90W3-BYge8p8kkliYf8wIVXwMsDneX7fNVKs5lW~52pZSrLZw-VGEY~9iwDhEN7-mfFcCjqyBGKNjzLQJpCBJ6OCJOIe~6oUPBUNICSysI0jJzuoFG5EzbAWTcZDvl11mNPyKUhbxloOyzybFzntjuGXVe2WA__',
      description: 'Elephants with Kilimanjaro backdrop',
      bestSeason: 'Jul - Oct',
      wildlife: 'Elephants, Lions, Giraffes, Zebras',
      activities: 'Safari, Photography, Guided Tours'
    },
    {
      name: 'Bwindi Gorillas',
      region: 'Uganda',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/uQAaY3Z3uBvkBDJsnFrDk3-img-2_1771503770000_na1fn_YndpbmRpX2dvcmlsbGFz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3VRQWFZM1ozdUJ2a0JESnNuRnJEazMtaW1nLTJfMTc3MTUwMzc3MDAwMF9uYTFmbl9ZbmRwYm1ScFgyZHZjbWxzYkdGei5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vaOBI4j-wMsv6eCNOygSbPe4nppnwVXVfDRpKvkoo7ama4n7hy~6frE0Vme2KO4KuQ6NseLLpvvaGRhGEkm2quyZjBj81MUStpLJd6NsNw85YMsxtobu-v6y7eGoBwlbCMyByBZBKxGGPkFu849Jp41YM~3kJMioKH6hbRNXsSkbeb6sFZWVswMMfWzQdFtAs2GlC-h0KQ3UWCIBmpAk7KGNcFROK-aaacLH~VhjfSU4SZxE6kIbHmtMVlxoyc3P3v8e1Buqm3XFMf54ZbOjzM07~tbMbpHr5lEzlJKiawXJ9kywFovrByc9HZpF9xdq-XxkrGMRnmdkbjObXvp6sA__',
      description: 'Mountain gorilla trekking experience',
      bestSeason: 'Jun - Aug, Dec - Feb',
      wildlife: 'Mountain Gorillas, Forest Elephants, Buffaloes',
      activities: 'Gorilla Trekking, Hiking, Nature Walks'
    },
    {
      name: 'Tarangire',
      region: 'Tanzania',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/uQAaY3Z3uBvkBDJsnFrDk3-img-4_1771503787000_na1fn_dGFyYW5naXJlX2Jhb2JhYnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3VRQWFZM1ozdUJ2a0JESnNuRnJEazMtaW1nLTRfMTc3MTUwMzc4NzAwMF9uYTFmbl9kR0Z5WVc1bmFYSmxYMkpoYjJKaFluTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qPz9NFKl-ZiCKIhKNPZOFhtMaAIjkm6P46ZsV-7sAJUmTP1vrOzt0~kfWscXkFVNES4xRzFUUwQDwVMBYrs-MJzHMSp7QJJ5C1xE~SX1c4KkKkGLjedVmP3DXvWMwynC6~dCTccXPly5DBqcZrKcIoE3FkKYf-fV09gCqM3f4JBBWGfrrWU8-rrN9bB6cOy8qIWwp-U9PQFZPoSQz0KCYp2-ss3~yCjk3YehlLJm0U~xKhtJrK7nzWqRSC2lAQFkHg2Mg1Q58CfwFXzyYYuuJbFO4cjiC~rUC~8~sHJ7o4W2-i-GDuTP7jHOdVfgyxrJLe9IWKvOkmAT4trF8-0DbQ__',
      description: 'Ancient baobab trees and wildlife',
      bestSeason: 'Jun - Oct',
      wildlife: 'Elephants, Giraffes, Zebras, Wildebeest',
      activities: 'Safari, Photography, Bird Watching'
    },
    {
      name: 'Lake Kivu',
      region: 'Rwanda',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/AUcayuFQakJjTYlc.jpg',
      description: 'Scenic lake with cultural experiences',
      bestSeason: 'Year-round',
      wildlife: 'Fishing Eagles, Hippos, Crocodiles',
      activities: 'Boat Tours, Fishing, Water Sports, Culture'
    }
  ];

  const regions = ['all', 'Kenya', 'Tanzania', 'Rwanda', 'Uganda'];
  const filteredDestinations = selectedRegion === 'all' 
    ? destinations 
    : destinations.filter(d => d.region === selectedRegion);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/cYyWh09CRHrhWGxId6XOuo-img-1_1771506118000_na1fn_bmdvcm9uZ29yb19jcmF0ZXJfZnVsbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Explore Destinations
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Discover 12+ amazing destinations across East Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container">
          <div className="flex gap-4 flex-wrap justify-center">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedRegion === region
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {filteredDestinations.map((dest, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>
                    {dest.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{dest.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span><strong>Best Season:</strong> {dest.bestSeason}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span><strong>Wildlife:</strong> {dest.wildlife}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span><strong>Activities:</strong> {dest.activities}</span>
                    </div>
                  </div>

                  <Link href="/booking">
                    <button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground py-2 rounded-lg font-semibold transition-all">
                      Book Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
