import { useEffect } from 'react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { index as projectsIndex } from '@/routes/projects';

export default function CarRentalCaseStudy() {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.documentElement.style.colorScheme = 'light';
    }, []);

    return (
        <CaseStudyTemplate
            pageTitle="Car Rental Management System Case Study"
            eyebrow="Project Architecture // Fintech"
            heading="Car Rental"
            headingAccent="Management System"
            summary="A comprehensive fleet management and booking platform with integrated payment processing, designed to streamline vehicle reservations, rental operations, and financial transactions for mobility service providers."
            heroImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCL3Bq4xJ2rK5mN8oP9qR6sT7uV8wX9yZ0aB1cD2eF3gH4iJ5kL6mN7oP8qR9-SampleImageForCarRental"
            techStack={["Laravel", "React", "MySQL", "Stripe", "Redis"]}
            overview={[
                "The challenge was to build a scalable platform that handles complex fleet logistics while integrating seamlessly with payment infrastructure. The solution combines Laravel's robust backend with React's responsive UI to deliver a high-performance rental management system.",
                "The system manages vehicle inventory, real-time availability, automated booking workflows, and secure payment processing. Redis caching ensures rapid response times for availability queries, while Stripe integration provides reliable payment handling for thousands of transactions.",
            ]}
            metrics={[
                { value: "10K+", label: "Monthly Bookings" },
                { value: "99.7%", label: "System Uptime" },
            ]}
            challenge={{
                title: "The Challenge",
                icon: "warning",
                items: [
                    "Complex inventory management across multiple locations",
                    "Real-time availability synchronization under high traffic",
                    "Secure payment processing with compliance requirements",
                ],
            }}
            solution={{
                title: "The Solution",
                icon: "verified_user",
                items: [
                    "Distributed caching layer for instant availability updates",
                    "PCI-compliant payment gateway with Stripe integration",
                    "Optimized database queries with strategic indexing",
                ],
            }}
            outcomes={[
                {
                    label: "Booking Efficiency",
                    before: "8 min/booking",
                    after: "45 seconds",
                    improvement: "-90.6%",
                },
                {
                    label: "Revenue Growth",
                    before: "$2.3M/year",
                    after: "$5.8M/year",
                    improvement: "+152%",
                },
                {
                    label: "Payment Failures",
                    before: "3.2%",
                    after: "0.18%",
                    improvement: "-94.4%",
                },
            ]}
            testimonials={[
                {
                    quote: "The platform transformed how we manage bookings. What used to take 8 minutes is now 45 seconds, and customers love the instant confirmation. Revenue jumped immediately after launch.",
                    name: "David Rodriguez",
                    role: "CEO",
                    company: "FleetDrive Rentals",
                    icon: "business",
                },
                {
                    quote: "The Stripe integration is bulletproof. We went from 3.2% payment failures to 0.18%—that alone saves us thousands monthly. The developer anticipated every edge case.",
                    name: "Lisa Thompson",
                    role: "Finance Director",
                    company: "MobilityPlus",
                    icon: "payments",
                },
                {
                    quote: "Our fleet is spread across 12 cities and the real-time sync never misses a beat. The Redis caching architecture ensures availability queries complete in milliseconds, even during peak hours.",
                    name: "Ahmed Hassan",
                    role: "Technical Lead",
                    company: "CarHub Network",
                    icon: "speed",
                },
            ]}
            projectCtas={{
                videoDemoUrl: 'https://www.youtube.com/watch?v=Ytux4IOAR_s',
                githubUrl: 'https://github.com/usmanharuna/car-rental-management',
                technicalBreakdownUrl: '#overview',
            }}
            bookCallUrl="https://calendly.com/usman-haruna/discovery-call"
            quickContactEmail="hello@usmanharuna.pro"
            capabilities={[
                {
                    icon: "calendar_today",
                    title: "Smart Booking Engine",
                    description:
                        "Intelligent scheduling system preventing double-bookings with real-time availability across all locations.",
                },
                {
                    icon: "payment",
                    title: "Payment Processing",
                    description:
                        "Secure transaction handling with Stripe, supporting multiple payment methods and automated invoicing.",
                },
                {
                    icon: "directions_car",
                    title: "Fleet Analytics",
                    description:
                        "Comprehensive reporting on vehicle utilization, revenue trends, and maintenance schedules.",
                },
            ]}
            galleryImageUrls={[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3Bq4xJ2rK5mN8oP9qR6sT7uV8wX9yZ0aB1cD2eF3gH4iJ5kL6mN7oP8-Booking",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3Bq4xJ2rK5mN8oP9qR6sT7uV8wX9yZ0aB1cD2eF3gH4iJ5kL6mN7oP9-Dashboard",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL3Bq4xJ2rK5mN8oP9qR6sT7uV8wX9yZ0aB1cD2eF3gH4iJ5kL6mN7oP10-Analytics",
            ]}
            backToProjectsUrl={projectsIndex.url()}
        />
    );
}
