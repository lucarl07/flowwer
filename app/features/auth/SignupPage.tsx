import { useState } from "react";
import { AuthInput } from "./components/AuthInput";
import { PasswordInput } from "./components/PasswordInput";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

//function handleSubmit(event: FormEvent<HTMLFormElement>) {
    //event.preventDefault();

    //if (password !== confirmPassword) {
      //setConfirmPasswordError("As senhas não coincidem");
      //return;
    //}
    //setConfirmPasswordError("");
    // chamar a API 
//}

  return (
    <main>
      <form>
        <h1>Criar conta</h1>

<AuthInput
  name="name"
  label="Nome"
  type="text"
  placeholder="Digite seu nome"
  value={name}
  onChange={setName}
  required
  autoComplete="name"
  />

<AuthInput
  name="email"
  label="E-mail"
  type="email"
  placeholder="Digite seu e-mail"
  value={email}
  onChange={setEmail}
  required
  autoComplete="email"
  />

<PasswordInput
  name="password"
  label="Senha"
  placeholder="Crie uma senha"
  value={password}
  onChange={setPassword}
  required
  autoComplete="new-password"
  />

<PasswordInput
  name="confirmPassword"
  label="Confirmar senha"
  placeholder="Digite sua senha novamente"
  value={confirmPassword}
  onChange={setConfirmPassword}
  required
  autoComplete="new-password"
  />

<button type="submit">Cadastrar</button>
  </form>
</main>
);
}
