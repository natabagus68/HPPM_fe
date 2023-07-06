import { ChevronRight, Home } from "lucide-react";
import { NavLink } from "react-router-dom";

interface IBreadcrumbs {
  name: string;
  link: string;
  active?: boolean | undefined;
}

export default function Breadcrumbs({ data = [] }: { data: IBreadcrumbs[] }) {
  return (
    <div className="flex items-center gap-2">
      <Home color="#B8B6B6" size={24} />
      {data?.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <ChevronRight color="#B8B6B6" size={24} />
          <NavLink
            to={`../${item.link}`}
            className={`text-[16px] font-semibold ${
              item.active ? "text-primary-red" : "text-[#B8B6B6]"
            }`}
          >
            {item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
