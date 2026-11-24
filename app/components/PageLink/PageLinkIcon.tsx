import ICON_Home from "~/assets/icons/barrafixa/home.png"
import ICON_Movimentacoes from "~/assets/icons/barrafixa/movimentacoes.png"
import ICON_Categorias from "~/assets/icons/barrafixa/categorias.png"
import ICON_Metas from "~/assets/icons/barrafixa/metas.png"

interface IPageLinkIcon {
  page: 'home' | 'dashboard' | 'transactions' | 'categories' | 'goals'
  // TODO: Ver se eu tenho que manter a página '/dashboard' como 
  // "Dashboard/Painel" ou "Início"
}

function getIconSrc(page: IPageLinkIcon['page']): string {
  switch (page) {
    case "home":
    case "dashboard":
      return ICON_Home
    case "transactions":
      return ICON_Movimentacoes
    case "categories":
      return ICON_Categorias
    case "goals":
      return ICON_Metas
  }
}

function getIconAlt(page: IPageLinkIcon['page']): string {
  switch (page) {
    case "home":
    case "dashboard":
      return 'Ir à página inicial'
    case "transactions":
      return 'Ir à página de movimentações'
    case "categories":
      return 'Ir à página de categorias'
    case "goals":
      return 'Ir à página de metas'
  }
}

export default function PageLinkIcon({ page }: IPageLinkIcon) {
  const src = getIconSrc(page)
  const alt = getIconAlt(page)

  return (
    <img 
      src={src} alt={alt} 
      className="p-1 w-12"
    />
  );
}

