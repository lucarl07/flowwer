import type { Route } from './+types/edit'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Editar meta | flowwer" }
  ]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  /* TODO: Esse é uma função que PODE carregar dados vindos da API; use 
   * essa função para validar se chegaram parâmetros de rota (editar 
   * registro) ou não (criar novo registro), apenas chamando a API aqui se
   * já existirem. */
}

export async function action({ request }: Route.ClientActionArgs) {
  /* TODO: Esse é uma função que age em cima de formulários;
   * insira códigos do TanStack Query aqui! */
}

export default function Component() {
  return (
    <hgroup>
      <p>Página pós-autenticação! Yay!</p>
    </hgroup>
  );
}

