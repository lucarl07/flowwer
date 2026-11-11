import LoginPage from '~/features/auth/LoginPage';
import type { Route } from './+types/login'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entre na sua conta | flowwer" }
  ]
}

export default function Component() {
  return <LoginPage />;
}

