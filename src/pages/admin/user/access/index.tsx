import { Edit2, Map, Plus, Search } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Trash2,
} from "lucide-react";
import useAccess from "./access-model";
import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";

export default function Index() {
  const hook = useAccess();
  const arr = [
    {
      role: "Admin",
    },
    {
      role: "Super Admin",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs
        data={[
          { name: "User", link: "../user/account" },
          { name: "Access", link: "../user/account", active: true },
        ]}
      />
      <div className="flex flex-col gap-4 border p-6 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl text-[#313030] font-bold">
              User Account
            </span>
            <span className="text-base text-[#667085]">
              Management account & access
            </span>
          </div>
          <button className="h-[48px] px-4 gap-2 rounded bg-primary-red flex items-center text-white">
            <Plus size={20} strokeWidth={2.5} />
            <span className="font-semibold">Create New User</span>
          </button>
        </div>
        <div className="flex bg-gray-50 p-1 gap-2 items-center rounded-md w-fit border">
          <button
            onClick={() => hook.navigate("../account")}
            className="h-8 px-3 rounded text-sm text-[#313030] font-semibold hover:bg-white"
          >
            Account
          </button>
          <button className="h-8 px-3 bg-white rounded text-sm text-[#313030] font-semibold">
            Access
          </button>
        </div>
        <div className="w-full bg-gray-50 rounded-md border flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2 border bg-white w-[250px] h-8 rounded-md px-3 text-base">
            <Search color="#D0D3D9" size={18} />
            <input
              type="search"
              className="outline-none flex-1 bg-transparent"
              placeholder="Search..."
              // onChange={handleSearch}
            />
          </div>
        </div>
        <div className="border flex-1 flex rounded-md overflow-hidden">
          <table className="flex-1">
            <thead className="border-b bg-gray-50">
              <tr className="px-4">
                <th className="text-start px-4 py-3 text-base font-medium">
                  Role
                </th>
                <th className="text-start px-4 py-3 text-base font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {arr?.map((item, i) => (
                <tr className="border-b" key={i}>
                  <td className="text-start p-4 text-base">{item.role}</td>
                  <td className="text-start p-4 text-base">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => hook.navigate("mapping-menu")}
                        className="w-9 h-9 rounded bg-[#667085] flex items-center justify-center"
                      >
                        <Map color="white" size={16} />
                      </button>
                      <button className="w-9 h-9 rounded bg-[#F79009] flex items-center justify-center">
                        <Edit2 color="white" size={16} />
                      </button>
                      <button className="w-9 h-9 rounded bg-[#DA3E33] flex items-center justify-center">
                        <Trash2 color="white" size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex items-center justify-between">
          <span>0 of 100 row(s) selected.</span>
          <div className="flex items-center gap-[32px]">
            <div className="flex items-center gap-3">
              <span>Limit</span>
              <select className="border bg-white h-[42px] px-1">
                <option>5</option>
                <option>10</option>
              </select>
            </div>
            <span>Page 1 of 10</span>
            <div className="flex items-center gap-2">
              <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
                <ChevronsLeft width={18} height={18} />
              </button>
              <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
                <ChevronLeft width={18} height={18} />
              </button>
              <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
                <ChevronRight width={18} height={18} />
              </button>
              <button className="w-[32px] h-[32px] border rounded-md bg-white flex items-center justify-center">
                <ChevronsRight width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
