import { NavLink, type NavLinkProps } from "react-router";

interface IStyledNavLink extends NavLinkProps {}

export default function StyledNavLink({ 
  children, ...rest 
}: IStyledNavLink) {
  const baseClasses = "rounded-full"
  const activeClasses = `${baseClasses} bg-[#ffb3b3]`
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
