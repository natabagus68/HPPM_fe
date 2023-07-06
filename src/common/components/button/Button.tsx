import { twMerge } from "tailwind-merge";

export default function Button({
  lable,
  color,
  bg = "white",
  w,
  h,
  icon,
  border = false,
  classname,
  type = "button",
  fn,
}: {
  lable?: string | undefined;
  color: string;
  bg: string;
  w?: string | undefined;
  h?: string | undefined;
  icon?: React.ReactNode | undefined;
  border?: boolean | undefined;
  classname?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  fn?: () => void | undefined;
}) {
  return (
    <button
      type={type}
      onClick={() => fn()}
      className={twMerge(
        `h-[48px] gap-2 rounded flex items-center ${border ? "border" : null}`,
        classname
      )}
      style={{
        backgroundColor: border ? "white" : bg,
        color: color,
        width: w ? `${w}px` : "auto",
        height: h ? `${h}px` : "48px",
        borderColor: border ? bg : "unset",
      }}
    >
      {!!icon ? icon : null}
      {!!lable ? <span className="font-semibold">{lable}</span> : null}
    </button>
  );
}
