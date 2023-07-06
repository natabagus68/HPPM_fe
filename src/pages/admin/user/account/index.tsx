import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";
import { Plus, EyeIcon, Trash2, Edit2 } from "lucide-react";
import useAccount from "./_account-model";
import Filter from "@common/components/table/fitler";
import Table from "@common/components/table/table";
import THead from "@common/components/table/thead";
import Tr from "@common/components/table/tr";
import Th from "@common/components/table/th";
import TBody from "@common/components/table/tbody";
import Td from "@common/components/table/td";
import Pagination from "@common/components/table/pagination";
import Button from "@common/components/button/Button";

export default function Index() {
  const hook = useAccount();
  const arr = [
    {
      status: true,
      name: "Surya Wijaya",
      email: "curtis.weaver@example.com",
      role: "Super Admin",
    },
    {
      status: false,
      name: "Tommy Susanto",
      email: "jessica.hanson@example.com",
      role: "Member",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs
        data={[
          { name: "User", link: "/admin/user/account" },
          { name: "Account", link: "/admin/user/account", active: true },
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
          <Button
            bg="#DA3E33"
            color="white"
            lable="Create New User"
            icon={<Plus size={20} strokeWidth={2.5} />}
            classname="px-4"
            fn={() => hook.navigate("create/form")}
          />
        </div>
        <div className="flex bg-gray-50 p-1 gap-2 items-center rounded-md w-fit border">
          <button className="h-8 px-3 bg-white rounded text-sm text-[#313030] font-semibold">
            Account
          </button>
          <button
            onClick={() => hook.navigate("../access")}
            className="h-8 px-3 rounded text-sm text-[#313030] font-semibold hover:bg-white"
          >
            Access
          </button>
        </div>
        <Filter />
        <Table>
          <THead>
            <Tr>
              <Th>Status</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Action</Th>
            </Tr>
          </THead>
          <TBody>
            {arr?.map((item, i) => (
              <Tr key={i}>
                <Td>
                  <input type="checkbox" defaultChecked={item.status} />
                </Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.role}</Td>
                <Td className="w-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => hook.navigate("details")}
                      className="w-9 h-9 rounded bg-[#20519F] flex items-center justify-center"
                    >
                      <EyeIcon color="white" size={16} />
                    </button>
                    <button
                      onClick={() => hook.navigate("edit/form")}
                      className="w-9 h-9 rounded bg-[#F79009] flex items-center justify-center"
                    >
                      <Edit2 color="white" size={16} />
                    </button>
                    <button className="w-9 h-9 rounded bg-[#DA3E33] flex items-center justify-center">
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
    </div>
  );
}
