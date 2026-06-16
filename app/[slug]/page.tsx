import ArticlePage from "@/components/article/ArticlePage";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ArticlePage params={params} />;
}
