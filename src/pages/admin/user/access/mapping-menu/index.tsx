import Breadcrumbs from "@common/components/breadcrumbs/Breadcrumbs";
import { ArrowLeft, Dot } from "lucide-react";
import useMappingMenu from "./mapping-menu-model";

export default function Index() {
  const hook = useMappingMenu();
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
                !!!data.parentId ? "bg-[#667085] text-white" : null
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
          {data.children?.map((child) => (
            <MappingMenu key={child.id} data={child} />
          ))}
        </>
      );
    }
    return (
      <>
        <tr className={`border-b`}>
          <td
            className={`text-start p-4 text-base ${
              !!!data.parentId ? "bg-[#667085] text-white" : null
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
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs
        data={[
          { name: "User", link: "../user/account" },
          { name: "Access", link: "../user/account" },
          { name: "Mapping Menu", link: "../user/account/mapping-menu" },
        ]}
      />

      <div className="flex flex-col gap-4 border p-6 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl text-[#313030] font-bold">
              Technician Role
            </span>
            <span className="text-base text-[#667085]">
              Management access role
            </span>
          </div>
          <button
            onClick={() => hook.navigate("../")}
            className="h-[48px] px-4 gap-2 rounded bg-[#667085] flex items-center text-white"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="font-semibold">Back & Save Changes</span>
          </button>
        </div>
        <div className="border flex-1 flex rounded-md overflow-hidden">
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
        </div>
      </div>
    </div>
  );
}
