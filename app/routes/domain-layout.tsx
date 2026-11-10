import DomainLayout from '~/layouts/DomainLayout'
import type { Route } from './+types/domain-layout'

const requireClientAuth: Route.ClientMiddlewareFunction 
  = async ({ request, context }) => {
  // TODO: Essa é uma função de middleware para verificar se o usuário está autenticado.
}

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  requireClientAuth
]

export default function Component() {
  return <DomainLayout />;
}
