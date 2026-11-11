import type { Route } from './+types/create'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adicionar meta | flowwer" }
  ]
}

export default function Component() {
  return (
    <hgroup>
      <p>Página pós-autenticação! Yay!</p>
    </hgroup>
  );
}

