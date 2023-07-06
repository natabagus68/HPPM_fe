export default function Td({
  className,
  children,
  props,
}: {
  className?: string | undefined;
  children: React.ReactNode;
  props?: any | undefined;
}) {
  return (
    <td className={`text-start p-4 text-base ${className}`} {...props}>
      {children}
    </td>
  );
}
