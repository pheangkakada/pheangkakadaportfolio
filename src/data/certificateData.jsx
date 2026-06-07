import { CodeIcon, PaletteIcon, TerminalIcon } from '../components/icons';
import cert1 from "../assets/cerfificateImage/fortinet.png";

export const CERTIFICATES = [
  {
    id: "fortinet",
    title: "Fortinet Network Security",
    level: "Professional Certificate",
    issuer: "Fortinet",
    date: "Jun 2026",

    image: cert1,

    skills: [
      "Firewall Security",
      "Network Protection",
      "VPN Configuration",
      "Threat Detection",
    ],

    gradient: "from-emerald-500 via-green-600 to-teal-500",
    badgeIcon: "🛡️",
    sealColor: "#10b981",
    accentColor:
      "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "aws",
    title: "AWS Certified Developer",
    level: "Professional Certificate",
    issuer: "aws",
    date: "Jun 2026",

    image: cert1,

    skills: [
      "Firewall Security",
      "Network Protection",
      "VPN Configuration",
      "Threat Detection",
    ],

    gradient: "from-emerald-500 via-green-600 to-teal-500",
    badgeIcon: "☁️",
    sealColor: "#10b981",
    accentColor:
      "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "html",
    title: "HTML5 Developer",
    level: "Professional Certificate",
    issuer: "w3schools",
    date: "Jun 2026",

    image: cert1,

    skills: [
      "Firewall Security",
      "Network Protection",
      "VPN Configuration",
      "Threat Detection",
    ],

    gradient: "from-emerald-500 via-green-600 to-teal-500",
    badgeIcon: "🌐",
    sealColor: "#10b981",
    accentColor:
      "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
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