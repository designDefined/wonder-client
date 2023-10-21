type RecentKeywords = string[];
const RECENT_KEYWORDS = "wonder_recent_keywords_v3";

export const getRecentKeywords = (): RecentKeywords | null => {
  const keywords = localStorage.getItem(RECENT_KEYWORDS);
  if (!keywords) return null;
  return JSON.parse(keywords) as RecentKeywords;
};

export const saveRecentKeywords = (keywords: RecentKeywords) => {
  localStorage.setItem(RECENT_KEYWORDS, JSON.stringify(keywords));
};
