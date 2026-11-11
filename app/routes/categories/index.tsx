import CategoriesPage from '~/features/categories/CategoriesPage';
import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Categorias | flowwer" }
  ]
}

export default function Component() {
  return <CategoriesPage />;
}

