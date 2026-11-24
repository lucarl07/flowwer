import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import LoginPage from "../LoginPage";

describe("Página: LoginPage", () => {
  // ==== Definindo identificadores ====
  const emailLabelText = /\be-?mail\b/i  // Ex.: 'EMAIL', 'E-mail', 'e-mail', 'email'
  const senhaLabelText = /\bsenha\b/i   // Ex.: 'SENHA', 'Senha', 'senha'

  beforeEach(() => {
    render(<LoginPage />)
  })

  it("Carrega os componentes de entrada AuthInput e PasswordInput", () => {
    expect(
      screen.getByLabelText(emailLabelText)
    ).toBeInTheDocument()

    expect(
      screen.getByLabelText(senhaLabelText)
    ).toBeInTheDocument()
  })

  it("Atualiza o valor dos componentes de entrada ao digitar neles", async () => {
    const fakeUser = userEvent.setup()
    const emailValue = "Olá mundo!"
    const senhaValue = "Lorem ipsum"

    await fakeUser.type(
      screen.getByLabelText(emailLabelText),
      emailValue
    )

    await fakeUser.type(
      screen.getByLabelText(senhaLabelText),
      senhaValue
    )

    expect(
      screen.getByLabelText(emailLabelText)
    ).toHaveValue(emailValue)

    expect(
      screen.getByLabelText(senhaLabelText)
    ).toHaveValue(senhaValue)
  })

  it.skip("Impede login sem inserir um e-mail", async () => {})
  it.skip("Dispara a função onSubmit ao clicar no botão de tipo \"submit\"", async () => {})
})
