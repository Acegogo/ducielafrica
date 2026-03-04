import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-1_1771503719000_na1fn_bWFhc2FpX21hcmFfbGlvbnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTFfMTc3MTUwMzcxOTAwMF9uYTFmbl9iV0ZoYzJGcFgyMWhjbUZmYkdsdmJuTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZcsjAR31rsOIj25r~jCnBJTS4iK1aS318R7NaBtN4tVV40gi047LsffXi31kofjyFBnAA4Vm0QlAhmm8dmJNN0UqocOnMa5rIxvVSnGqeZLthdqgtruQJQWD-KeYO5H-Zzwtu54n~CsBOREjaZDlIxvn3HxNd7G8L5JvysvS726rVBaMyuF44dAkXIK5ArBLUsmuulIsULWCyHEGzunnFMUzqTr9qCBPVILGFL9cPWJStPxIHWWN2MfOXTy9JfQaxv-GrZHB~mROPHTnUvVm7S-th1xp5wRGEnqTHvIvxNIN5dUfJtKm7MgyJT4qHGxhwJwnaD2dfI7Wx85GhIXs3g__',
      title: 'Maasai Mara Lions',
      category: 'Wildlife'
    },
    {
      src: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/UAoqdd1wl4pBIvch7AWClj-img-2_1771503723000_na1fn_c2VyZW5nZXRpX21pZ3JhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L1VBb3FkZDF3bDRwQkl2Y2g3QVdDbGotaW1nLTJfMTc3MTUwMzcyMzAwMF9uYTFmbl9jMlZ5Wlc1blpYUnBYMjFwWjNKaGRHbHZiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dOyqsTTyaAeLJ04bu4Q8b~OtU7sxnABYAmPa21F0TCnl365CxejX2l0-P9GnfJVf7CKPadbsC3ipcg0XAqjOPUTifVmTnfnnMV-OOV18CqTWSYzkC-q5USGcsYa-l4VfMTdvG9w3NCVjoihGuobT3OtciFhpXhLUOetk~cZzc6zYjZAKet4lBdBvZtSN6j5NFA1mqP6u6hM73taKIjf--iZmYSfE-KS~oRzhp57I02xmVNw9BISD68a3oF-JkzqL8DT4X2eoECl8vLPPapGDNodBwITir0qnxMhP-89~fsBt3j5JYS3grCBVLtwLYvjgvD13BCSNLFJVfT-6rVBaMyuF44dAkXIK5ArBLUsmuulIsULWCyHEGzunnFMUzqTr9qCBPVILGFL9cPWJStPxIHWWN2MfOXTy9JfQaxv-GrZHB~mROPHTnUvVm7S-th1xp5wRGEnqTHvIvxNIN5dUfJtKm7MgyJT4qHGxhwJwnaD2dfI7Wx85GhIXs3g__',
      title: 'Serengeti Migration',
      category: 'Safari'
    },
    {
      src: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/uQAaY3Z3uBvkBDJsnFrDk3-img-5_1771503788000_na1fn_bGFrZV9raXZ1X3N1bnNldA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L3VRQWFZM1ozdUJ2a0JESnNuRnJEazMtaW1nLTVfMTc3MTUwMzc4ODAwMF9uYTFmbl9iR0ZyWlY5cmFYWjFYM04xYm5ObGRBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rBgjal1pVT3QPa9HfrcTwthD0XdOnlaK2HWTGf3so5m5YiUgPBI6KUisWJk7l93uIvUU1woADwLA4IhjYn6GfMfxiErZRsgUkCEY2wRy8IHgXVmgEI38cXryxBDE0jVFoKJ2vISmRbyJeaUO51Iyk7QKonmt9Ejja3CEFQE2dQdHDz6FVC4AMYIsn6OqxAN4p9tEtGeHlRJxdLOKbY0veI7sntv4zepKvOecjDOK4vak71NRJ-khz~15r4alQCazW42cceRsTWXfwxaQrBgMsQNLzOD4fu3Ge3AvYpsOB1O6CevO5viHj2UhX9JwYyUgix8jjRP-PwUM~6Wg8zPlrw__',
      title: 'Lake Kivu Sunset',
      category: 'Landscape'
    },
    {
      src: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/cYyWh09CRHrhWGxId6XOuo-img-2_1771506118000_na1fn_emFuemliYXJfYmVhY2hfZnVsbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L2NZeVdoMDlDUkhyaFdHeElkNlhPdW8taW1nLTJfMTc3MTUwNjExODAwMF9uYTFmbl9lbUZ1ZW1saVlYSmZZbVZoWTJoZlpuVnNiQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c-cg9DoHEKNVcKbTGeSXqAy-zhhxyscdZb-7nyKfjzHt2Bh8OKnjLvmY1Et0UWot-o5L7JvE6E6WuM-tHIJjLaaPPMB8Frntsxnt6S1UX-mWR6WYijvAz-VXMwkLYywwDpXUuYc0ELlWx5QKbMtvIJo2XcHrzI31cCgLwIp4CanfpjBFh1OCHWU~L9Q5GYmvP2uo6bFpd1xQjb3mO3ZEV3wGZk9E-8zSWRF6orL9jWL-dfCKbKUmyD4G5gw4Kwh40pOLz1qi7C3CAIPYZ~orlzm~oT4~19VSx33h9r0HAB45MyftXQRK5Fq-wyhBQCWYLoNztfUI6PUQpFiEq3d8fw__',
      title: 'Zanzibar Beach',
      category: 'Beach'
    },
    {
      src: 'https://private-us-east-1.manuscdn.com/sessionFile/tvysttF0A3l3QxUiynLwi2/sandbox/cYyWh09CRHrhWGxId6XOuo-img-4_1771506121000_na1fn_bGFrZV9raXZ1X3N1bnNldA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHZ5c3R0RjBBM2wzUXhVaXluTHdpMi9zYW5kYm94L2NZeVdoMDlDUkhyaFdHeElkNlhPdW8taW1nLTRfMTc3MTUwNjEyMTAwMF9uYTFmbl9iR0ZyWlY5cmFYWjFYM04xYm5ObGRBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uxAdUKMAAwE3CVDXUQO7e4baXHFdrC3r9TRqZKnopGV7phv5Wkijfu9BE0DhpXXY~ndLcy~5WnvWI0WC16iruzfUes3LRgSsmaYtIvPLS-zZtfpYqrm3Hnpotstol7UXaaid9ihVYvz7yDD0L-g9Z8CkK0mT4Qx065oYgDTdUWyqcT6-DyVpe-ztOYZ4WByE4Oh1p0834VZUy36wru1GauiIyJSmf9H0nLr3ckOJ76oa2ZwYNBNOAhM0NkGnawpUl9XMIUGI-P9cVNw7g3poIt7hfXPxuyB87kqJgElQAAI9tHXEvMdMI7lg~EpoAjgA6jSIo69tGLMAJsuGX31NLQ__',
      title: 'Lake Kivu Sunset',
      category: 'Landscape'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Hero Header with Background Image */}
      <section className="py-32 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663341676517/sPifPdPgeehOHRHx.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="section-title text-white" style={{ fontFamily: 'Montserrat' }}>
              Gallery
            </h1>
            <p className="text-xl text-gray-100 mt-4">
              Explore the beauty of East Africa through our lens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedImage(idx)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground p-2 rounded-full hover:bg-accent/80 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold">{images[selectedImage].title}</h3>
              <p className="text-sm text-gray-300">{selectedImage + 1} / {images.length}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
