import BlogPostCard from "../components/BlogPostCard";
import Heading from "../components/Heading";
// import { client } from "@/external/contentful";
const contentful = require("contentful");

export const revalidate = 10;

export default async function page() {
    // DON'T TOUCH THIS PART
  const client = await contentful.createClient({
    space: process.env.SPACE,
    environment: "master",
    accessToken: process.env.ACCESS_TOKEN, 
  });
  // const client = await getClient();

  return (
    <section>
      <div className="text-center my-7">
        <Heading text={"News"}></Heading>
      </div>
      <div className="lg:grid grid-cols-2 gap-4 gap-y-10 lg:mx-60 m-4">
        {client
          .getEntries({ content_type: "news" })
          .then((entries) =>
            entries.items.map((entry) => (
              <BlogPostCard
                key={entry.sys.id}
                title={entry.fields.title}
                date={entry.fields.date}
                desc={entry.fields.description}
                image={entry.fields.image.fields.file.url}
                keyId={entry.sys.id}
              ></BlogPostCard>
            ))
          )}
      </div>
    </section>
  );
}
