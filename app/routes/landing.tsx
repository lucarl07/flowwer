import type { Route } from './+types/landing'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "flowwer: Seu gestor de finanças." }
  ]
}

export default function Component() {
  return (
    <h1>Olá mundo!</h1>
  );
}

