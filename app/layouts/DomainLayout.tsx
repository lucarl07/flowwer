import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";

import ScallopedSection from "~/components/ui/ScallopedSection";
import StyledNavLink from "~/components/ui/StyledNavLink";
import PageIcon from "~/components/ui/PageIcon";

export default function DomainLayout() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-8">
      <ScallopedSection 
        as="header" 
        className="sm:hidden"
        bottom
      >
        <img 
          src={$logo} 
          alt="Logo do Flowwer"
          className="w-36 my-4 ms-4 object-contain"
        />
      </ScallopedSection>
      {/*
        Aqui vou adicionar um componente lateral recortado p/os layouts de
        desktop...
      */}
      <Outlet />
      <ScallopedSection 
        as="footer"
        autoMargin={false}
        className="
          fixed bottom-0 inset-x-0 z-10 h-20 flex items-center justify-around text-[#0a3323]
          sm:hidden
        "
        top 
      >
        <nav className="w-full px-14 inline-flex items-center justify-between">
          <StyledNavLink to="/dashboard">
            <PageIcon page="dashboard" />
          </StyledNavLink>
          <StyledNavLink to="/transactions">
            <PageIcon page="transactions" />
          </StyledNavLink>
          <StyledNavLink to="/categories">
            <PageIcon page="categories" />
          </StyledNavLink>
          <StyledNavLink to="/goals">
            <PageIcon page="goals" />
          </StyledNavLink>
        </nav>
      </ScallopedSection>
    </div>
  )
}

