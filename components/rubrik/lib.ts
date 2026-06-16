import { type NewsCardData } from "@/lib/news";

export function getNewsFormat(news: NewsCardData) {
  const formats = news.formats.map((format) => format.toUpperCase());
  if (formats.includes("VIDEO")) return "Video";
  if (formats.includes("AUDIO")) return "Audio";
  return "Artikel";
}