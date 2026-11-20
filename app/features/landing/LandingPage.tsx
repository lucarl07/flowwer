
import type { ReactNode } from "react";
import { Link } from "react-router";

import logo from "~/assets/images/logo.png";
import lilies from "~/assets/images/flores.png";
import movimentacoesIcon from "~/assets/icons/barrafixa/movimentacoes.png";
import metasIcon from "~/assets/icons/barrafixa/metas.png";
import dashboardIcon from "~/assets/icons/dashboard.png";
import categorias from "~/assets/icons/barrafixa/categorias.png";
import githubflowwer from "~/assets/images/githubflowwer.png"

  {/* bordas onduladas */}
const scallopBase = "h-12 bg-repeat-x bg-[length:6rem_3rem]";
const scallopDown =
  "bg-[radial-gradient(circle_at_50%_0,var(--color-beige)_2.95rem,transparent_3rem)]";
const scallopUp =
  "bg-[radial-gradient(circle_at_50%_100%,var(--color-beige)_2.95rem,transparent_3rem)]";

 {/* cards */}
const features: {
  title: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    title: "Dashboard",
    description:
      "tenha uma visão geral da sua vida financeira, acompanhando seu saldo, receitas e despesas em um só lugar.",
    icon: (
      <img
        src={dashboardIcon}
        alt=""
        className="h-14 w-14 object-contain"
      />
    ),
  },
  {
    title: "Categorias",
    description:
      "organize seus gastos por categorias e descubra para onde seu dinheiro está indo.",
    icon: (
      <img
        src={categorias}
        alt=""
        className="h-14 w-14 object-contain"
      />
    ),
  },
  {
    title: "Movimentações",
    description:
      "registre e acompanhe suas receitas e despesas, mantendo o controle de tudo o que entra e sai do seu dinheiro.",
    icon: (
      <img
        src={movimentacoesIcon}
        alt=""
        className="h-14 w-14 object-contain"
      />
    ),
  },
  {
    title: "Metas",
    description:
      "defina seus objetivos financeiros, acompanhe seu progresso e transforme seus planos em conquistas.",
    icon: (
      <img
        src={metasIcon}
        alt=""
        className="h-14 w-14 object-contain"
      />
    ),
  },
];

export default function LandingPage() {
  return (
    <div className="font-buenard text-darkgreen">
      <section className="bg-beige">       

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-16 pt-2 text-center">
          <img
            src={logo}
            alt="flowwer"
            className="-mb-59 -mt-50 w-full max-w-3xl"
          />
          <p className="text-xl tracking-wide sm:text-3xl">
            Organize suas finanças, realize seus desejos
          </p> 
          <Link
            to="/login"
            className="rounded-full bg-lightgreen/75 hover:bg-lightgreen px-16 py-3 text-3xl tracking-wide text-blue transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* container das funcionalidades*/}
      <div className="relative overflow-hidden bg-darkgreen">
        {/* flor de fundo nas duas seções */}
        <img
          src={lilies}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top rotate-180 -translate-y-90"
        />

        <div
          className={`${scallopBase} ${scallopDown} relative z-10`}
          aria-hidden="true"
        />

        {/* funcionalidades */}
        <section
          className="relative z-10 px-6 pb-20 pt-10"
        >
          <div className="relative mx-auto max-w-6xl">
            <h2 className="
              mx-auto max-w-3xl text-center font-playwrite text-3xl leading-tight text-lightgreen drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] 
              sm:text-5xl
            ">
              Tudo que você precisa pra uma vida financeira organizada
            </h2>

            <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="
                    flex flex-col items-center gap-2 rounded-3xl bg-beige px-5 py-7 text-center shadow-[0_0_40px_rgba(188,216,131,0.3)] 
                    transition-transform duration-300 ease-in-out hover:scale-[1.03]
                  "
                >
                  <span>{feature.icon}</span>
                  <h3 className="text-2xl tracking-wide">{feature.title}</h3>
                  <p className="text-sm leading-snug">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* chamada final */}
        <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 md:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col items-center gap-6 text-center">
            <img
              src={logo}
              alt="flowwer"
              className="
                -my-10 w-full max-w-none
                lg:-mb-20 lg:-mt-20 
              "
            />
            <p className="max-w-xs text-2xl leading-snug tracking-wide -mt-40 text-lightgreen">
              Controle seus gastos, acompanhe seu saldo e alcance seus
              objetivos com facilidade e clareza
            </p>
          </div>

          <div className="flex mt-35 flex-col items-center gap-3">
            <Link
              to="/signup"
              className="w-full max-w-xs rounded-full bg-pink/75 py-3 text-center text-3xl tracking-wide transition hover:bg-pink"
            >
              Cadastre-se
            </Link>
            <Link
              to="/login"
              className="w-full max-w-xs rounded-full bg-pink/75 py-3 text-center text-3xl tracking-wide transition hover:bg-pink"
            >
              Login
            </Link>
          </div>
        </section>

        <div
          className={`${scallopBase} ${scallopUp} relative z-10`}
          aria-hidden="true"
        />
      </div>

      {/* rodape */}
      <footer className="flex flex-wrap items-center justify-center gap-4 bg-beige px-6 pb-8 pt-2 text-center text-lg tracking-wide sm:text-xl">
        <p>
          ©2026 Desenvolvido por @salsapunk, @ligiandrz, @lucarl07, @madubr e @jpedrooss no GitHub. Para mais informações, acesse:
        </p>

        <a
          href="https://github.com/lucarl07/flowwer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar repositório do Flowwer no GitHub"
          className="
            flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink transition duration-300 
            hover:scale-110 hover:brightness-95
          "
        >
          <img
            src={githubflowwer}
            alt=""
            className="h-13 w-13 object-contain"
          />
        </a>
      </footer>
    </div>
  );
}
