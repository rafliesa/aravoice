export default function MetaItem({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
      {icon}
      {children}
    </span>
  );
}