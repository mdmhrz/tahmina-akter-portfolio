'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    GraduationCap,
    BookOpen,
    Award,
    Calendar,
    MapPin,
    Users,
    Trophy,
    Star,
    CheckCircle,
    ExternalLink
} from 'lucide-react';

const EducationCourses = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const educationData = [
        {
            id: 1,
            type: 'degree',
            title: 'Bachelor of Business Administration (BBA)',
            subtitle: 'Management',
            institution: 'National University',
            year: '2025',
            location: 'Bangladesh',
            status: 'Completed',
            description: 'Comprehensive business education covering management principles, organizational behavior, strategic planning, and leadership development.',
            skills: ['Strategic Management', 'Leadership', 'Business Analytics', 'Project Management'],
            icon: GraduationCap,
            category: 'formal'
        },
        {
            id: 2,
            type: 'certificate',
            title: 'Higher Secondary Certificate (HSC)',
            subtitle: 'Business Studies',
            institution: 'Secondary Education Board',
            year: '2020',
            location: 'Bangladesh',
            status: 'Completed',
            description: 'Foundation in business concepts, economics, accounting, and commercial mathematics preparing for advanced business studies.',
            skills: ['Business Fundamentals', 'Economics', 'Accounting', 'Mathematics'],
            icon: BookOpen,
            category: 'formal'
        },
        {
            id: 3,
            type: 'course',
            title: 'Social Media Marketing',
            subtitle: 'Digital Marketing Specialization',
            institution: 'Leading Light',
            year: '2024',
            location: 'Dhaka, Bangladesh',
            status: 'Certified',
            description: 'Intensive online course covering advanced social media strategies, content creation, analytics, and digital campaign management.',
            skills: ['Social Media Strategy', 'Content Marketing', 'Facebook Ads', 'Instagram Marketing', 'Analytics'],
            icon: Award,
            category: 'professional'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Education', count: educationData.length },
        { id: 'formal', label: 'Formal Education', count: educationData.filter(item => item.category === 'formal').length },
        { id: 'professional', label: 'Professional Courses', count: educationData.filter(item => item.category === 'professional').length }
    ];

    const filteredData = activeCategory === 'all'
        ? educationData
        : educationData.filter(item => item.category === activeCategory);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-primary text-primary-foreground';
            case 'certified':
                return 'bg-secondary text-secondary-foreground';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'degree':
                return GraduationCap;
            case 'certificate':
                return BookOpen;
            case 'course':
                return Award;
            default:
                return BookOpen;
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-spin-slow"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium animate-bounce">
                        Education & Courses
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        My Academic{' '}
                        <span className="text-primary relative">
                            Journey
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent animate-expand"></div>
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A comprehensive educational foundation combined with specialized professional training
                        to deliver exceptional digital marketing results.
                    </p>
                </div>

                {/* Category Filter */}
                <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex flex-wrap gap-4 p-2 bg-muted/30 rounded-full">
                        {categories.map((category, index) => (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "default" : "ghost"}
                                className={`rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id
                                    ? 'shadow-lg'
                                    : 'hover:bg-muted/50'
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {category.label}
                                <Badge
                                    variant="secondary"
                                    className="ml-2 text-xs px-2 py-0 animate-pulse"
                                >
                                    {category.count}
                                </Badge>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredData.map((item, index) => {
                        const Icon = getTypeIcon(item.type);

                        return (
                            <Card
                                key={item.id}
                                className={`py-0 group relative overflow-hidden transition-all duration-700 transform hover:scale-105 border cursor-pointer ${isVisible
                                    ? 'opacity-100 translate-y-0 rotate-0'
                                    : 'opacity-0 translate-y-8 rotate-1'
                                    }`}
                                style={{
                                    transitionDelay: `${400 + index * 150}ms`,
                                    transform: `perspective(1000px) ${isVisible ? 'rotateX(0deg) rotateY(0deg)' : 'rotateX(5deg) rotateY(-2deg)'}`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(-2deg) rotateY(2deg) translateY(-8px) scale(1.02)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
                                }}
                            >
                                {/* Animated gradient border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                                <div className="absolute inset-[1px] bg-background rounded-lg"></div>

                                <CardContent className="relative p-6 h-full flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <Badge className={`${getStatusColor(item.status)} group-hover:scale-105 transition-transform duration-300`}>
                                                {item.status}
                                            </Badge>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center text-sm text-muted-foreground mb-1">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {item.year}
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {item.location}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                                            {item.title}
                                        </h3>
                                        <h4 className="text-lg font-semibold text-muted-foreground mb-2">
                                            {item.subtitle}
                                        </h4>
                                        <div className="flex items-center text-primary font-medium">
                                            <Users className="w-4 h-4 mr-2" />
                                            {item.institution}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                                        {item.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                                            <Star className="w-4 h-4 mr-2 text-primary" />
                                            Key Skills Acquired
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skill}
                                                    variant="outline"
                                                    className="text-xs px-2 py-1 group-hover:border-primary/50 transition-all duration-300"
                                                    style={{
                                                        transform: `translateY(${skillIndex % 2 === 0 ? '0' : '2px'})`,
                                                        animationDelay: `${skillIndex * 100}ms`
                                                    }}
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-muted">
                                        <div className="flex items-center text-primary text-sm font-medium">
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Verified Credential
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 transform hover:scale-105"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Details
                                        </Button>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Summary Stats */}
                <div className={`grid md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {[
                        { icon: GraduationCap, label: 'Degrees', value: '1', subtext: 'BBA Completed' },
                        { icon: BookOpen, label: 'Certifications', value: '2', subtext: 'Academic & Professional' },
                        { icon: Award, label: 'Specializations', value: '5+', subtext: 'Key Skill Areas' },
                        { icon: Trophy, label: 'Years Learning', value: '5+', subtext: 'Continuous Growth' }
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card
                                key={stat.label}
                                className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {stat.value}
                                        </span>
                                        <h4 className="font-semibold text-foreground mt-1">{stat.label}</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {stat.subtext}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes expand {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                @keyframes spin-slow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                .animate-expand {
                    animation: expand 2s ease-out;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default EducationCourses;