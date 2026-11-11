import SaveTransactionPage from '~/features/transactions/SaveTransactionPage';
import type { Route } from './+types/edit'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Editar movimentação | flowwer" }
  ]
}

export default function Component() {
  return <SaveTransactionPage />;
}

