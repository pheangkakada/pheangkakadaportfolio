import { CERT_GRADIENT_STOPS } from '../data/portfolioData';

const LiveCertificateImage = ({ cert, recipientName }) => {
  const colors = CERT_GRADIENT_STOPS[cert.id] || {
    from: "#22d3ee",
    via: "#6366f1",
    to: "#818cf8",
  };

  return (
    <svg viewBox="0 0 800 565" className="w-full h-auto bg-slate-900 rounded-xl select-none block" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="565" fill="#090d16" />
      <defs>
        <pattern id="guillocheGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.03" />
        </pattern>
        <linearGradient id="glowLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="certTitleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.from} />
          <stop offset="50%" stopColor={colors.via} />
          <stop offset="100%" stopColor={colors.to} />
        </linearGradient>
      </defs>
      <rect width="800" height="565" fill="url(#guillocheGrid)" />
      <rect x="15" y="15" width="770" height="535" fill="none" stroke="#1e293b" strokeWidth="2" rx="12" />
      <rect x="23" y="23" width="754" height="519" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="5,5" rx="10" />
      <path d="M 35 55 L 35 35 L 55 35" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M 765 55 L 765 35 L 745 35" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M 35 510 L 35 530 L 55 530" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M 765 510 L 765 530 L 745 530" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="400" y="75" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="4" fill="#64748b" fontWeight="bold">
        CERTIFICATE OF COMPLETION
      </text>
      <line x1="340" y1="88" x2="460" y2="88" stroke="#334155" strokeWidth="1.5" />
      <text x="400" y="145" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="13" fill="#94a3b8">
        This certifies that academic credit has been assigned to
      </text>
      <text x="400" y="200" textAnchor="middle" fontFamily="monospace" fontSize="30" fontWeight="bold" fill="#ffffff" letterSpacing="1">
        {recipientName}
      </text>
      <line x1="280" y1="218" x2="520" y2="218" stroke="url(#glowLineGrad)" strokeWidth="1.5" />
      <text x="400" y="265" textAnchor="middle" fontFamily="monospace" fontSize="9" letterSpacing="2.5" fill="#64748b" fontWeight="bold">
        FOR SUCCESSFUL ACQUISITION OF THE CREDENTIAL
      </text>
      <text x="400" y="318" textAnchor="middle" fontFamily="monospace" fontSize="24" fontWeight="900" fill="url(#certTitleGrad)">
        {cert.title}
      </text>
      <text x="400" y="352" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#cbd5e1" fontWeight="bold">
        {cert.level}
      </text>
      <text x="65" y="445" fontFamily="monospace" fontSize="9" fill="#64748b" letterSpacing="1" fontWeight="bold">
        DATE ISSUED
      </text>
      <text x="65" y="472" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#cbd5e1">
        {cert.date}
      </text>
      <g>
        <circle cx="400" cy="465" r="23" fill="#090d16" stroke={cert.sealColor} strokeWidth="2.5" />
        <text x="400" y="471" textAnchor="middle" fontSize="18" fontFamily="sans-serif">
          {cert.badgeIcon}
        </text>
      </g>
      <text x="735" y="445" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#64748b" letterSpacing="1" fontWeight="bold">
        AUTHORIZING BODY
      </text>
      <text x="735" y="472" textAnchor="end" fontFamily="Georgia, serif" fontStyle="italic" fontSize="15" fontWeight="bold" fill="#cbd5e1">
        {cert.issuer}
      </text>
    </svg>
  );
};

export default LiveCertificateImage;
