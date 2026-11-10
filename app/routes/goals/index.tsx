import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Metas | flowwer" }
  ]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  /* TODO: Esse é uma função que carrega dados vindos da API;
   * insira códigos do TanStack Query aqui! */
}

export default function Component() {
  return (
    <hgroup>
      <p>Página pós-autenticação! Yay!</p>
    </hgroup>
  );
}

