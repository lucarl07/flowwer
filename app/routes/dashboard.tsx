import type { Route } from './+types/dashboard'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Início | flowwer" }
  ]
}

export default function Component() {
  return (
    <hgroup>
      <h1>Página Inicial (Dashboard)</h1>
      <p>Página pós-autenticação! Yay!</p>
    </hgroup>
  );
}

