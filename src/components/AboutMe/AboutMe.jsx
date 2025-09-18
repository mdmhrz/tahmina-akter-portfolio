'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    CheckCircle,
    ThumbsUp,
    Award,
    Briefcase,
    Target,
    Lightbulb,
    TrendingUp,
    Users,
    UserCheck,
    Star
} from 'lucide-react';

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    const achievements = [
        {
            icon: CheckCircle,
            number: "53",
            title: "Case Success",
            description: "Successfully delivered strategic campaigns that exceeded client expectations and drove measurable business growth."
        },
        {
            icon: ThumbsUp,
            number: "850",
            title: "Happy Clients",
            description: "Built lasting relationships with clients across various industries, from startups to enterprise-level brands."
        },
        {
            icon: Award,
            number: "45",
            title: "Winning Awards",
            description: "Recognized for excellence in digital marketing campaigns and innovative content strategies."
        },
        {
            icon: Briefcase,
            number: "99",
            title: "Projects Completed",
            description: "Delivered comprehensive digital marketing solutions that transformed brand presence and engagement."
        }
    ];

    const highlights = [
        {
            icon: UserCheck,
            title: "Certified Expert",
            subtitle: "Google Ads & Facebook Blueprint Certified"
        },
        {
            icon: Users,
            title: "1M+ Followers",
            subtitle: "Generated across client accounts"
        },
        {
            icon: TrendingUp,
            title: "300% Growth",
            subtitle: "Average engagement increase"
        },
        {
            icon: Star,
            title: "5+ Years",
            subtitle: "Experience in digital marketing"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium animate-bounce">
                        About Me
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Passionate About{' '}
                        <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
                            Digital Growth
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        With over 5 years of experience in social media marketing, I help brands build
                        authentic connections with their audiences through strategic content and data-driven campaigns.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Story */}
                    <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-8 -rotate-1'}`}>
                        <Card className="h-full hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 border group perspective-1000">
                            <CardContent className="p-8 transform transition-transform duration-500 group-hover:rotateY-2">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Turning Ideas Into Viral Content</h3>

                                <div className="space-y-6">
                                    <p className="text-muted-foreground leading-relaxed">
                                        I specialize in creating compelling content strategies that resonate with target audiences and drive
                                        meaningful engagement. My approach combines creativity with data-driven insights to deliver measurable results.
                                    </p>

                                    <p className="text-muted-foreground leading-relaxed">
                                        I've had the privilege of working with startups, established brands, and everything in between,
                                        helping them build authentic connections with their communities and achieve their business objectives
                                        through strategic social media presence.
                                    </p>

                                    {/* Approach Cards */}
                                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                                        <div className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                                            <div className="p-2 bg-primary rounded-lg animate-pulse">
                                                <Target className="w-5 h-5 text-primary-foreground" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Strategic</h4>
                                                <p className="text-sm text-muted-foreground">Data-driven approach</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3 p-4 bg-secondary/10 rounded-lg border border-secondary/20 transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                                            <div className="p-2 bg-secondary rounded-lg animate-pulse" style={{ animationDelay: '1s' }}>
                                                <Lightbulb className="w-5 h-5 text-secondary-foreground" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Creative</h4>
                                                <p className="text-sm text-muted-foreground">Engaging content</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="mt-6 px-8 py-3 rounded-lg font-medium transition-all duration-500 transform hover:scale-110 hover:shadow-lg active:scale-95">
                                        See My Experience
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="space-y-4">
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border group"
                                        style={{
                                            transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(20px) rotateX(10deg)',
                                            transitionDelay: `${index * 150}ms`
                                        }}
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:rotate-12 transform">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-foreground">{highlight.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{highlight.subtitle}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <Card
                                key={index}
                                className={`group hover:shadow-2xl transition-all duration-700 transform border ${isVisible
                                    ? 'opacity-100 translate-y-0 rotate-0'
                                    : 'opacity-0 translate-y-12 rotate-3'
                                    }`}
                                style={{
                                    transitionDelay: `${800 + index * 150}ms`,
                                    transform: `perspective(1000px) ${isVisible ? 'rotateX(0) rotateY(0)' : 'rotateX(15deg) rotateY(-5deg)'}`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(-5deg) rotateY(5deg) translateY(-8px) scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
                                }}
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                                        <Icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {achievement.number}
                                        </span>
                                        <h4 className="font-semibold text-foreground mt-1">{achievement.title}</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;