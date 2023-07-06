import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Pagination = ({
  page = 0,
  row = 0,
  limit = 0,
  handlePage = null,
}) => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const temp = [];
    const count = Math.ceil(row / limit);
    for (let i = 0; i < count; i++) {
      temp.push(1);
    }
    setArr(temp);
  }, []);

  return (
    <>
      <div className="flex items-center">
        <button className="w-[48px] h-[42px] border border-[#D0D3D9] rounded-l-md flex items-center justify-center">
          <ArrowLeft className="w-[20px] h-[20px] text-neutral-500" />
        </button>
        {arr.map((item, i) => {
          return (
            <button className="w-[48px] h-[42px] border border-[#D0D3D9] flex items-center justify-center">
              {i + 1}
            </button>
          );
        })}
        <button className="w-[48px] h-[42px] border border-[#D0D3D9] rounded-l-md flex items-center justify-center">
          <ArrowRight className="w-[20px] h-[20px] text-neutral-500" />
        </button>
      </div>
    </>
  );
};
