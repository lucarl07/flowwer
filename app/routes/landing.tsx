import LandingPage from '~/features/landing/LandingPage';
import type { Route } from './+types/landing'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "flowwer: Seu gestor de finanças." }
  ]
}

export default function Component() {
  return <LandingPage />;
}

