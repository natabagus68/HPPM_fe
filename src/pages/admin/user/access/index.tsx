import { Map } from "lucide-react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  Edit3,
  Trash2,
  Frame,
  ChevronsUpDown,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";
import useAccess from "./access-model";

export default function Index() {
  const hook = useAccess();
  const arr = [
    {
      name: "Admin",
    },
  ];
  const ascendingOrder = arr.sort((a, b) => a.name.localeCompare(b.name));
  const ascendingMappedArray = ascendingOrder.map((obj) => {
    return obj;
  });
  const descendingOrder = arr.sort((a, b) => b.name.localeCompare(a.name));
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
    <div className="flex flex-col">
      <div className="w-full bg-gray-50 border flex items-center justify-between p-4">
        <input
          type="search"
          className="border bg-white w-[250px] h-[42px] rounded-md px-4 text-base py-2"
          placeholder="Search..."
          onChange={handleSearch}
        />
        {/* <div>
          <select defaultValue={""} className="border bg-white h-[42px] px-1">
            <option value={""}>Select Item</option>
            <option value={"item-1"}>Item 1</option>
            <option value={"item-2"}>Item 2</option>
            <option value={"item-3"}>Item 3</option>
          </select>
        </div> */}
      </div>
      <table className="flex-1 border bg-white">
        <thead className="border-b bg-gray-50">
          <tr className="px-4">
            <th className="text-start px-4 py-3 text-base font-medium">
              <div className="flex gap-1 items-center">
                <span>Name</span>
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
            <th className="text-start px-4 py-3 text-base font-medium w-[65px]">
              <div className="flex items-center justify-center w-[32px] h-[32px]">
                <Frame width={14} height={14} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr className="border-b" key={i}>
              <td className="text-start p-4 text-base">{item.name}</td>
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
                    <div className="flex flex-col bg-white border rounded-md absolute min-w-[128px] flex-1 gap-1 top-[35px] right-0 z-10 p-1">
                      <button
                        type="button"
                        onClick={() => {
                          setActionTable(false);
                          hook.navigate("./mapping-menu");
                        }}
                        className="flex-1 h-[32px] text-start px-2 py-[6px] rounded-md hover:bg-[#f1f5f9] flex items-center gap-2"
                      >
                        <Map width={16} height={16} />
                        <span className="whitespace-nowrap">Mapping Menu</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActionTable(false)}
                        className="flex-1 h-[32px] text-start px-2 py-[6px] rounded-md hover:bg-[#f1f5f9] flex items-center gap-2"
                      >
                        <Edit3 width={16} height={16} />
                        <span className="whitespace-nowrap">Edit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActionTable(false)}
                        className="flex-1 h-[32px] text-start px-2 py-[6px] rounded-md hover:bg-[#f1f5f9] flex items-center gap-2"
                      >
                        <Trash2 width={16} height={16} />
                        <span className="whitespace-nowrap">Delete</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full h-[57px] bg-gray-50 border flex items-center justify-between px-4">
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
  );
}
