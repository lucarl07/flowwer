import { Outlet } from "react-router";

import $logo from "~/assets/images/logo.png";
import ScallopedSection from "~/components/ui/ScallopedSection";

export default function DomainLayout() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-8">
      <ScallopedSection 
        bottom
        as="header" 
        className="sm:hidden"
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
        top
        as="footer"
        autoMargin={false}
        className="
          fixed bottom-0 inset-x-0 z-10 h-20 flex items-center justify-around
          <temp> text-red-500
          sm:hidden
        "
      >
        hi mom
      </ScallopedSection>
    </div>
  )
}
