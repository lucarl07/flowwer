import type { Route } from './+types/create'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adicionar movimentação | flowwer" }
  ]
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

