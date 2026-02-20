import { Link } from "wouter";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/duciel-logo.png"
                                alt="Duciel Logo"
                                className="h-20 w-auto"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm">Escape The Ordinary</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/destinations"><a className="hover:text-accent transition">Destinations</a></Link></li>
                            <li><Link href="/packages"><a className="hover:text-accent transition">Packages</a></Link></li>
                            <li><Link href="/gallery"><a className="hover:text-accent transition">Gallery</a></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <p className="text-muted-foreground text-sm">info@ducieladventures.com</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-accent transition">Facebook</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} Duciel Africa Adventures. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
