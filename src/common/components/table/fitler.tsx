import { SearchIcon } from "lucide-react";

export default function Filter({
  search = true,
  children,
}: {
  search?: boolean | undefined;
  children?: React.ReactNode | undefined;
}) {
  return (
    <>
      {/* comp 1 */}
      {/* <div className="w-full bg-gray-50 rounded-md border flex items-center justify-between px-3 py-2">
        {search ? (
          <div className="flex items-center gap-2 border bg-white w-[250px] h-8 rounded-md px-3 text-base">
            <SearchIcon color="#D0D3D9" size={18} />
            <input
              type="search"
              className="outline-none flex-1 bg-transparent"
              placeholder="Search..."
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        ) : null}
        {children}
      </div> */}

      {/* comp 2 */}
      <div className="w-full rounded-sm bg-[#F0F1F3] p-3 flex justify-between mt-4">
        {search ? (
          <div className="h-[40px] w-[425px] relative bg-white rounded-md">
            <input
              type="text"
              placeholder="Search by name..."
              className="h-full w-full rounded-md outline-none py-2 px-8 placeholder:text-[#D0D3D9] "
              onChange={(e) => console.log(e.target.value)}
            />
            <SearchIcon className="w-4 h-4 absolute bottom-3 left-2 text-gray-500" />
          </div>
        ) : null}
        {children}
      </div>
    </>
  );
}
