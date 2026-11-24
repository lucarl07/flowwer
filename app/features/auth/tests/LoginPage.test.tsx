import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import LoginPage from "../LoginPage";

function setup() {
  const user = userEvent.setup();
  const { container } = render(<LoginPage />);

  // Espiona o submit do <form>. O preventDefault evita o erro do jsdom
  // ("Not implemented: HTMLFormElement.prototype.requestSubmit/submit").
  const onSubmit = vi.fn((e: Event) => e.preventDefault());

  container.querySelector("form")!.addEventListener("submit", onSubmit);

  return {
    user,
    onSubmit,
    email: screen.getByLabelText(/\be-?mail\b/i),
    senha: screen.getByLabelText(/\bsenha\b/i),
    botao: screen.getByRole("button", { name: "Entrar" }),
  };
}

describe("Página: LoginPage", () => {
  it("Carrega os componentes de entrada e botão \"Entrar\"", () => {
    const { email, senha, botao } = setup()

    expect(email).toBeInTheDocument()
    expect(senha).toBeInTheDocument()
    expect(botao).toBeInTheDocument()
  })

  it("Atualiza o valor dos componentes de entrada ao digitar neles", async () => {
    const { user, email, senha } = setup()
    const emailValue = "Olá mundo!"
    const senhaValue = "Lorem ipsum"

    await user.type(email, emailValue)
    await user.type(senha, senhaValue)

    expect(email).toHaveValue(emailValue)
    expect(senha).toHaveValue(senhaValue)
  })

  it.skip("Impede login sem inserir um e-mail", async () => {})
  it.skip("Dispara a função onSubmit ao clicar no botão de tipo \"submit\"", async () => {})
})
