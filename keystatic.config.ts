import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    news: collection({
      label: "News",
      slugField: "title",
      path: "content/news/*",
      format: { contentField: "content" },
      // 👇 Move it here! This tells Keystatic to give the MDX field center stage in the UI
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
  },
});