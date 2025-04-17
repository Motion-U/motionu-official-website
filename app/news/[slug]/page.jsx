const contentful = require("contentful");
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default async function News({ params }) {
  // console.log(params.slug)
  const client = contentful.createClient({
    space: process.env.SPACE,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.ACCESS_TOKEN,
  });

  const entry = await client.getEntry(params.slug);
  const document = await entry.fields.content;
  const imageUrl = await entry.fields.image.fields.file.url;
  const date = await entry.fields.date;
  const src = "https:" + imageUrl;

  const Heading = ({ children }) => (
    <h1 className="text-3xl text-sky-800 font-bold">{children}</h1>
  );
  const Paragraph = ({ children }) => (
    <p className="text-gray-500 leading-loose py-4">{children}</p>
  );

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
    },
  };

  console.log(src)
  return (
    <>
      <section className=" mx-10 lg:mx-72 my-10 text-justify">
        {date}
        {documentToReactComponents(document, options)}
        <img src={src} className="w-1/2 mx-auto" />
      </section>
    </>
  );
}
