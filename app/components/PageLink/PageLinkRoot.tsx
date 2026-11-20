import { NavLink, type NavLinkProps } from "react-router";

interface IStyledNavLink extends NavLinkProps {}

export default function PageLinkRoot({ 
  children, ...rest 
}: IStyledNavLink) {
  const baseClasses = `
    rounded-full flex flex-col items-center 
    sm:flex-row sm:px-2.5
  `;
  const activeClasses = `${baseClasses} bg-pink`
  const pendingClasses = `${baseClasses} bg-[#c26060]`

  return (
    <NavLink 
      {...rest}
      className={({ isActive, isPending }) => 
        isActive ? activeClasses : 
        isPending ? pendingClasses : 
        baseClasses
      }
    >
      {children}
    </NavLink>
  );
}
