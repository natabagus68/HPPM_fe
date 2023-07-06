export default function Tr({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: any | undefined;
}) {
  return (
    <tr className="px-4" {...props}>
      {children}
    </tr>
  );
}
