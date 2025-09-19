import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Github
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },

    ];

    return (
        <footer className="bg-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div>
                            <div className='flex items-center gap-3'>
                                <Image src={'/logo.png'} width={20} height={20} alt='logo'></Image>
                                <h3 className="text-xl font-bold text-background">
                                    Tahmina Akter
                                </h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Passionate Social Media Marketer with 5+ years of experience.<br />
                                Helping brands grow through strategic digital campaigns.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="inline-flex text-primary bg-primary/10 items-center justify-center w-9 h-9 rounded-lg hover:text-primary hover:bg-primary/10 transition-all duration-200"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-background mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <Link
                                    href="mailto:contact@johndoe.com"
                                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                                >
                                    tahminaakterprofessional@gmail.com
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                <Link
                                    href="tel:+8801234567890"
                                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                                >
                                    +880 123 456 7890
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">
                                    Dhaka, Bangladesh
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className={'bg-background/10'} />

            {/* Footer Bottom */}

            <p className="text-sm text-muted-foreground text-center py-4">
                &copy; {currentYear} John Doe. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;