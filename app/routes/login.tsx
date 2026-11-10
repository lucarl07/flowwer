import type { Route } from './+types/login'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entre na sua conta | flowwer" }
  ]
}

export async function action({ request }: Route.ClientActionArgs) {
  /* TODO: Esse é uma função que age em cima de formulários;
   * insira códigos do TanStack Query aqui! */
}

export default function Component() {
  return (
    <hgroup>
      <h1>Página de Login</h1>
      <p>Página pré-autenticação...</p>
    </hgroup>
  );
}

