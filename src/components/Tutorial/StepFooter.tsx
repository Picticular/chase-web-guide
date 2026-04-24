import { uniqueClasses } from '@/hooks/utils';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const containerClasses = 'flex items-center justify-center px-6 py-4';
  const classNames = uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`);

  const d = new Date();

  return (
    <footer className={classNames}>
      <div className="text-center text-xs text-slate-400">&copy; {d.getFullYear()} InnovatorM, LLC.</div>
    </footer>
  );
};

export default Footer;
