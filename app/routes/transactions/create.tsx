import SaveTransactionPage from '~/features/transactions/SaveTransactionPage';
import type { Route } from './+types/create'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adicionar movimentação | flowwer" }
  ]
}

export default function Component() {
  return <SaveTransactionPage />;
}

