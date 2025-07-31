interface NavItemProps {
  href: string;
  name: string;
}

export const NavItem = ({ href, name }: NavItemProps) => {
  return (
    <li>
      <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
        {name}
      </a>
    </li>
  );
};