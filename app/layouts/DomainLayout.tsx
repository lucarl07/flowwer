import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import $logoflor2 from "~/assets/images/logoflor2.png";

import StyledNavLink from "~/components/ui/StyledNavLink";
import PageIcon from "~/components/ui/PageIcon";

export default function DomainLayout() {
  return (
    <div className="
      flex flex-col-reverse min-h-screen gap-10 
      sm:flex-row 
    ">
      <aside className="
        flex bg-[#f7f4d5] px-10 pb-4 pt-10 scalloped-t 
        sm:sticky sm:flex-col sm:top-0 sm:h-screen sm:w-64 sm:py-0 sm:ps-4 sm:pe-10 sm:scalloped-r
        sm:bg-(image:--img-flores) sm:bg-no-repeat sm:bg-position-[right_-60px_bottom_-120px] sm:bg-size-[250%_auto]
      ">
        <img 
          src={$logoflor2} 
          alt="Logotipo do Flowwer"
          className="
            hidden 
            sm:inline-block sm:m-5 sm:bg-clip-content sm:pe-4
          "
        />
        <nav className="
          inline-flex justify-around w-full 
          sm:flex sm:flex-col sm:items-stretch sm:gap-5.25 
        "> 
          {/* TODO: Flores ficam por trás dos itens dependendo da 
            resolução; o que fazer? */}
          <StyledNavLink to="/dashboard">
            <PageIcon page="dashboard" />
            <span className="hidden sm:inline">
              Início
            </span>
          </StyledNavLink>
          <StyledNavLink to="/transactions">
            <PageIcon page="transactions" />
            <span className="hidden sm:inline">
              Movimentações
            </span>
          </StyledNavLink>
          <StyledNavLink to="/categories">
            <PageIcon page="categories" />
            <span className="hidden sm:inline">
              Categorias
            </span>
          </StyledNavLink>
          <StyledNavLink to="/goals">
            <PageIcon page="goals" />
            <span className="hidden sm:inline">
              Metas
            </span>
          </StyledNavLink>
        </nav>
      </aside>
      <Outlet />
      <header className="
        fixed flex z-10 top-0 pb-6 bg-[#f7f4d5] w-full scalloped-b
        sm:hidden
      ">
        <img 
          src={$logo} 
          alt="Logo do Flowwer"
          className="w-36 my-3 ms-4 object-contain"
        />
      </header>
      {/* 
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
      */}
    </div>
  )
}

