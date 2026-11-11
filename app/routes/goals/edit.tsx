import SaveGoalsPage from '~/features/goals/SaveGoalsPage';
import type { Route } from './+types/edit'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Editar meta | flowwer" }
  ]
}

export default function Component() {
  return <SaveGoalsPage />;
}

