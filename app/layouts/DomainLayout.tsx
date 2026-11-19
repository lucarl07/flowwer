import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import $logoflor2 from "~/assets/images/logoflor2.png";

import ScallopedSection from "~/components/ui/ScallopedSection";
import StyledNavLink from "~/components/ui/StyledNavLink";
import PageIcon from "~/components/ui/PageIcon";

export default function DomainLayout() {
  return (
    <div className="
      flex flex-col 
      sm:flex-row sm:min-h-screen sm:gap-10 
    ">
      <aside className="
        hidden sm:flex scalloped-r
        sticky flex-col top-0 h-screen bg-[#f7f4d5] w-64 ps-4 pe-10
        bg-(image:--img-flores) bg-no-repeat bg-position-[right_-60px_bottom_-120px] bg-size-[250%_auto]
      ">
        <img 
          src={$logoflor2} 
          alt="Logotipo do Flowwer"
          className="m-5 bg-clip-content pe-4"
        />
        <nav className="flex flex-col gap-5.25"> 
          {/* TODO: Flores ficam por trás dos itens dependendo da 
            resolução; o que fazer? */}
          <StyledNavLink to="/dashboard">
            <PageIcon page="dashboard" />
            <span>
              Início
            </span>
          </StyledNavLink>
          <StyledNavLink to="/transactions">
            <PageIcon page="transactions" />
            <span>
              Movimentações
            </span>
          </StyledNavLink>
          <StyledNavLink to="/categories">
            <PageIcon page="categories" />
            <span>
              Categorias
            </span>
          </StyledNavLink>
          <StyledNavLink to="/goals">
            <PageIcon page="goals" />
            <span>
              Metas
            </span>
          </StyledNavLink>
        </nav>
      </aside>
      <header className="
        pb-6 bg-[#f7f4d5] scalloped-b
        sm:hidden
      ">
        <img 
          src={$logo} 
          alt="Logo do Flowwer"
          className="w-36 my-3 ms-4 object-contain"
        />
      </header>
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

