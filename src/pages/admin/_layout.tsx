import { Outlet } from "react-router";
import { Menu } from "lucide-react";
import companyLogo from "@assets/company-logo.png";
import useAdminLayout from "./admin-layout-model";

export default function LandingPage() {
  const hook = useAdminLayout();
  return (
    <>
      <header
        className={`fixed flex left-0 top-0 w-full transition-all`}
        style={{
          paddingLeft: `${hook.isOpenSidebar ? hook.padding.width : 0}px`,
          height: `${hook.padding.height}px`,
        }}
      >
        <div className="bg-primary-red flex-1 shadow-lg flex items-center px-6">
          <button onClick={() => hook.setIsOpenSidebar(!!!hook.isOpenSidebar)}>
            <Menu color="white" size={24} strokeWidth={2.5} />
          </button>
        </div>
      </header>
      <nav
        className={`fixed bg-white shadow-lg overflow-hidden flex flex-col left-0 top-0 h-full transition-all`}
        style={{ width: `${hook.isOpenSidebar ? hook.padding.width : 0}px` }}
      >
        <div
          className={`w-full h-[${hook.padding.height}px] ${
            hook.isOpenSidebar ? "opacity-100" : "opacity-0"
          } bg-white flex items-center justify-center px-6 shadow-md transition-all`}
          style={{ height: `${hook.padding.height}px` }}
        >
          <img src={companyLogo} alt="Company Logo" />
        </div>
        <div
          className={`w-full flex flex-1 p-6 ${
            hook.isOpenSidebar ? "opacity-100" : "opacity-0"
          } transition-all`}
          style={{ height: `${hook.padding.height}px` }}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: hook.sidebarMenu }} /> */}
          <hook.SidebarMenu />
        </div>
      </nav>
      <main
        className={`transition-all`}
        style={{
          paddingTop: `${hook.padding.height}px`,
          paddingLeft: `${hook.isOpenSidebar ? hook.padding.width : 0}px`,
        }}
      >
        <div className="h-[3000px] p-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}
