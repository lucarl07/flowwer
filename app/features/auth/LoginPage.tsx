import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { AuthInput } from "./components/AuthInput";
import { PasswordInput } from "./components/PasswordInput";

import logo from "~/assets/images/logo.png";
import flor from "~/assets/images/flor.png";

// MOLDURA ONDULADA
const scallopFrame = [
  "[--bump:radial-gradient(circle_at_50%_50%,var(--color-beige)_1.95rem,transparent_2rem)]",
  "[background-image:var(--bump),var(--bump),var(--bump),var(--bump),linear-gradient(var(--color-beige),var(--color-beige))]",
  "[background-size:4rem_4rem,4rem_4rem,4rem_4rem,4rem_4rem,calc(100%_-_4rem)_calc(100%_-_4rem)]",
  "[background-position:top,bottom,left,right,center]",
  "[background-repeat:space_no-repeat,space_no-repeat,no-repeat_space,no-repeat_space,no-repeat]",
].join(" ");

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //chamar a API
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-darkgreen p-4 font-buenard md:h-dvh md:p-8">
      <div className="relative grid w-full max-w-6xl md:h-full md:max-h- md:grid-rows-[minmax(0,1fr)] md:grid-cols-[1.2fr_1fr]">
        {/* FUNDO BEGE ONDULADO */}
        <div
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-full md:w-[70%] ${scallopFrame}`}
        />

        {/* LADO ESQUERDO */}
        <section className="relative flex flex-col items-center justify-center px-12 py-10 text-center">
          <img src={logo} alt="flowwer" className="-mb-8 w-full max-w-md" />

          <p className="max-w-xs text-xl leading-snug tracking-wide text-darkgreen sm:text-2xl">
            Organize suas finanças, realize seus desejos
          </p>
        </section>

        {/* LADO DIREITO: FORMULÁRIO */}
        <section className="relative flex min-h-0 items-center justify-center rounded-3xl bg-[#e0dfc4] px-6 py-5 md:px-8 md:py-4">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col items-center gap-2"
          >
            <h1 className="mb-0 text-center font-playwrite text-2xl text-darkgreen lg:text-3xl">
              flow into your account
            </h1>

            <AuthInput
              name="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              required
              autoComplete="email"
            />

            <PasswordInput
              name="password"
              label="Password"
              value={password}
              onChange={setPassword}
              required
              autoComplete="current-password"
            />

            <button
              type="submit"
              className="mt-1 rounded-2xl bg-pink px-12 py-2 font-buenard text-lg tracking-wide text-darkgreen/60 transition hover:brightness-95"
            >
              login
            </button>

            <p className="text-center font-playwrite text-base text-darkgreen lg:text-lg">
              don’t have an account?{" "}
              <Link to="/signup" className="underline-offset-4 hover:underline">
                sign up
              </Link>
            </p>
          </form>
        </section>
      </div>

      {/* FLOR NO CANTO */}
      <img
        src={flor}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-35 -left-80 z-10 hidden w-md md:block lg:w-[42rem]"
      />
    </main>
  );
}