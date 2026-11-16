import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import ICON_Home from "~/assets/icons/barrafixa/home.png"
import ICON_Movimentacoes from "~/assets/icons/barrafixa/movimentações.png"
import ICON_Categorias from "~/assets/icons/barrafixa/categorias.png"
import ICON_Metas from "~/assets/icons/barrafixa/metas.png"

import ScallopedSection from "~/components/ui/ScallopedSection";
import StyledNavLink from "~/components/ui/StyledNavLink";

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
          className="w-48 object-contain"
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
            <img 
              src={ICON_Home} 
              alt="Ir à página inicial" 
              className="p-1 w-12"
            />
          </StyledNavLink>
          <StyledNavLink to="/transactions">
            <img 
              src={ICON_Movimentacoes} 
              alt="Ir à página de movimentações" 
              className="p-1 w-12"
            />
          </StyledNavLink>
          <StyledNavLink to="/categories">
            <img 
              src={ICON_Categorias} 
              alt="Ir à página de categorias" 
              className="p-1 w-12"
            />
          </StyledNavLink>
          <StyledNavLink to="/goals">
            <img 
              src={ICON_Metas} 
              alt="Ir à página de metas" 
              className="p-1 w-12"
            />
          </StyledNavLink>
        </nav>
      </ScallopedSection>
    </div>
  )
}

