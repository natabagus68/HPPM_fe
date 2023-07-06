export default function Th({
  className,
  children,
  props,
}: {
  className?: string | undefined;
  children: React.ReactNode;
  props?: any | undefined;
}) {
  return (
    <th
      className={`text-start px-4 py-3 text-base font-medium ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}
