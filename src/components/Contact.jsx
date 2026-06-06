import { PERSONAL_INFO } from '../data/portfolioData';
import { EnvelopeIcon } from './icons';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-slate-950 border-t border-slate-900 text-center relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-950/10 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <SectionHeader
          kicker="05 // Contact"
          title="Request Access Token"
          description="I am actively exploring Summer 2027 Software Engineering Internship pathways. If you are seeking a highly self-motivated developer equipped with algorithmic expertise and full-stack capabilities, let's open an active line of communication."
          align="center"
          className="mb-10"
        />
        <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center justify-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 rounded-xl font-bold font-mono transition-all duration-300 shadow-md shadow-cyan-400/5">
          <EnvelopeIcon className="w-5 h-5 mr-2.5" />
          {PERSONAL_INFO.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
