export const JudgementButton = ({ value }: { value: string }) => {
  if (value.toLowerCase() === "ok") {
    return (
      <>
        <div className="py-[6px] px-[42px] flex items-center justify-items-center rounded-[24px] bg-green-500">
          <p className="font-[600] text-white text-[16px]">
            {value.toUpperCase()}
          </p>
        </div>
      </>
    );
  } else if (value.toLowerCase() === "ng") {
    return (
      <>
        <div className="py-[6px] px-[42px] flex items-center justify-items-center rounded-[24px] bg-red-500">
          <p className="font-[600] text-white text-[16px]">
            {value.toUpperCase()}
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="py-[6px] px-[42px] flex items-center justify-items-center rounded-[24px] bg-red-500">
          <p className="font-[600] text-white text-[16px]">
            {value.toUpperCase()}
          </p>
        </div>
      </>
    );
  }
};
