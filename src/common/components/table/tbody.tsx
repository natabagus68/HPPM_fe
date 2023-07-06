export default function TBody({ children }: { children: React.ReactNode }) {
  return (
    <tbody>
      {children}
      {/* {arr?.map((item, i) => (
        <tr className="border-b" key={i}>
          <td className="text-start p-4 text-base">{item.role}</td>
          <td className="text-start p-4 text-base">
            <div className="flex items-center gap-2">
              <button
                onClick={() => hook.navigate("mapping-menu")}
                className="w-9 h-9 rounded bg-[#667085] flex items-center justify-center"
              >
                <Map color="white" size={16} />
              </button>
              <button className="w-9 h-9 rounded bg-[#F79009] flex items-center justify-center">
                <Edit2 color="white" size={16} />
              </button>
              <button
                onClick={() => hook.setOpenModalDelete(true)}
                className="w-9 h-9 rounded bg-[#DA3E33] flex items-center justify-center"
              >
                <Trash2 color="white" size={16} />
              </button>
            </div>
          </td>
        </tr>
      ))} */}
    </tbody>
  );
}
