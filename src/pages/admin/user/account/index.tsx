import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Edit3,
  Eye,
  Trash2,
  Frame,
  ChevronsUpDown,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { useState } from "react";
import useAccount from "./account-model";

export default function Index() {
  const hook = useAccount();
  const arr = [
    {
      task: "TASK-8782",
      title:
        "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      status: "Backlog",
      priority: "Medium",
    },
    {
      task: "ASK-8782",
      title: "Lorem",
      status: "Rajak",
      priority: "Hard",
    },
  ];
  const ascendingOrder = arr.sort((a, b) => a.task.localeCompare(b.task));
  const ascendingMappedArray = ascendingOrder.map((obj) => {
    return obj;
  });
  const descendingOrder = arr.sort((a, b) => b.task.localeCompare(a.task));
  const descendingMappedArray = descendingOrder.map((obj) => {
    return obj;
  });
  const [order, setOrder] = useState<string | boolean>("all");
  const [data, setData] = useState(arr);
  const [actionTable, setActionTable] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = arr.filter((obj) =>
      Object.values(obj).some((value) =>
        value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setData(results);
  };

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs
        data={[
          { name: "User", link: "../user/account" },
          { name: "Account", link: "../user/account", active: true },
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
        <div className="w-full bg-gray-50 border flex items-center justify-between px-3 py-2">
          <input
            type="search"
            className="border bg-white w-[250px] h-[42px] rounded-md px-4 text-base py-2"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <div>
            <select defaultValue={""} className="border bg-white h-[42px] px-1">
              <option value={""}>Select Item</option>
              <option value={"item-1"}>Item 1</option>
              <option value={"item-2"}>Item 2</option>
              <option value={"item-3"}>Item 3</option>
            </select>
          </div>
        </div>
        <table className="flex-1 border bg-white">
          <thead className="border-b bg-gray-50">
            <tr className="px-4">
              <th className="text-start px-4 py-3 text-base font-medium">
                <div className="flex gap-1 items-center">
                  <span>Task</span>
                  <button
                    onClick={() => {
                      if (order === "all") {
                        setOrder(true);
                        setData(ascendingMappedArray);
                      } else if (order === true) {
                        setOrder(false);
                        setData(descendingMappedArray);
                      } else {
                        setOrder("all");
                        setData(arr);
                      }
                    }}
                  >
                    {order === "all" ? (
                      <ChevronsUpDown width={18} height={18} />
                    ) : order === true ? (
                      <ChevronUp width={18} height={18} />
                    ) : (
                      <ChevronDown width={18} height={18} />
                    )}
                  </button>
                </div>
              </th>
              <th className="text-start px-4 py-3 text-base font-medium">
                Title
              </th>
              <th className="text-start px-4 py-3 text-base font-medium">
                Status
              </th>
              <th className="text-start px-4 py-3 text-base font-medium">
                Priority
              </th>
              <th className="text-start px-4 py-3 text-base font-medium">
                <div className="flex items-center justify-center w-[32px] h-[32px]">
                  <Frame width={14} height={14} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, i) => (
              <tr className="border-b" key={i}>
                <td className="text-start p-4 text-base">{item.task}</td>
                <td className="text-start p-4 text-base">{item.title}</td>
                <td className="text-start p-4 text-base">{item.status}</td>
                <td className="text-start p-4 text-base">{item.priority}</td>
                <td className="text-start p-4 text-base">
                  <div className="relative w-[32px] h-[32px]">
                    <button
                      type="button"
                      onClick={() => setActionTable(!!!actionTable)}
                      className="hover:bg-gray-50 flex items-center justify-center rounded-md w-[32px] h-[32px] transition-all duration-200 cursor-pointer"
                    >
                      <MoreHorizontal width={18} height={18} />
                    </button>
                    {actionTable ? (
                      <div className="flex flex-col bg-white border rounded-md absolute min-w-[128px] gap-1 top-[35px] right-0 z-10 p-1">
                        <button
                          type="button"
                          onClick={() => setActionTable(false)}
                          className="flex-1 h-[32px] text-start px-2 py-[6px] rounded-md hover:bg-[#f1f5f9] flex items-center gap-2"
                        >
                          <Eye width={16} height={16} />
                          <span>Details</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActionTable(false)}
                          className="flex-1 h-[32px] text-start px-2 py-[6px] rounded-md hover:bg-[#f1f5f9] flex items-center gap-2"
                        >
                          <Edit3 width={16} height={16} />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActionTable(false)}
                          className="flex-1 h-[32px] text-start px-2 py-[6px] rounded-md hover:bg-[#f1f5f9] flex items-center gap-2"
                        >
                          <Trash2 width={16} height={16} />
                          <span>Delete</span>
                        </button>
                      </div>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
