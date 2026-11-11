import DashboardPage from '~/features/dashboard/DashboardPage';
import type { Route } from './+types/dashboard'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Início | flowwer" }
  ]
}

export default function Component() {
  return <DashboardPage />;
}

