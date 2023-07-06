import { NavLink, useMatches, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  Bell,
  Box,
  ChevronDown,
  ChevronRight,
  Dot,
  LayoutGrid,
  User2,
} from "lucide-react";
import { useEffect, useState } from "react";

type TLinks = {
  id: string;
  name: string;
  link: string;
  active: boolean;
  children: TLinks[];
  icon: React.ReactNode;
};

export default function useAdminLayout() {
  const navigate = useNavigate();
  const matches = useMatches();
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [menuData, setMenuData] = useState<TLinks[]>([
    {
      id: uuid(),
      name: "Dashboard",
      link: "dashboard",
      active: false,
      icon: <LayoutGrid color="#514E4E" size={22} />,
      children: [],
    },
    {
      id: uuid(),
      name: "Notification",
      link: "notification",
      active: false,
      icon: <Bell color="#514E4E" size={22} />,
      children: [],
    },
    {
      id: uuid(),
      name: "Master Data",
      link: "master-data",
      active: false,
      icon: <Box color="#514E4E" size={22} />,
      children: [
        {
          id: uuid(),
          name: "Dataset Input",
          link: "master-data/dataset-input",
          active: false,
          icon: null,
          children: [],
        },
        // {
        //   id: uuid(),
        //   name: "AI Setting",
        //   link: "master-data/ai-setting",
        //   active: false,
        //   icon: null,
        //   children: [],
        // },
        // {
        //   id: uuid(),
        //   name: "Machine",
        //   link: "master-data/machine",
        //   active: false,
        //   icon: null,
        //   children: [],
        // },
        // {
        //   id: uuid(),
        //   name: "Part",
        //   link: "master-data/part",
        //   active: false,
        //   icon: null,
        //   children: [],
        // },
        {
          id: uuid(),
          name: "Parameter",
          link: "master-data/parameter",
          active: false,
          icon: null,
          children: [],
        },
        {
          id: uuid(),
          name: "Judgement Label",
          link: "master-data/judgement-label",
          active: false,
          icon: null,
          children: [],
        },
        {
          id: uuid(),
          name: "Potential NG Cause",
          link: "master-data/potential-ng-cause",
          active: false,
          icon: null,
          children: [],
        },
      ],
    },
    {
      id: uuid(),
      name: "User",
      link: "user",
      active: false,
      icon: <User2 color="#514E4E" size={22} />,
      children: [],
    },
  ]);

  const padding = {
    height: 70,
    width: 260,
  };

  function MenuItem({ data }: { data: TLinks }) {
    if (!!data.children?.length) {
      return (
        <div className="flex flex-col gap-3 w-full">
          <NavLink
            to={data.link}
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              updateActiveStatusById(data.id, !!!data.active);
            }}
          >
            {!!data.children?.length && !!data.icon ? (
              <div
                className={`flex items-center justify-between gap-3 w-full ${
                  data.active ? "bg-red-50" : null
                } h-[40px] px-4 rounded-md hover:bg-red-50`}
              >
                <div
                  className={`flex items-center gap-3 ${
                    data.active ? "text-red-600" : "text-[#514E4E]"
                  }`}
                >
                  <span
                    className={`w-[24px] h-[24px] ${
                      data.active ? "text-red-700" : null
                    }`}
                  >
                    {data.icon}
                  </span>
                  <span className={`text-base font-semibold`}>{data.name}</span>
                </div>
                {data.active ? (
                  <ChevronDown color="#DA3E33" />
                ) : (
                  <ChevronRight />
                )}
              </div>
            ) : null}
            {!!data.children?.length && !!!data.icon ? (
              <div className="flex items-center justify-between gap-3 w-full">
                <div
                  className={`flex items-center gap-3 ${
                    data.active ? "text-red-600" : "text-[#514E4E]"
                  }`}
                >
                  <Dot />
                  <span className={`text-base font-semibold`}>{data.name}</span>
                </div>
                {data.active ? (
                  <ChevronDown color="#DA3E33" />
                ) : (
                  <ChevronRight />
                )}
              </div>
            ) : null}
          </NavLink>
          {data.active ? (
            <div
              className={`flex flex-col gap-3 overflow-hidden ${
                data.active ? "h-fit" : "h-0"
              } pl-[24px]`}
            >
              {data.children.map((child) => (
                <MenuItem key={child.id} data={child} />
              ))}
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <NavLink to={data.link} className={`flex w-full items-center gap-3`}>
        {({ isActive }) => (
          <>
            {!!!data.children?.length && !!data.icon ? (
              <div
                className={`flex w-full items-center gap-3 ${
                  isActive ? "text-red-600 bg-red-50" : "text-[#514E4E]"
                } h-[40px] px-4 rounded-md hover:bg-red-50`}
              >
                <span className="w-[24px] h-[24px]">{data.icon}</span>
                <span className={`text-base font-semibold`}>{data.name}</span>
              </div>
            ) : null}
            {!!!data.children?.length && !!!data.icon ? (
              <div
                className={`flex items-center gap-3 ${
                  isActive ? "text-red-600" : "text-[#514E4E]"
                }`}
              >
                <Dot />
                <span className={`text-base font-semibold`}>{data.name}</span>
              </div>
            ) : null}
          </>
        )}
      </NavLink>
    );
  }

  function SidebarMenu() {
    return (
      <div className="flex flex-col gap-3 w-full">
        {menuData.map((menuItem) => (
          <MenuItem key={menuItem.id} data={menuItem} />
        ))}
      </div>
    );
  }

  function updateActiveStatus(
    menuData: TLinks[],
    targetId: string,
    isActive: boolean
  ) {
    return menuData.map((menuItem): TLinks => {
      if (menuItem.id === targetId) {
        return { ...menuItem, active: isActive };
      } else if (menuItem.children && menuItem.children.length > 0) {
        return {
          ...menuItem,
          children: updateActiveStatus(menuItem.children, targetId, isActive),
        };
      }
      return menuItem;
    });
  }

  const updateActiveStatusById = (targetId: string, isActive: boolean) => {
    const updatedMenuData = updateActiveStatus(menuData, targetId, isActive);
    setMenuData(updatedMenuData);
  };

  // useEffect(() => {
  //   console.log(window.location.pathname?.split("/")[2]);
  //   console.log(window.location);
  // }, [window.location.pathname]);

  const setActiveLink = (children: TLinks[]): TLinks[] => {
    return children.map((item) => {
      return {
        ...item,
        active: !!matches.find(
          (match) => match.pathname.indexOf(item.link) > -1
        ),
        children: setActiveLink(item.children),
      };
    });
  };

  useEffect(() => {
    setMenuData((menuData) => {
      return menuData.map((item) => {
        return {
          ...item,
          active: !!matches.find(
            (match) => match.pathname.indexOf(item.link) > -1
          ),
          children: setActiveLink(item.children),
        };
      });
    });
  }, []);

  return {
    padding,
    isOpenSidebar,
    setIsOpenSidebar,
    SidebarMenu,
    navigate,
  };
}
