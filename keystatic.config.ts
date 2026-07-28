import { config, fields, collection } from "@keystatic/core";

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
      format: { data: "yaml" },
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
        link: fields.text({
          label: "Project Link",
          description: "External URL (opens in new tab)",
        }),
        credit: fields.text({
          label: "Credit",
          description: "Who built or maintains this project",
        }),
        tag: fields.select({
          label: "Tag",
          options: [
            { label: "AI Chat", value: "AI Chat" },
            { label: "Web App", value: "Web App" },
            { label: "Tool", value: "Tool" },
            { label: "Dashboard", value: "Dashboard" },
            { label: "Platform", value: "Platform" },
            { label: "Game", value: "Game" },
          ],
          defaultValue: "Web App",
        }),
      },
    }),
  },
});