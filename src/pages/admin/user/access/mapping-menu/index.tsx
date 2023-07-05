import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Dot,
} from "lucide-react";

export default function Index() {
  interface IArr {
    id: string;
    name: string;
    parentId: null | string;
    permissions: any[];
    children: any[];
  }
  const arr = [
    {
      id: "report-1812",
      name: "Report",
      parentId: null,
      permissions: [
        {
          id: "view-1090",
          name: "View",
          checked: true,
          disable: true,
        },
      ],
      children: [
        {
          id: "production-9871",
          name: "Production",
          parentId: "report-1812",
          permissions: [
            {
              id: "view-1090",
              name: "View",
              checked: false,
              disable: true,
            },
            {
              id: "create-6289",
              name: "Create",
              checked: true,
              disable: true,
            },
            {
              id: "edit-2009",
              name: "Edit",
              checked: false,
              disable: true,
            },
            {
              id: "delete-7012",
              name: "Delete",
              checked: false,
              disable: false,
            },
          ],
          children: [
            {
              id: "maintenance-9871",
              name: "Maintenance",
              parentId: "production-9871",
              permissions: [
                {
                  id: "view-1090",
                  name: "View",
                  checked: true,
                  disable: true,
                },
                {
                  id: "create-6289",
                  name: "Create",
                  checked: true,
                  disable: true,
                },
                {
                  id: "edit-2009",
                  name: "Edit",
                  checked: false,
                  disable: false,
                },
                {
                  id: "delete-7012",
                  name: "Delete",
                  checked: false,
                  disable: false,
                },
              ],
              children: [],
            },
          ],
        },
        {
          id: "log-9871",
          name: "Log",
          parentId: "report-1812",
          permissions: [
            {
              id: "view-1090",
              name: "View",
              checked: false,
              disable: true,
            },
            {
              id: "create-6289",
              name: "Create",
              checked: true,
              disable: true,
            },
            {
              id: "edit-2009",
              name: "Edit",
              checked: false,
              disable: false,
            },
            {
              id: "delete-7012",
              name: "Delete",
              checked: false,
              disable: true,
            },
          ],
          children: [],
        },
      ],
    },
    {
      id: "masterdata-1812",
      name: "Master Data",
      parentId: null,
      permissions: [
        {
          id: "view-1090",
          name: "View",
          checked: true,
          disable: true,
        },
      ],
      children: [],
    },
  ];

  const MappingMenu = ({ data }: { data: IArr }) => {
    if (!!data.children?.length) {
      return (
        <>
          <tr className={`border-b`}>
            <td
              className={`text-start p-4 text-base ${
                !!!data.parentId ? "bg-gray-700 text-white" : null
              }`}
            >
              <div className={`flex-1 gap-3 flex items-center`}>
                {!!data.parentId ? <Dot /> : null}
                <span>{data.name}</span>
              </div>
            </td>
            <td className="text-center p-4 text-base">
              {!!data.permissions?.find((e) => e.name === "View")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "View")?.checked
                  }
                />
              ) : null}
            </td>
            <td className="text-center p-4 text-base">
              {!!data.permissions?.find((e) => e.name === "Create")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "Create")
                      ?.checked
                  }
                />
              ) : null}
            </td>
            <td className="text-center p-4 text-base">
              {!!data.permissions?.find((e) => e.name === "Edit")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "Edit")?.checked
                  }
                />
              ) : null}
            </td>
            <td className="text-center p-4 text-base">
              {!!data.permissions?.find((e) => e.name === "Delete")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "Delete")
                      ?.checked
                  }
                />
              ) : null}
            </td>
          </tr>
          {/* <div className="h-[57px] flex" key={data.id}>
            <div
              className={`flex-1 gap-3 flex items-center ${
                !!!data.parentId ? "bg-blue-50 px-6" : null
              }`}
            >
              {!!data.parentId ? <Dot /> : null}
              <span>{data.name}</span>
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              {!!data.permissions?.find((e) => e.name === "View")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "View")?.checked
                  }
                />
              ) : null}
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              {!!data.permissions?.find((e) => e.name === "Create")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "Create")
                      ?.checked
                  }
                />
              ) : null}
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              {!!data.permissions?.find((e) => e.name === "Edit")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "Edit")?.checked
                  }
                />
              ) : null}
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              {!!data.permissions?.find((e) => e.name === "Delete")?.disable ? (
                <input
                  type="checkbox"
                  onChange={(e) => console.log(e.target.checked)}
                  checked={
                    !!data.permissions?.find((e) => e.name === "Delete")
                      ?.checked
                  }
                />
              ) : null}
            </div>
          </div> */}
          {data.children?.map((child) => (
            <MappingMenu key={child.id} data={child} />
            // <div className="flex flex-col ml-6">
            // </div>
          ))}
        </>
      );
    }
    return (
      <>
        <tr className={`border-b`}>
          <td
            className={`text-start p-4 text-base ${
              !!!data.parentId ? "bg-gray-700 text-white" : null
            }`}
          >
            <div className={`flex-1 gap-3 flex items-center`}>
              {!!data.parentId ? <Dot /> : null}
              <span>{data.name}</span>
            </div>
          </td>
          <td className="text-center p-4 text-base">
            {!!data.permissions?.find((e) => e.name === "View")?.disable ? (
              <input
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)}
                checked={
                  !!data.permissions?.find((e) => e.name === "View")?.checked
                }
              />
            ) : null}
          </td>
          <td className="text-center p-4 text-base">
            {!!data.permissions?.find((e) => e.name === "Create")?.disable ? (
              <input
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)}
                checked={
                  !!data.permissions?.find((e) => e.name === "Create")?.checked
                }
              />
            ) : null}
          </td>
          <td className="text-center p-4 text-base">
            {!!data.permissions?.find((e) => e.name === "Edit")?.disable ? (
              <input
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)}
                checked={
                  !!data.permissions?.find((e) => e.name === "Edit")?.checked
                }
              />
            ) : null}
          </td>
          <td className="text-center p-4 text-base">
            {!!data.permissions?.find((e) => e.name === "Delete")?.disable ? (
              <input
                type="checkbox"
                onChange={(e) => console.log(e.target.checked)}
                checked={
                  !!data.permissions?.find((e) => e.name === "Delete")?.checked
                }
              />
            ) : null}
          </td>
        </tr>
      </>
      // <div className="h-[57px] flex">
      //   <div
      //     className={`flex-1 gap-3 flex items-center ${
      //       !!!data.parentId ? "bg-blue-50 px-6" : null
      //     }`}
      //   >
      //     {!!data.parentId && !!data.children ? <Dot /> : null}
      //     <span>{data.name}</span>
      //   </div>
      //   <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
      //     {!!data.permissions?.find((e) => e.name === "View")?.disable ? (
      //       <input
      //         type="checkbox"
      //         onChange={(e) => console.log(e.target.checked)}
      //         checked={
      //           !!data.permissions?.find((e) => e.name === "View")?.checked
      //         }
      //       />
      //     ) : null}
      //   </div>
      //   <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
      //     {!!data.permissions?.find((e) => e.name === "Create")?.disable ? (
      //       <input
      //         type="checkbox"
      //         onChange={(e) => console.log(e.target.checked)}
      //         checked={
      //           !!data.permissions?.find((e) => e.name === "Create")?.checked
      //         }
      //       />
      //     ) : null}
      //   </div>
      //   <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
      //     {!!data.permissions?.find((e) => e.name === "Edit")?.disable ? (
      //       <input
      //         type="checkbox"
      //         onChange={(e) => console.log(e.target.checked)}
      //         checked={
      //           !!data.permissions?.find((e) => e.name === "Edit")?.checked
      //         }
      //       />
      //     ) : null}
      //   </div>
      //   <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
      //     {!!data.permissions?.find((e) => e.name === "Delete")?.disable ? (
      //       <input
      //         type="checkbox"
      //         onChange={(e) => console.log(e.target.checked)}
      //         checked={
      //           !!data.permissions?.find((e) => e.name === "Delete")?.checked
      //         }
      //       />
      //     ) : null}
      //   </div>
      // </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="w-full bg-gray-50 border flex items-center justify-between p-4">
        <input
          type="search"
          className="border bg-white w-[250px] h-[42px] rounded-md px-4 text-base py-2"
          placeholder="Search..."
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
      <div className="bg-white flex-1 border">
        {/* <header className="h-[49px] flex border-b bg-gray-50">
          <div className="flex-1 px-4 font-semibold flex items-center">
            Menu
          </div>
          <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
            View
          </div>
          <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
            Create
          </div>
          <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
            Edit
          </div>
          <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
            Delete
          </div>
        </header> */}
        <main className="flex flex-col">
          {/* <SidebarMenu /> */}
          {/* {arr.map((menuItem) => (
            <MappingMenu key={menuItem.id} data={menuItem} />
          ))} */}
          {/* <div className="h-[57px] flex">
            <div className="flex-1 px-4 flex items-center">Report</div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              <input type="checkbox" />
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              <input type="checkbox" />
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              <input type="checkbox" />
            </div>
            <div className="h-full w-[100px] px-4 font-semibold flex items-center justify-center">
              <input type="checkbox" />
            </div>
          </div> */}
        </main>
      </div>
      <table className="flex-1 border bg-white">
        <thead className="border-b bg-gray-50">
          <tr className="px-4">
            <th className="text-start px-4 py-3 text-base font-medium">
              <span>Menu</span>
            </th>
            <th className="w-[100px] text-center px-4 py-3 text-base font-medium">
              <span>View</span>
            </th>
            <th className="w-[100px] text-center px-4 py-3 text-base font-medium">
              <span>Create</span>
            </th>
            <th className="w-[100px] text-center px-4 py-3 text-base font-medium">
              <span>Edit</span>
            </th>
            <th className="w-[100px] text-center px-4 py-3 text-base font-medium">
              <span>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {arr.map((menuItem) => (
            <MappingMenu key={menuItem.id} data={menuItem} />
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
