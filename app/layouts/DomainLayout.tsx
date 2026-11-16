import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import ScallopedFooter from "~/components/ui/ScallopedFooter";
import ScallopedHeader from "~/components/ui/ScallopedHeader";

export default function DomainLayout() {
  return (
    <div className="flex flex-col h-100% justify-between">
      <ScallopedHeader>
        <img 
          src={$logo} 
          alt="Logo do Flowwer"
          className="w-8/15 object-contain"
        />
      </ScallopedHeader>
      <Outlet />
      <ScallopedFooter className="hidden">
        hi mom
      </ScallopedFooter>
    </div>
  )
}
