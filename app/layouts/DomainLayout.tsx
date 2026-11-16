import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";

export default function DomainLayout() {
  return (
    <div className="flex flex-col">
    {/* <header className="flex h-16 px-2 pt-2 bg-[#f7f4d5]"> */}
    <header className="
      relative bg-[#f7f4d5] h-20 mb-6.5
      after:content-[''] after:absolute after:inset-x-0 after:-bottom-6.25 after:h-6.25
      after:bg-[radial-gradient(circle_at_50%_0,#fbf7d8_24px,transparent_25px)] 
      after:bg-size-[48px_25px] after:bg-repeat-x
    ">
      <img 
        src={$logo} 
        alt="Logo do Flowwer"
        className="w-8/15 object-contain"
      />
    </header>
      <Outlet />
    </div>
  )
}
