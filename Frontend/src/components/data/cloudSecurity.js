// cloudSecurityData.js
import CloudBgImage from "../../assets/cloud-security/cloudBg-image.avif";
import IntroImage from "../../assets/cloud-security/cloud1.avif";
export const hero = {
  title: "Cloud Security",
  subtitle:
    "Stay ahead of threats with smart, scalable, and secure cloud solutions — customized for AWS, Azure, and GCP.",
  backgroundImage: `${CloudBgImage}`
    ,
};

export const intro = {
  title: "Why Cloud Security Matters for Entrepreneurs & Startups",
  image:`${IntroImage}`,
  text: `In today’s fast-moving digital ecosystem, startups and early-stage businesses are leveraging cloud platforms like AWS, Azure, and GCP to accelerate development, reduce costs, and reach markets faster than ever. These platforms provide the agility and scalability that innovation demands — but with great flexibility comes great responsibility. As your cloud environment expands, so does your exposure to threats: misconfigurations, unauthorized access, data leaks, and service disruptions can occur in seconds if security is overlooked. For startups, a single breach can damage your brand reputation, disrupt operations, and erode customer trust — often before you’ve had a chance to scale.`,
};

export const whatIsCloudSecurity = {
  title: "What is Cloud Security",
  description: `Cloud Security refers to a comprehensive set of policies, practices, tools, and technologies designed to protect data, applications, and infrastructure hosted in the cloud. As businesses increasingly rely on cloud computing for scalability and flexibility, securing cloud environments has become critical to avoid data breaches, unauthorized access, misconfigurations, and downtime.

At its core, cloud security ensures the confidentiality, integrity, and availability of digital assets stored or processed in cloud platforms like AWS, Azure, and Google Cloud. For modern startups and enterprises alike, cloud security is not just a safety measure—it's a strategic enabler. A strong cloud security posture builds customer trust, ensures business continuity, and allows companies to innovate without fear of digital threats.`,
};

export const keyFocusAreas = [
  {
    title: "🔒 Data Protection",
    description:
      "Securing sensitive information with encryption and access controls.",
  },
  {
    title: "☁️ Cloud Infrastructure Security",
    description:
      "Protecting your cloud servers, databases, and applications from vulnerabilities.",
  },
  {
    title: "🛡️ Identity and Access Management (IAM)",
    description:
      "Ensuring only the right people have the right access to the right resources.",
  },
  {
    title: "🔄 Compliance and Risk Management",
    description:
      "Helping your business meet regulatory standards like GDPR, ISO 27001, and more.",
  },
  {
    title: "🚀 Cloud Security Best Practices",
    description:
      "Educating your team on proactive strategies to prevent cyber attacks.",
  },
];

export const cloudServices = [
  {
    name: "AWS Sentinel Shield",
    description:
      "TEN Sentinel for AWS provides advanced identity protection, VPC traffic monitoring, S3 encryption, and real-time compliance alerts. It integrates seamlessly with native AWS tools like CloudTrail and GuardDuty, giving you full control and visibility over your infrastructure while minimizing risks from misconfigurations and external threats.",
    icon: "🟧",
  },
  {
    name: "Azure Guardian",
    description:
      "TEN Sentinel for Azure offers complete protection across hybrid cloud deployments, including continuous security assessments, automated remediation, and identity threat detection using Azure AD and Defender. It’s designed to enforce secure DevOps pipelines, govern role-based access, and maintain industry compliance effortlessly.",
    icon: "🔷",
  },
  {
    name: "GCP Fortify",
    description:
      "With TEN Sentinel for GCP, safeguard your compute engine, storage buckets, and Kubernetes clusters using AI-powered threat detection, firewall policies, and IAM audit logging. This solution emphasizes API security, secure CI/CD workflows, and visibility across services through integration with Google’s Security Command Center.",
    icon: "🟨",
  },
];


export const benefits = [
  {
    title: "Entrepreneur-focused approach",
    description:
      "At TEN, we understand the unique challenges startups and entrepreneurs face when transitioning to or operating in the cloud. Our security solutions are built with your pace, budget, and innovation cycle in mind.",
      bg: "bg-blue-100"
  },
  {
    title: "Practical, scalable security solutions",
    description:
      "Security shouldn't slow you down—it should scale with you. TEN Sentinel offers security frameworks that are lean and adaptable, allowing your infrastructure to evolve without introducing vulnerabilities.",
      bg: "bg-red-100"
  },
  {
    title: "Expertise in leading cloud platforms",
    description:
      "Our team brings deep expertise in AWS, Microsoft Azure, and Google Cloud Platform (GCP), ensuring you're protected no matter which cloud you use—or if you use all three.",
    bg: "bg-green-100",
  },
  {
    title: "Customized strategies for your business model",
    description:
      "No two startups are alike, and neither are their security needs. We work closely with your technical and business teams to design a cloud security blueprint that fits your goals, industry requirements, and customer trust expectations",
    bg: "bg-orange-100",
  },
];
