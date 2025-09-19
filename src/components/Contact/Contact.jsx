'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    User,
    MessageSquare
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'contact@johndoe.com',
            href: 'mailto:contact@johndoe.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+880 123 456 7890',
            href: 'tel:+8801234567890'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Dhaka, Bangladesh',
            href: null
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                        Get In Touch
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Contact Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to take your social media presence to the next level? Let's discuss your project and create something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="h-full">
                            <CardHeader className="">
                                <CardTitle className="text-lg font-semibold">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-foreground ">
                                                    {info.label}
                                                </h4>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-muted-foreground text-sm">
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* Quick Response Info */}
                        <Card>
                            <CardContent className="p-5">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">
                                            Quick Response
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            I typically respond to all inquiries within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="h-full">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-lg font-semibold">Send Me a Message</CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Name and Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-medium">
                                                Full Name
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Your full name"
                                                    className="pl-10"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Email Address
                                            </Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    className="pl-10"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What's this about?"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            placeholder="Tell me about your project, goals, and how I can help you..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end pt-2">
                                        <Button type="submit" className="px-6 py-2 flex items-center space-x-2">
                                            <Send className="w-4 h-4" />
                                            <span>Send Message</span>
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;