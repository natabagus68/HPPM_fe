import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Search,
  EyeIcon,
  Trash2,
  Edit2,
} from "lucide-react";
import useAccount from "./account-model";

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
  // const ascendingOrder = arr.sort((a, b) => a.task.localeCompare(b.task));
  // const ascendingMappedArray = ascendingOrder.map((obj) => {
  //   return obj;
  // });
  // const descendingOrder = arr.sort((a, b) => b.task.localeCompare(a.task));
  // const descendingMappedArray = descendingOrder.map((obj) => {
  //   return obj;
  // });
  // const [order, setOrder] = useState<string | boolean>("all");
  // const [data, setData] = useState(arr);
  // const [actionTable, setActionTable] = useState(false);

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const results = arr.filter((obj) =>
  //     Object.values(obj).some((value) =>
  //       value.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  //   setData(results);
  // };

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
                {/* <th className="text-start px-4 py-3 text-base font-medium">
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
                </th> */}
                <th className="text-start px-4 py-3 text-base font-medium">
                  Status
                </th>
                <th className="text-start px-4 py-3 text-base font-medium">
                  Name
                </th>
                <th className="text-start px-4 py-3 text-base font-medium">
                  Email
                </th>
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
                  <td className="text-start p-4 text-base">
                    <input type="checkbox" defaultChecked={item.status} />
                  </td>
                  <td className="text-start p-4 text-base">{item.name}</td>
                  <td className="text-start p-4 text-base">{item.email}</td>
                  <td className="text-start p-4 text-base">{item.role}</td>
                  <td className="text-start p-4 text-base">
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded bg-[#20519F] flex items-center justify-center">
                        <EyeIcon color="white" size={16} />
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
