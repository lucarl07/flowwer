import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import ScallopedSection from "~/components/ui/ScallopedSection";

export default function DomainLayout() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-8">
      <ScallopedSection 
        as="header" 
        className="sm:hidden"
        bottom
      >
        <img 
          src={$logo} 
          alt="Logo do Flowwer"
          className="w-48 object-contain"
        />
      </ScallopedSection>
      {/*
      <div className="bg-[#f7f4d5]">
        haiiii
      </div>
      */}
      <Outlet />
      <ScallopedSection 
        as="footer"
        autoMargin={false}
        className="
          fixed bottom-0 inset-x-0 z-10 h-20 flex items-center justify-around text-[#0a3323]
          sm:hidden
        "
        top 
      >
        hi mom
      </ScallopedSection>
    </div>
  )
}

