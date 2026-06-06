import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4 md:hidden">
          <a href={PERSONAL_INFO.github} className="text-slate-400 hover:text-white" aria-label="Github Profile">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={PERSONAL_INFO.linkedin} className="text-slate-400 hover:text-white" aria-label="LinkedIn Profile">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-500 text-xs font-mono hover:text-cyan-400 transition-colors cursor-default">
          Designed & Engineered by {PERSONAL_INFO.name} // Access Level 3 Signed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
