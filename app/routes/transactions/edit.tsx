import type { Route } from './+types/edit'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Editar movimentação | flowwer" }
  ]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  /* TODO: Esse é uma função que carrega dados vindos da API;
   * insira códigos do TanStack Query aqui! */
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

