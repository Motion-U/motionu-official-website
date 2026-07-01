import { config, fields, collection } from "@keystatic/core";

const projectTagOptions = [
  { label: "AI Chat", value: "AI Chat" },
  { label: "Tool", value: "Tool" },
  { label: "Web App", value: "Web App" },
  { label: "Game", value: "Game" },
] as const;

export default config({
  storage: {
    kind: "github",
    repo : `Motion-U/motionu-official-website`
  },
  collections: {
    news: collection({
      label: "News",
      slugField: "title",
      path: "content/news/*",
      format: { contentField: "content" },
      entryLayout: "content", 
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.text({
          label: "Date",
          description: 'e.g. "14 June 2026"',
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Event", value: "Event" },
            { label: "Product", value: "Product" },
            { label: "Announcement", value: "Announcement" },
            {label: "Story" , value : "Story"}
          ],
          defaultValue: "Event",
        }),
        image: fields.image({
          label: "Image",
          directory: "public/images/news",
          publicPath: "/images/news",
        }),
        content: fields.mdx({
          label: "Content",
          
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        image: fields.image({
          label: "Image",
          directory: "public/images/projects",
          publicPath: "/images/projects",
        }),
        link: fields.url({ label: "Project URL" }),
        credit: fields.text({ label: "Credit" }),
        tag: fields.select({
          label: "Tag",
          options: projectTagOptions,
          defaultValue: "Web App",
        }),
      },
    }),
  },
});