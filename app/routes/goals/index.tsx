import GoalsPage from '~/features/goals/GoalsPage';
import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Metas | flowwer" }
  ]
}

export default function Component() {
  return <GoalsPage />;
}

