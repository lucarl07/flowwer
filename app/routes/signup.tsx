import SignupPage from '~/features/auth/SignupPage';
import type { Route } from './+types/signup'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastre-se | flowwer" }
  ]
}

export default function Component() {
  return <SignupPage />;
}

