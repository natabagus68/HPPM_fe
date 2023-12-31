import { Pagination } from "../../../../common/components/Pagination";
import {
  EditIcon,
  EyeIcon,
  FilterIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from "lucide-react";
import { usePotensialNGCause } from "./potensial-ng-cause-model";
import Filter from "@common/components/table/fitler";

export default function Index() {
  const model = usePotensialNGCause();
  return (
    <>
      <div className="w-full py-6 px-8 rounded-md border border-[#D0D3D9]">
        {/* head */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#313030] font-bold text-[24px] h-[41px]">
              Potential NG Cause
            </h1>
            <p className="text-[16px] text-[#667085]">
              Management Potential NG Cause Data
            </p>
          </div>

          <button
            onClick={model.toForm}
            className="flex items-center gap-2 py-[12px] pr-[16px] pl-[20px] rounded-md text-white bg-red-600"
          >
            <PlusIcon className="w-4 h-4" />
            Add Data
          </button>
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
                      Potential NG Cause
                    </p>
                  </div>
                </th>

                <th className="w-0">
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
