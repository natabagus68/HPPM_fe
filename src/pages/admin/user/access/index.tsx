import { Edit2, Map, Plus } from "lucide-react";
import { Trash2 } from "lucide-react";
import useAccess from "./access-model";
import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";
import ModalContainer from "@common/components/modal/modal-container";
import ModalDelete from "@common/components/modal/modal-delete";
import Table from "@common/components/table/table";
import THead from "@common/components/table/thead";
import Tr from "@common/components/table/tr";
import Th from "@common/components/table/th";
import TBody from "@common/components/table/tbody";
import Td from "@common/components/table/td";
import Filter from "@common/components/table/fitler";
import Pagination from "@common/components/table/pagination";

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
          { name: "User", link: "/admin/user/account" },
          { name: "Access", link: "/admin/user/access", active: true },
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
        {/* <div className="w-full bg-gray-50 rounded-md border flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2 border bg-white w-[250px] h-8 rounded-md px-3 text-base">
            <Search color="#D0D3D9" size={18} />
            <input
              type="search"
              className="outline-none flex-1 bg-transparent"
              placeholder="Search..."
              // onChange={handleSearch}
            />
          </div>
        </div> */}
        <Filter />
        <Table>
          <THead>
            <Tr>
              <Th>Role</Th>
              <Th>Action</Th>
            </Tr>
          </THead>
          <TBody>
            {arr?.map((item, i) => (
              <Tr key={i}>
                <Td>{item.role}</Td>
                <Td className="w-0">
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
                    <button
                      onClick={() => hook.setOpenModalDelete(true)}
                      className="w-9 h-9 rounded bg-[#DA3E33] flex items-center justify-center"
                    >
                      <Trash2 color="white" size={16} />
                    </button>
                  </div>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
        <Pagination />
      </div>
      <ModalContainer open={hook.openModalDelete}>
        <ModalDelete
          setOpen={hook.setOpenModalDelete}
          fn={() => alert("Delete")}
        />
      </ModalContainer>
    </div>
  );
}
