import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { MemoryRouter } from "react-router";
import LoginPage from "../LoginPage";

function setup() {
  const user = userEvent.setup();

  const { container } = render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  const onSubmit = vi.fn();
  container.querySelector("form")!.addEventListener("submit", onSubmit);

  return {
    container,
    user,
    onSubmit,
    email: screen.getByLabelText(/\be-?mail\b/i),
    senha: screen.getByLabelText(/\bpassword\b/i),
    botao: screen.getByRole("button", { name: /login/i }),
  };
}

describe("Página: LoginPage", () => {
  describe("Comportamento básico", () => {
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
  })

  describe("Envio do formulário", () => {
    const invalidEmails = [
      "email", 
      "email.com", 
      "@address", 
      "@address.com", 
    ]

    it("Impede o envio padrão do navegador", () => {
      const { container } = setup()
      const form = container.querySelector("form")!
      const didDefaultAction = fireEvent.submit(form)

      expect(didDefaultAction).toBe(false)
    })

    it("Não envia quando e-mail e senha estão vazios", async () => {
      const { user, onSubmit, email, senha, botao } = setup();

      await user.click(botao);

      expect(onSubmit).not.toHaveBeenCalled();
      expect(email).toBeInvalid();
      expect(senha).toBeInvalid();
    });

    it("Não envia quando apenas o e-mail está preenchido", async () => {
      const { user, onSubmit, email, senha, botao } = setup();

      await user.type(email, "email@valido.com")
      await user.click(botao);

      expect(onSubmit).not.toHaveBeenCalled();
      expect(email).toBeValid();
      expect(senha).toBeInvalid();
    });

    it("Não envia quando apenas a senha está preenchida", async () => {
      const { user, onSubmit, email, senha, botao } = setup();

      await user.type(senha, "senhaqualquer")
      await user.click(botao);

      expect(onSubmit).not.toHaveBeenCalled();
      expect(email).toBeInvalid();
      expect(senha).toBeValid();
    });

    it.for(invalidEmails)("Não envia quando o e-mail é inválido: %s", async (invalidEmail) => {
      const { user, onSubmit, email, senha, botao } = setup();
      const _password = "12345678"

      await user.type(senha, _password)
      await user.type(email, invalidEmail)
      await user.click(botao);

      expect(onSubmit).not.toHaveBeenCalled();
      expect(email).toBeInvalid();
      expect(senha).toBeValid();
    });

    it("Envia quando o e-mail é válido e a senha está preenchida", async () => {
      const { user, onSubmit, email, senha, botao } = setup();
      const _email = "meuEmail@valido.com"
      const _password = "12345678"

      await user.type(senha, _password)
      await user.type(email, _email)
      await user.click(botao);

      expect(onSubmit).toHaveBeenCalled();
      expect(email).toBeValid();
      expect(senha).toBeValid();
    })
  })
})

