import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <p className="text-green-500 font-mono">
        Verdadeiramente, você é um hackerman...
      </p>
      {/* Substituir código acima por sidebar */}
      <Outlet />
    </div>
  )
}
