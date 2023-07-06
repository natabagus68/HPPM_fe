export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="border flex-1 flex rounded-md overflow-hidden">
      <table className="flex-1">
        {children}
      </table>
    </div>
  );
}
