import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, FileText } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
];

export default function Header() {
    return (
        <header className="container fixed left-0 right-0 top-4 z-50 mx-auto bg-background backdrop-blur-md rounded-full shadow-lg transition-all duration-300">
            <nav className="flex items-center justify-between p-2">
                {/* Left Side: Logo */}
                <div className="flex items-center gap-2 text-xl font-bold ml-2">
                    <Image src="/logo.png" width={30} height={30} alt="Logo" />
                    Tahmina
                </div>

                {/* Middle: Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side: Resume Button & Mobile Menu */}
                <div className="flex items-center gap-2">
                    {/* Resume Button */}
                    <Button
                        variant="default"
                        className="hidden md:inline-flex rounded-full px-6"
                    >
                        Resume
                    </Button>

                    {/* Mobile Menu (Sheet) */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="h-6 w-6 text-foreground" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="flex flex-col items-start gap-6 p-6"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="w-full text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full mt-4 rounded-full px-6">
                                Resume
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
