import DomainLayout from '~/layouts/DomainLayout'
import { authMiddleware } from '~/lib/middleware';
import type { Route } from './+types/domain-layout'

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [
  authMiddleware
]

export default function Component() {
  return <DomainLayout />;
}
