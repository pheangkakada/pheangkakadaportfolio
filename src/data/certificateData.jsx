import { CodeIcon, PaletteIcon, TerminalIcon } from "../components/icons";
import cert1 from "../assets/cerfificateImage/fortinet.png";
import aws from "../assets/cerfificateImage/awsCloudFoundation.png";
import ruppFront from "../assets/cerfificateImage/1yearRuppFront.png";
import ruppBack from "../assets/cerfificateImage/1yearRuppBack.png";
import frontend from "../assets/cerfificateImage/frontendCert.png";
import bacii from "../assets/cerfificateImage/bacii.png";


export const CERTIFICATES = [
  {
    id: "university",
    title: "Certificate of Foundation Year",
    level: "University Certificate",
    issuer: "Royal University of Phnom Penh (RUPP)",
    date: "2022 - 2023",

    images: [ruppBack, ruppFront],

    skills: [
      "Mathematics",
      "Computer Fundamentals",
      "English Communication",
      "Academic Skills",
    ],

    gradient: "from-emerald-500 via-green-600 to-teal-500",
    badgeIcon: "🎓",
    sealColor: "#10b981",
    accentColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "bacii",
    title: "Baccalaureate II Certificate",
    level: "High School Certificate",
    issuer: "Ministry of Education, Youth and Sport",
    date: "27 Dec 2021", // Change to your actual graduation year

    images: [bacii],

    skills: ["Mathematics", "Science", "Khmer Literature", "English Language"],

    gradient: "from-blue-500 via-indigo-600 to-purple-500",
    badgeIcon: "📚",
    sealColor: "#3b82f6",
    accentColor: "text-blue-400 bg-blue-950/40 border-blue-800/40",
    badgeBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    id: "shortCourse",
    title: "Front-End Development Certificate",
    level: "Course Certificate",
    issuer: "Short Courses",
    date: "2023",

    images: [frontend],

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "Bootstrap",
      "Project",
    ],

    gradient: "from-emerald-500 via-green-600 to-teal-500",
    badgeIcon: "💻",
    sealColor: "#10b981",
    accentColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "fortinet",
    title: "Fortinet Network Security",
    level: "Professional Certificate",
    issuer: "Fortinet",
    date: "Jun 2026",

    images: [cert1],

    skills: [
      "Firewall Security",
      "Network Protection",
      "VPN Configuration",
      "Threat Detection",
    ],

    gradient: "from-emerald-500 via-green-600 to-teal-500",
    badgeIcon: "🛡️",
    sealColor: "#10b981",
    accentColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "aws-cloud-foundation",
    title: "AWS Cloud Foundation",
    level: "Professional Certificate",
    issuer: "Amazon Web Services (AWS)",
    date: "Jun 2026",

    images: [aws],

    skills: [
      "Cloud Computing Fundamentals",
      "AWS Core Services",
      "Cloud Security",
      "Identity & Access Management (IAM)",
      "Amazon EC2",
      "Amazon S3",
      "AWS Pricing & Billing",
      "Cloud Architecture Basics",
    ],

    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    badgeIcon: "☁️",
    sealColor: "#ff9900",
    accentColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    badgeBg: "bg-orange-500/10 border-orange-500/20",
  },
];
// ===============================
// CERTIFICATE COLORS
// ===============================
export const CERT_GRADIENT_STOPS = {
  fortinet: {
    from: "#10b981",
    via: "#059669",
    to: "#14b8a6",
  },
  aws: {
    from: "#f97316",
    via: "#ea580c",
    to: "#fdba74",
  },
  html: {
    from: "#3b82f6",
    via: "#2563eb",
    to: "#3b82f6",
  },
};
