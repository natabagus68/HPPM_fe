import { ArrowLeft, SaveIcon } from "lucide-react";
import { useFormDataSetInput } from "./form-dataset-input-model";

export default function Index() {
  const model = useFormDataSetInput();
  return (
    <div className="w-full h-[795px] py-6  rounded-md border border-[#D0D3D9]">
      {/* head */}
      <div className="flex items-center justify-between px-8">
        <div>
          <h1 className="text-[#313030] font-bold text-[24px] h-[41px]">
            Add Data
          </h1>
        </div>
        <button
          onClick={model.back}
          className="flex gap-2 items-center rounded-[4px] border border-neutral-300 py-[12px] pr-[16px] pl-[20px] text-[#514E4E]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>
      <hr className="border border-[#D0D3D9] mt-6" />

      {/* content */}
      <div className="pl-8 pr-12 w-full mt-4">
        <div className="flex flex-col gap-2">
          <label className="text-[16px] font-[400] text-[#514E4E]">
            Raw Dataset
          </label>
          <div className="flex ">
            <label
              htmlFor="Raw dataset"
              className="w-[94px] h-[40px]  bg-[#B9BDC7] text-[#514E4E] flex items-center justify-center rounded-l-md cursor-pointer"
            >
              Browse
            </label>

            <input
              type="file"
              className="h-[40px] w-[94%] file:hidden border-y border-r border-[#D0D3D9] rounded-r-md static bg-white  outline-none px-4 py-2"
              id="Raw dataset"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label
            htmlFor="judgement label"
            className="text-[16px] font-[400] text-[#514E4E]"
          >
            Judgement Label
          </label>
          <select className="w-full py-2 px-4 border border-[#D0D3D9] rounded-md bg-white">
            <option value="" disabled>
              Select judgment label
            </option>
          </select>
        </div>
        <button className="py-3 px-5 bg-red-600 rounded-md flex gap-2 items-center mt-6 text-white w-[300px] justify-center ">
          <SaveIcon className="w-4 h-4 text-white" /> Save
        </button>
      </div>
    </div>
  );
}
