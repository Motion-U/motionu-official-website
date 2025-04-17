
import contentful from 'contentful';
const client = await contentful.createClient({
    space: process.env.SPACE,
    environment: "master",
    accessToken: process.env.ACCESS_TOKEN,
});

export async function fetchProjects() {
    try {
        const entries = await client.getEntries({ content_type: "projects" });
        return entries.items.map((entry) => ({
            id: entry.sys.id,
            title: entry.fields.title,
            date: entry.fields.date,
            image: entry.fields.image.fields.file.url,
            link: entry.fields.link,
            description: entry.fields.description,
        }));
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getClient() {
    return client;
}
