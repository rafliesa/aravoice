type ComparisonRow = {
  aspect: string;
  bandung: string;
  solo: string;
  singapore: string;
  japan: string;
};

export default function ArticleComparisonTable({
  rows,
}: {
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d9d2c7] bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-[52rem] border-collapse font-sans text-sm text-[#0a3358]">
          <thead>
            <tr className="bg-[#f5efe5] text-left text-xs font-extrabold uppercase tracking-[0.12em] text-[#6f4a1e]">
              <th className="w-40 px-4 py-4">Aspek</th>
              <th className="px-4 py-4">Bandung</th>
              <th className="px-4 py-4">Solo</th>
              <th className="px-4 py-4">Singapura</th>
              <th className="px-4 py-4">Jepang</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eadccb]">
            {rows.map((row) => (
              <tr key={row.aspect} className="align-top">
                <th className="bg-[#fbf8f3] px-4 py-4 text-left font-bold">
                  {row.aspect}
                </th>
                <td className="px-4 py-4 leading-6">{row.bandung}</td>
                <td className="px-4 py-4 leading-6">{row.solo}</td>
                <td className="px-4 py-4 leading-6">{row.singapore}</td>
                <td className="px-4 py-4 leading-6">{row.japan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
