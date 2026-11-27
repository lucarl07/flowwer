import { describe, expect, it, vi } from "vitest"
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router";
import SignupPage from "../SignupPage"

/**
 * Fornece algumas ferramentas para realização dos testes. 
 * Função criada com o propósito de evitar repetição excessiva de código (princípio DRY).
 */
function setup() {
  const user = userEvent.setup();

  const { container } = render(
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  );

  const onSubmit = vi.fn();
  container.querySelector("form")!.addEventListener("submit", onSubmit);

  return {
    container, user, onSubmit,
    inName: screen.getByLabelText(/\bname\b/i),
    inEmail: screen.getByLabelText(/\be-?mail\b/i),
    inPassword: screen.getByLabelText(/^password$/i),
    inConfirmPassword: screen.getByLabelText(/\bconfirm\s?password\b/i),
    btnSignup: screen.getByRole("button", { name: /\bsign\s?up/i }),
  };
}

describe("Página: SignupPage", () => {
  describe("Comportamento da página", () => {
    it("Carrega os componentes de formulário (inputs + button)", () => {
      const { inName, inEmail, inPassword, inConfirmPassword, btnSignup } = setup()

      expect(inName).toBeInTheDocument();
      expect(inEmail).toBeInTheDocument();
      expect(inPassword).toBeInTheDocument();
      expect(inConfirmPassword).toBeInTheDocument();
      expect(btnSignup).toBeInTheDocument();
    })
  })

  describe("Interações do usuário", () => {
    it("Redireciona para a página \"/login\"", () => {
      setup()

      const loginLink = screen.getByRole('link', { 
        name: /\blog\s?in\b/i 
      })

      expect(loginLink).toBeInTheDocument()
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

    it("Não envia quando o campo de nome está vazio", async () => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      await user.type(inEmail, "fulano@detal.com")
      await user.type(inPassword, "senhamuitosegura")
      await user.type(inConfirmPassword, "senhamuitosegura")
      await user.click(btnSignup)

      expect(onSubmit).not.toHaveBeenCalled();
      expect(inName).toBeInvalid();
      expect(inEmail).toBeValid();
      expect(inPassword).toBeValid();
      expect(inConfirmPassword).toBeValid();
    });

    it("Não envia quando o campo de e-mail está vazio", async () => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      await user.type(inName, "Fulano")
      await user.type(inPassword, "senhamuitosegura")
      await user.type(inConfirmPassword, "senhamuitosegura")
      await user.click(btnSignup)

      expect(onSubmit).not.toHaveBeenCalled();
      expect(inName).toBeValid();
      expect(inEmail).toBeInvalid();
      expect(inPassword).toBeValid();
      expect(inConfirmPassword).toBeValid();
    });

    it("Não envia quando o campo da senha está vazio", async () => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      await user.type(inName, "Fulano")
      await user.type(inEmail, "fulano@detal.com")
      await user.type(inConfirmPassword, "senhamuitosegura")
      await user.click(btnSignup)

      expect(onSubmit).not.toHaveBeenCalled();
      expect(inName).toBeValid();
      expect(inEmail).toBeValid();
      expect(inPassword).toBeInvalid();
      expect(inConfirmPassword).toBeValid();
    });

    it("Não envia quando o campo de confirmar senha está vazio", async () => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      await user.type(inName, "Fulano")
      await user.type(inEmail, "fulano@detal.com")
      await user.type(inPassword, "senhamuitosegura")
      await user.click(btnSignup)

      expect(onSubmit).not.toHaveBeenCalled();
      expect(inName).toBeValid();
      expect(inEmail).toBeValid();
      expect(inPassword).toBeValid();
      expect(inConfirmPassword).toBeInvalid();
    });

    it("Não faz chamada à API quando as duas senhas não estão iguais", async () => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      const passwordA = "umaSenhaAí"
      const passwordB = "outra_senha_ai"

      await user.type(inName, "Fulano")
      await user.type(inEmail, "fulano@detal.com")
      await user.type(inPassword, passwordA)
      await user.type(inConfirmPassword, passwordB)
      await user.click(btnSignup)

      expect(passwordA).not.toBe(passwordB);
      expect(onSubmit).toHaveBeenCalled(); // Nesse caso, handleSubmit é chamado, apenas não executa nenhuma Promise
      expect(inName).toBeValid();
      expect(inEmail).toBeValid();
      expect(inPassword).toBeValid();
      expect(inConfirmPassword).toBeInvalid();
 
    });

    it.for(invalidEmails)("Não envia quando o e-mail é inválido: %s", async (email) => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      await user.type(inName, "Fulano")
      await user.type(inEmail, email)
      await user.type(inPassword, "senhamuitosegura")
      await user.type(inConfirmPassword, "senhamuitosegura")
      await user.click(btnSignup)

      expect(onSubmit).not.toHaveBeenCalled();
      expect(inName).toBeValid();
      expect(inEmail).toBeInvalid();
      expect(inPassword).toBeValid();
      expect(inConfirmPassword).toBeValid();
    })

    it("Envia quando as informações estão corretamente preenchidas", async () => {
      const {
        user, btnSignup, onSubmit,
        inName, inEmail, inPassword, inConfirmPassword
      } = setup()

      await user.type(inName, "Fulano")
      await user.type(inEmail, "fulano@detal.com")
      await user.type(inPassword, "senhamuitosegura")
      await user.type(inConfirmPassword, "senhamuitosegura")
      await user.click(btnSignup)

      expect(onSubmit).toHaveBeenCalled();
      expect(inName).toBeValid();
      expect(inEmail).toBeValid();
      expect(inPassword).toBeValid();
      expect(inConfirmPassword).toBeValid();
    })
  })

  describe("Pós-envio do formulário")
})

