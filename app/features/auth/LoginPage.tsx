import { useState } from "react";
import { AuthInput } from "./components/AuthInput";
import { PasswordInput } from "./components/PasswordInput";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //  event.preventDefault();
  //}

  return (
    <main>
      <form 
        //onSubmit={handleSubmit}
      >
        <h1>Entrar</h1>

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
          placeholder="Digite sua senha"
          value={password}
          onChange={setPassword}
          required
          autoComplete="current-password"
        />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
