import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Categorias | flowwer" }
  ]
}

export default function Component() {
  return (
    <hgroup>
      <p>Página pós-autenticação! Yay!</p>
    </hgroup>
  );
}

