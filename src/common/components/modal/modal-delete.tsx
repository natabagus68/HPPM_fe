import { Trash2 } from "lucide-react";

export default function ModalDelete({
  setOpen,
  fn,
}: {
  setOpen: (open: boolean) => void;
  fn: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[150px] h-[150px] bg-red-500 rounded-full flex items-center justify-center">
        <Trash2 color="white" size={80} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[24px] text-[#514E4E] font-bold">Delete</span>
        <span className="text-[#989FAD]">
          Are you sure you want to delete this data?
        </span>
      </div>
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={() => setOpen(false)}
          className="h-[46px] flex-1 border border-red-500 rounded-xl text-red-500 font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => fn()}
          className="h-[46px] flex-1 bg-red-500 rounded-xl text-white font-semibold"
        >
          Yes, Delete
        </button>
      </div>
    </div>
  );
}
