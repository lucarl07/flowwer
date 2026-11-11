import TransactionsPage from '~/features/transactions/TransactionsPage';
import type { Route } from './+types/index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Movimentações | flowwer" }
  ]
}

export default function Component() {
  return <TransactionsPage />;
}

