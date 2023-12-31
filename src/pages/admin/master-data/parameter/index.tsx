import { Pagination } from "../../../../common/components/Pagination";
import {
  EditIcon,
  EyeIcon,
  FilterIcon,
  FolderDownIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from "lucide-react";
import { useParameter } from "./parameter-model";
import Filter from "@common/components/table/fitler";

export default function Index() {
  const model = useParameter();
  return (
    <>
      <div className="w-full py-6 px-8 rounded-md border border-[#D0D3D9]">
        {/* head */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#313030] font-bold text-[24px] h-[41px]">
              Parameter
            </h1>
            <p className="text-[16px] text-[#667085]">
              Management Parameter Data
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 py-[12px] pr-[16px] pl-[20px] rounded-md text-white bg-red-600">
              <FolderDownIcon className="w-4 h-4" />
              Browse File
            </button>
            <button
              onClick={model.toForm}
              className="flex gap-2 items-center rounded-[4px] border border-neutral-300 py-[12px] pr-[16px] pl-[20px] text-[#514E4E]"
            >
              <PlusIcon className="w-4 h-4" />
              Add Manual Dataset
            </button>
          </div>
        </div>
        {/* filter */}
        <Filter>
          <button className="py-[8px] px-[16px] flex gap-[10px] items-center rounded-[4px] bg-white h-[48px]text-[16px] font-[600] text-[#667085]">
            <FilterIcon className="w-4 h-4" />
            Filter
          </button>
        </Filter>

        {/* table */}

        <div className="w-full mt-4">
          <table className="w-full">
            <thead>
              <tr>
                <th>
                  <div className="border-y border-[#D0D3D9]  h-[52px] p-2 flex items-center">
                    <p className="text-[14px] text-[#667085] font-[600]">
                      Parameter
                    </p>
                  </div>
                </th>
                <th>
                  <div className="border-y border-[#D0D3D9]  h-[52px] p-2 flex items-center">
                    <p className="text-[14px] text-[#667085] font-[600]">
                      Green USL
                    </p>
                  </div>
                </th>
                <th>
                  <div className="border-y border-[#D0D3D9]  h-[52px] p-2 flex items-center">
                    <p className="text-[14px] text-[#667085] font-[600]">
                      Green LSL
                    </p>
                  </div>
                </th>
                <th>
                  <div className="border-y border-[#D0D3D9]  h-[52px] p-2 flex items-center">
                    <p className="text-[14px] text-[#667085] font-[600]">
                      Yellow USL
                    </p>
                  </div>
                </th>
                <th>
                  <div className="border-y border-[#D0D3D9]  h-[52px] p-2 flex items-center">
                    <p className="text-[14px] text-[#667085] font-[600]">
                      Yellow LSL
                    </p>
                  </div>
                </th>

                <th>
                  <div className="border-y border-[#D0D3D9]  h-[52px] p-2 flex items-center">
                    <p className="text-[14px] text-[#667085] font-[600]">
                      Action
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="border-b border-[#D0D3D9] py-4 px-2 flex items-center h-[66px] ">
                    <p className="text-[16px] font-[400] text-[#514E4E]">GYV</p>
                  </div>
                </td>
                <td>
                  <div className="border-b border-[#D0D3D9] py-4 px-2 flex items-center h-[66px] ">
                    <p className="text-[16px] font-[400] text-[#514E4E]">
                      6109762
                    </p>
                  </div>
                </td>
                <td>
                  <div className="border-b border-[#D0D3D9] py-4 px-2 flex items-center h-[66px] ">
                    <p className="text-[16px] font-[400] text-[#514E4E]">QA2</p>
                  </div>
                </td>

                <td>
                  <div className="border-b border-[#D0D3D9] py-4 px-2 flex items-center h-[66px] ">
                    <p className="text-[16px] font-[400] text-[#514E4E]">GYV</p>
                  </div>
                </td>
                <td>
                  <div className="border-b border-[#D0D3D9] py-4 px-2 flex items-center h-[66px] ">
                    <p className="text-[16px] font-[400] text-[#514E4E]">
                      Normal
                    </p>
                  </div>
                </td>
                <td className="w-0">
                  <div className="border-b border-[#D0D3D9] py-4 px-2 flex items-center h-[66px]">
                    <div className="flex gap-[12px]">
                      <button className="w-[46px] h-[46px] bg-[#20519F] rounded-[4px] flex items-center justify-center">
                        <EyeIcon className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-[46px] h-[46px] bg-[#F79009] rounded-[4px] flex items-center justify-center">
                        <EditIcon className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-[46px] h-[46px] bg-[#F04438] rounded-[4px] flex items-center justify-center">
                        <TrashIcon className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <Pagination limit={10} row={5} />
          </div>
        </div>
      </div>
    </>
  );
}
