import ArticlePage from "@/modules/article";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ArticlePage params={params} />;
}
