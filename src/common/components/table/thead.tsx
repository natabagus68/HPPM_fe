export default function THead({ children }: { children: React.ReactNode }) {
  return <thead className="border-b bg-gray-50">{children}</thead>;
}
