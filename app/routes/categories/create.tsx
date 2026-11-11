import SaveCategoriesPage from '~/features/categories/SaveCategoriesPage';
import type { Route } from './+types/create'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Criar categoria | flowwer" }
  ]
}

export default function Component() {
  return <SaveCategoriesPage />;
}

