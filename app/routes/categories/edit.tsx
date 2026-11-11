import SaveCategoriesPage from '~/features/categories/SaveCategoriesPage';
import type { Route } from './+types/edit'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Editar categoria | flowwer" }
  ]
}

export default function Component() {
  return <SaveCategoriesPage />;
}

