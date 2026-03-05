import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppWidget() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-card text-foreground px-4 py-2 rounded-lg shadow-lg border border-border text-sm font-medium whitespace-nowrap"
                    >
                        Hi! How can we help?
                    </motion.div>
                )}
            </AnimatePresence>
            <a
                href="https://wa.me/254782561284"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
            </a>
        </div>
    );
}
