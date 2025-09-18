'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    TrendingUp,
    Lightbulb,
    BarChart3,
    Target,
    Building2,
    Users,
    Megaphone,
    Zap,
    Palette,
    Globe,
    Camera,
    PenTool
} from 'lucide-react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
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

    const skillCategories = [
        {
            title: "Strategy & Analytics",
            skills: [
                {
                    name: "Social Media Strategy",
                    icon: TrendingUp,
                    level: "Expert",
                    description: "Comprehensive social media planning and execution",
                    tools: ["Hootsuite", "Buffer", "Sprout Social"]
                },
                {
                    name: "Analytics & Reporting",
                    icon: BarChart3,
                    level: "Advanced",
                    description: "Data analysis and performance optimization",
                    tools: ["Google Analytics", "Facebook Insights", "Tableau"]
                },
                {
                    name: "Paid Advertising",
                    icon: Target,
                    level: "Expert",
                    description: "ROI-focused advertising campaigns",
                    tools: ["Google Ads", "Facebook Ads", "LinkedIn Ads"]
                }
            ]
        },
        {
            title: "Creative & Content",
            skills: [
                {
                    name: "Content Creation",
                    icon: Lightbulb,
                    level: "Advanced",
                    description: "Engaging multimedia content development",
                    tools: ["Adobe Creative Suite", "Canva", "Figma"]
                },
                {
                    name: "Visual Design",
                    icon: Palette,
                    level: "Advanced",
                    description: "Brand-consistent visual storytelling",
                    tools: ["Photoshop", "Illustrator", "After Effects"]
                },
                {
                    name: "Video Production",
                    icon: Camera,
                    level: "Intermediate",
                    description: "Short-form and long-form video content",
                    tools: ["Premiere Pro", "DaVinci Resolve", "Final Cut"]
                }
            ]
        },
        {
            title: "Management & Growth",
            skills: [
                {
                    name: "Brand Management",
                    icon: Building2,
                    level: "Advanced",
                    description: "Brand voice and identity development",
                    tools: ["Brand Guidelines", "Style Guides", "Asset Management"]
                },
                {
                    name: "Community Building",
                    icon: Users,
                    level: "Expert",
                    description: "Audience engagement and loyalty programs",
                    tools: ["Discord", "Slack", "Community Platforms"]
                },
                {
                    name: "Influencer Marketing",
                    icon: Megaphone,
                    level: "Advanced",
                    description: "Partnership and collaboration strategies",
                    tools: ["AspireIQ", "Grin", "Upfluence"]
                }
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'bg-primary text-primary-foreground';
            case 'Advanced': return 'bg-secondary text-secondary-foreground';
            case 'Intermediate': return 'bg-muted text-muted-foreground';
            default: return 'bg-muted text-muted-foreground';
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium animate-pulse">
                        Skills & Expertise
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        My{' '}
                        <span className="text-primary relative">
                            Professional Arsenal
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent animate-expand"></div>
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A comprehensive toolkit of skills and technologies that drive digital marketing success across multiple platforms and industries.
                    </p>
                </div>

                {/* Skills Categories */}
                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.title}
                            className={`transition-all duration-1000 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => {
                                    const Icon = skill.icon;
                                    const isHovered = hoveredSkill === `${categoryIndex}-${skillIndex}`;

                                    return (
                                        <Card
                                            key={skill.name}
                                            className="group py-0 relative overflow-hidden transition-all duration-700 transform hover:scale-105 border cursor-pointer"
                                            style={{
                                                transform: isVisible
                                                    ? `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`
                                                    : `perspective(1000px) rotateX(10deg) rotateY(-5deg) translateZ(-20px)`,
                                                transitionDelay: `${skillIndex * 100}ms`
                                            }}
                                            onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            {/* Animated Border */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
                                            <div className="absolute inset-[1px] bg-background rounded-lg"></div>

                                            <CardContent className="relative p-6 h-full flex flex-col">
                                                {/* Icon with 3D effect */}
                                                <div className="mb-4 relative">
                                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                                                        <Icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                                                    </div>
                                                    {/* Shadow effect */}
                                                    <div className="absolute top-2 left-2 w-16 h-16 bg-primary/5 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
                                                </div>

                                                {/* Skill Info */}
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                            {skill.name}
                                                        </h4>
                                                        <Badge
                                                            className={`${getLevelColor(skill.level)} text-xs px-2 py-1 group-hover:scale-110 transition-transform duration-300`}
                                                        >
                                                            {skill.level}
                                                        </Badge>
                                                    </div>

                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                        {skill.description}
                                                    </p>

                                                    {/* Tools */}
                                                    <div className="space-y-2">
                                                        <p className="text-xs font-medium text-foreground/80">Tools & Technologies:</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {skill.tools.map((tool, index) => (
                                                                <Badge
                                                                    key={tool}
                                                                    variant="outline"
                                                                    className="text-xs px-2 py-0.5 group-hover:border-primary/50 transition-colors duration-300"
                                                                    style={{
                                                                        animationDelay: `${index * 100}ms`,
                                                                        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                                                                        transition: 'transform 0.3s ease'
                                                                    }}
                                                                >
                                                                    {tool}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Hover Glow Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                        <Zap className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-sm font-medium text-foreground">
                            Continuously evolving and learning new technologies
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(-3deg); }
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes expand {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
                .animate-expand {
                    animation: expand 2s ease-out;
                }
            `}</style>
        </section>
    );
};

export default Skills;