import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import $logoflor2 from "~/assets/images/logoflor2.png";

import PageLink from "~/components/PageLink";

export default function DomainLayout() {
  return (
    <div className="
      flex flex-col-reverse min-h-screen gap-10 
      sm:flex-row 
    ">
      <aside className="
        flex bg-[#f7f4d5] px-10 pb-4 pt-10 scalloped-mask [--sc-t:24px]
        sm:sticky sm:flex-col sm:top-0 sm:h-screen sm:w-64 sm:py-0 sm:ps-4 sm:pe-10 sm:[--sc-t:0px] sm:[--sc-r:24px]
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
          <PageLink.Root to="/dashboard">
            <PageLink.Icon page="dashboard" />
            <PageLink.Label value="Início" hideOnMobile />
          </PageLink.Root>
          <PageLink.Root to="/transactions">
            <PageLink.Icon page="transactions" />
            <PageLink.Label value="Movimentações" hideOnMobile />
          </PageLink.Root>
          <PageLink.Root to="/categories">
            <PageLink.Icon page="categories" />
            <PageLink.Label value="Categorias" hideOnMobile />
          </PageLink.Root>
          <PageLink.Root to="/goals">
            <PageLink.Icon page="goals" />
            <PageLink.Label value="Metas" hideOnMobile />
          </PageLink.Root>
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
    </div>
  )
}

