interface BtnLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const BtnLink = ({ href, label, className = "" }: BtnLinkProps) => {
  return (
    <a href={href} 
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer ${className}`}>
      <span className="relative z-10 text-white"> {label}</span>
    </a>
  );
};
