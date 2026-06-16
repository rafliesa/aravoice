export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-300 pb-4">
      <span className="bg-secondary h-7 w-1.5 rounded" />
      <h2 className="font-caslon text-3xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}