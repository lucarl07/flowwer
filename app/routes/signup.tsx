import type { Route } from './+types/signup'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastre-se | flowwer" }
  ]
}

export default function Component() {
  return (
    <hgroup>
      <h1>Página de Cadastro</h1>
      <p>Página pré-autenticação...</p>
    </hgroup>
  );
}

