import { InfographicCard } from "@/components/design-system/Editorial";

export default function Pasal53DataCard() {
  return (
    <InfographicCard
      title="Highlights Pasal 53"
      eyebrow="Regulasi ketenagakerjaan inklusif"
      data={[
        {
          label: "Pemerintah, Pemerintah Daerah, BUMN, dan BUMD",
          value: 2,
          tone: "primary",
        },
        {
          label: "Perusahaan swasta",
          value: 1,
          tone: "muted",
        },
      ]}
      insight="Pasal 53 menegaskan kewajiban instansi pemerintah, BUMN, BUMD, dan perusahaan swasta untuk menyediakan peluang kerja yang inklusif bagi Penyandang Disabilitas melalui kuota minimal sesuai jenis lembaga."
    />
  );
}
