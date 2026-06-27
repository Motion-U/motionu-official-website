import contentful from "contentful";
import BlogPostCard from "../components/BlogPostCard";

interface NewsEntry {
  sys: { id: string };
  fields: {
    title: string;
    date: string;
    description: string;
    image: { fields: { file: { url: string } } };
  };
}

function getClient() {
  if (!process.env.SPACE || !process.env.ACCESS_TOKEN) return null;
  return contentful.createClient({
    space: process.env.SPACE,
    environment: "master",
    accessToken: process.env.ACCESS_TOKEN,
  });
}

async function getNews(): Promise<NewsEntry[]> {
  const client = getClient();
  if (!client) return [];
  try {
    const entries = await client.getEntries({ content_type: "news" });
    return entries.items as unknown as NewsEntry[];
  } catch {
    return [];
  }
}

export const revalidate = 10;

export default async function NewsPage() {
  const entries = await getNews();

  return (
    <main className="relative z-[1] py-16 px-[max(24px,8vw)]">
      <div className="mb-12">
        <span className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-brand-light mb-3">
          Updates
        </span>
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.02em] text-content-primary">
          News
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4 gap-y-10 lg:mx-60">
        {entries.length === 0 ? (
          <p className="text-content-muted col-span-2 text-center py-10">
            No news articles available at the moment.
          </p>
        ) : (
          entries.map((entry) => (
            <BlogPostCard
              key={entry.sys.id}
              title={entry.fields.title}
              date={entry.fields.date}
              desc={entry.fields.description}
              image={entry.fields.image.fields.file.url}
              keyId={entry.sys.id}
            />
          ))
        )}
      </div>
    </main>
  );
}
