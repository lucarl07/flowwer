import { redirect } from 'react-router'

interface IAuthMiddleware {
  // Temporário? Queria um substituto para o tipo "Route.ClientMiddlewareFunction"...
  request: any
  context: any
}

export const authMiddleware = async (
  { request, context }: IAuthMiddleware
): Promise<void> => {
  // TODO: Essa é uma função de middleware para verificar se o usuário está autenticado.

  const isUserAuthenticated = false

  if (!isUserAuthenticated) {
    throw redirect("/login")
  }
}

