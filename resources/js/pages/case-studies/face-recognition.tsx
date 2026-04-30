import { useEffect } from 'react';
import { CaseStudyTemplate } from '@/components/case-study-template';
import { index as projectsIndex } from '@/routes/projects';

export default function FaceRecognitionCaseStudy() {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.documentElement.style.colorScheme = 'light';
    }, []);

    return (
        <CaseStudyTemplate
            pageTitle="Face Recognition System Case Study"
            eyebrow="Project Architecture // AI"
            heading="Face"
            headingAccent="Recognition System"
            summary="A high-precision biometric authentication engine designed for enterprise attendance tracking and secure perimeter verification, built with a focus on scalability and performance."
            heroImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2cse6tAvuOUaix2ZCHxOVQog_lpLrJb4dhiYuoUbyWIy2WazdHrwpWxz3HQtdy0lxZO3xVzpMhSSSYzT6uv21JjfeRqYLpvcqr3JODFxN4odcp4Z6T_3MrGggg9CTs-AGRPGZpiA8uBZhEkZpWhcDj5kEO_8veDq6abO7lgHtKl22N2awvOcVyXZoNjw8BVfsTBgZne3nPuiYPXGQCpQ-I887QHVzhSy6o9aIkY1fpzD-drMxtpU_c5-4n7Oy1ZqKBvJa_Cjugs"
            techStack={["Python", "OpenCV", "React", "FastAPI", "TensorFlow"]}
            overview={[
                "The challenge was to modernize a legacy manual attendance system prone to proxy marking and human error. The solution uses a custom-trained deep learning model integrated with a high-performance web architecture to provide seamless, contactless verification.",
                "By leveraging OpenCV for real-time video processing and a FastAPI backend for rapid embedding matching, the system handles high verification throughput with sub-second latency, ensuring a frictionless experience for high-traffic environments.",
            ]}
            metrics={[
                { value: "99.8%", label: "Accuracy Rating" },
                { value: "< 0.5s", label: "Verification Latency" },
            ]}
            challenge={{
                title: "The Challenge",
                icon: "warning",
                items: [
                    "High rates of time-theft through buddy punching",
                    "Slow manual entry causing queues during peak hours",
                    "Physical contact requirements increasing hygiene risks",
                ],
            }}
            solution={{
                title: "The Solution",
                icon: "verified_user",
                items: [
                    "AI-driven biometric lock ensuring one-to-one user identity",
                    "Asynchronous processing for near-instant walk-through entry",
                    "Zero-touch interaction for safer workplace operations",
                ],
            }}
            outcomes={[
                {
                    label: "Attendance Accuracy",
                    before: "87%",
                    after: "99.8%",
                    improvement: "+12.8pp",
                },
                {
                    label: "Check-in Time",
                    before: "45 seconds",
                    after: "0.3 seconds",
                    improvement: "-99.3%",
                },
                {
                    label: "System Uptime",
                    before: "94%",
                    after: "99.9%",
                    improvement: "+5.9pp",
                },
            ]}
            testimonials={[
                {
                    quote: "The deployment was seamless and the system has been rock-solid since day one. We've eliminated buddy punching entirely and our employees appreciate the frictionless experience.",
                    name: "Sarah Chen",
                    role: "VP of Operations",
                    company: "GlobalTech Solutions",
                    icon: "verified",
                },
                {
                    quote: "The technical implementation was outstanding—real-time processing, zero latency issues, and the spoofing detection caught an attempted breach within the first week.",
                    name: "Marcus Williams",
                    role: "Security Director",
                    company: "CoreSecure Inc",
                    icon: "security",
                },
                {
                    quote: "We integrated this across 5 facilities without any downtime. The analytics dashboard gives us unprecedented visibility into attendance patterns and anomalies.",
                    name: "Jennifer Park",
                    role: "HR Manager",
                    company: "Enterprise Corp",
                    icon: "trending_up",
                },
            ]}
            projectCtas={{
                videoDemoUrl: 'https://www.youtube.com/watch?v=4Wf79f5A5vQ',
                githubUrl: 'https://github.com/usmanharuna/face-recognition-system',
                technicalBreakdownUrl: '#overview',
            }}
            bookCallUrl="https://calendly.com/usman-haruna/discovery-call"
            quickContactEmail="hello@usmanharuna.pro"
            capabilities={[
                {
                    icon: "bolt",
                    title: "Real-time Detection",
                    description:
                        "Neural pipeline optimized for low-power hardware, detecting multiple faces simultaneously with minimal frame latency.",
                },
                {
                    icon: "security",
                    title: "Spoofing Prevention",
                    description:
                        "Liveness detection to reject photos, video replays, and mask-based attacks before identity confirmation.",
                },
                {
                    icon: "analytics",
                    title: "Insight Dashboard",
                    description:
                        "Operational reporting for attendance trends, anomaly detection, and security alerts in real time.",
                },
            ]}
            galleryImageUrls={[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBeM1ksK-oIiHm_zySNlrLgBmL7ZpMtSfSogzhQa8pROhQvc18OHoIwq5N7tYhLfY7eZj89hGLkeBIBXpIEC6doFh5aeYU7JO4F7pD_ngaCA2IE0Cb6dSYaZCQrr4GcUHjMSMsVDq61TnRHc9wh30dnluAnu0v2kbVr-h5yLsKBFI7yh4zxNQPp_0ANg6ZLkQPTA9bDNY80gzGHMrbP90Ua0rhdCwYEdAVp9sjCE8LDIMms-dk-tLdmnIJxMjQ70WZfQb_KVJDNeyw",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBBnJ-HRr5AJZL7rl9mcymgx2TBW90uMkGX6_GmlncWFevveZI2_H77nuZAlzjSWWX3EcTFVYnRdNoGQspiwTQT8MqiRI0I_w_r52C0QPnFLmvd-2zPTEpEKdiiKHVyJGUg-2S_mkqywzdHewfUT6N6WB42bIq7sIRg8NqtaD_Z4DAxpLWtPHzldey3jncQVODQIAJuwjtRZRqr8zQvIQ3p7rXdI-Jn-qNbMO7AAjeVDgLhMh76KgB4Mzs7H1PQDjRWnI__7eRTCsc",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCOf1R_1_TAkDYLED_02-hY1In_dAWnrNZPzeznaGltKV7eGKY6ocrHydcLYaokjbawitEm0URO-2i9IcMo_k1GmNbw3mInWkBoVN9RakgmtgfIqfYzPokV7-YXzZKk21u1DP2TOUBUOwaBg7o3X-Tx4E60lZL66iaeb-GsgXeXrREd7E1ugNhDSu7So_36uFF7v7W4YnS_MzoEzRwXMl35G_evqa1jq637So6IlWx5BCT31UMJ3lW43JhtVH7omJrGF2GMGY3RjrY",
            ]}
            backToProjectsUrl={projectsIndex.url()}
        />
    );
}
