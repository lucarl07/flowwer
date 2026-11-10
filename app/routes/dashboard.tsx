import type { Route } from './+types/dashboard'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Início | flowwer" }
  ]
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  /* TODO: Esse é uma função que carrega dados vindos da API;
   * insira códigos do TanStack Query aqui! */
}

export default function Component() {
  return (
    <hgroup>
      <h1>Página Inicial (Dashboard)</h1>
      <p>Página pós-autenticação! Yay!</p>
    </hgroup>
  );
}

