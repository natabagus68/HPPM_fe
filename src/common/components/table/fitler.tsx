import { Search } from "lucide-react";

export default function Filter({
  search = true,
  children,
}: {
  search?: boolean | undefined;
  children?: React.ReactNode | undefined;
}) {
  return (
    <div className="w-full bg-gray-50 rounded-md border flex items-center justify-between px-3 py-2">
      {search ? (
        <div className="flex items-center gap-2 border bg-white w-[250px] h-8 rounded-md px-3 text-base">
          <Search color="#D0D3D9" size={18} />
          <input
            type="search"
            className="outline-none flex-1 bg-transparent"
            placeholder="Search..."
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      ) : null}
      {children}
    </div>
  );
}
