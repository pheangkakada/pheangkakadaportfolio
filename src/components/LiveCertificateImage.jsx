// import { CERT_GRADIENT_STOPS } from '../data/portfolioData';
import { CERTIFICATES } from '../data/certificateData';


const LiveCertificateImage = ({ cert }) => {
  return (
    <div className="w-full bg-slate-900 overflow-hidden rounded-xl">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-auto object-cover block"
        loading="lazy"
      />
    </div>
  );
};

export default LiveCertificateImage;
