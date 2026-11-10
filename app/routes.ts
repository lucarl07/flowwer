import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  // ==== Páginas de Entrada ====
  index("routes/landing.tsx"),
  route("/login", "routes/login.tsx"),
  route("/signup", "routes/signup.tsx"),

  // ==== Páginas de Domínio ====
  layout("routes/domain-layout.tsx", [ 
    route("/dashboard", "routes/dashboard.tsx"),

    ...prefix("transactions", [
      index("routes/transactions/index.tsx"),
      route("/create", "routes/transactions/create.tsx"),
      route("/edit/:transactionId", "routes/transactions/edit.tsx"),
    ]),

    ...prefix("categories", [
      index("routes/categories/index.tsx"),
      route("/create", "routes/categories/create.tsx"),
      route("/edit/:categoryId", "routes/categories/edit.tsx"),
    ]),

    ...prefix("goals", [
      index("routes/goals/index.tsx"),
      route("/create", "routes/goals/create.tsx"),
      route("/edit/:goalId", "routes/goals/edit.tsx"),
    ])
  ]),
] satisfies RouteConfig;

