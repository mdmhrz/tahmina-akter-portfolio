import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import Link from 'next/link';


const SocialMediaHero = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-6 py-25">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-md font-medium text-primary">
                                Hello, I am
                            </p>
                            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                                Tahmina Akter
                            </h1>
                            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                                Social Media Marketing Specialist
                            </h2>
                        </div>

                        <div className="space-y-3 text-muted-foreground max-w-lg">
                            <p>
                                Strategic social media marketing professional with 5+ years of experience driving brand growth and engagement across all major platforms.
                            </p>
                            <p>
                                Specialized in content strategy, campaign management, and performance analytics to deliver measurable results for businesses.
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 pt-2">
                            <Link href={'/facebook'} className='bg-primary w-6 h-6 flex items-center justify-center rounded-xs'>
                                <FaFacebookF className='text-background' />
                            </Link>
                            <Link href={'/facebook'} className='bg-primary w-6 h-6 flex items-center justify-center rounded-xs'>
                                <FaLinkedinIn className='text-background' />
                            </Link>
                            <Link href={'/facebook'} className='bg-primary w-6 h-6 flex items-center justify-center rounded-xs'>
                                <FaInstagram className='text-background' />
                            </Link>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button className="rounded-full !px-6 !py-6">
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>
                            <button className="inline-flex items-center justify-center gap-2 border border-primary text-foreground hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-full font-medium transition-colors">
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Background Circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl"></div>

                            {/* Image Placeholder */}
                            <div className="relative z-10">
                                <img
                                    src="/banner_2.png"
                                    alt="Sarah Mitchell - Social Media Marketing Specialist"
                                    className="w-full h-auto shadow-lg rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaHero;