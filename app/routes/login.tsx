import type { Route } from './+types/login'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entre na sua conta | flowwer" }
  ]
}

export default function Component() {
  return (
    <hgroup>
      <h1>Página de Login</h1>
      <p>Página pré-autenticação...</p>
    </hgroup>
  );
}

