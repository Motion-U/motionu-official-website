import contentful from "contentful";

const client = contentful.createClient({
  space: process.env.SPACE!,
  environment: "master",
  accessToken: process.env.ACCESS_TOKEN!,
});

export interface ProjectEntry {
  id: string;
  title: string;
  date?: string;
  image: string;
  link: string;
  description: string;
  credit?: string;
}

export async function fetchProjects(): Promise<ProjectEntry[]> {
  try {
    const entries = await client.getEntries({ content_type: "projects" });
    return entries.items.map((entry) => ({
      id: entry.sys.id,
      title: entry.fields.title as string,
      date: entry.fields.date as string | undefined,
      image: (entry.fields.image as { fields: { file: { url: string } } }).fields.file.url,
      link: entry.fields.link as string,
      description: entry.fields.description as string,
      credit: entry.fields.credit as string | undefined,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export function getClient() {
  return client;
}
